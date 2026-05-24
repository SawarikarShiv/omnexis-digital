const pool = require('../config/db')
const { sendWhatsAppNotification, sendEmailNotification } = require('../services/notificationService')

exports.createLead = async (req, res) => {
  try {
    const { name, email, phone, industry, message, source } = req.body
    
    const result = await pool.query(
      'INSERT INTO leads (name, email, phone, industry, message, source) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [name, email, phone, industry, message, source || 'website']
    )
    const lead = result.rows[0]
    
    await sendWhatsAppNotification(lead)
    await sendEmailNotification(lead)
    
    res.status(201).json({ success: true, lead })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.getLeads = async (req, res) => {
  try {
    const { industry, status, page = 1, limit = 10 } = req.query
    
    let whereClause = []
    let values = []
    let paramIndex = 1
    
    if (industry) {
      whereClause.push(`industry = $${paramIndex++}`)
      values.push(industry)
    }
    
    if (status) {
      whereClause.push(`status = $${paramIndex++}`)
      values.push(status)
    }
    
    const whereString = whereClause.length > 0 ? `WHERE ${whereClause.join(' AND ')}` : ''
    
    const limitValue = Number(limit)
    const offsetValue = (Number(page) - 1) * limitValue
    
    const leadsQuery = await pool.query(`
      SELECT l.*, row_to_json(u) as user
      FROM leads l
      LEFT JOIN register_users u ON l."assignedTo" = u.id
      ${whereString}
      ORDER BY l."createdAt" DESC
      LIMIT $${paramIndex} OFFSET $${paramIndex + 1}
    `, [...values, limitValue, offsetValue])
    
    const leads = leadsQuery.rows
    
    if (leads.length > 0) {
      const leadIds = leads.map(l => l.id)
      const notesQuery = await pool.query(`SELECT * FROM lead_notes WHERE "leadId" = ANY($1)`, [leadIds])
      
      leads.forEach(lead => {
        lead.notes = notesQuery.rows.filter(note => note.leadId === lead.id)
      })
    }
    
    const totalQuery = await pool.query(`SELECT count(*) FROM leads ${whereString}`, values)
    const total = parseInt(totalQuery.rows[0].count, 10)
    
    res.json({ leads, total, page: Number(page), pages: Math.ceil(total / limitValue) })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.updateLeadStatus = async (req, res) => {
  try {
    const { id } = req.params
    const { status, notes } = req.body
    
    const result = await pool.query(
      'UPDATE leads SET status = $1, "updatedAt" = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
      [status, id]
    )
    const lead = result.rows[0]
    
    if (notes) {
      await pool.query(
        'INSERT INTO lead_notes (text, "leadId", "createdBy") VALUES ($1, $2, $3)',
        [notes, id, req.user.id]
      )
    }
    
    const notesQuery = await pool.query('SELECT * FROM lead_notes WHERE "leadId" = $1', [id])
    lead.notes = notesQuery.rows
    
    res.json({ success: true, lead })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}