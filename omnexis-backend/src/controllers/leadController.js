const Lead = require('../models/Lead')
const { sendWhatsAppNotification, sendEmailNotification } = require('../services/notificationService')

exports.createLead = async (req, res) => {
  try {
    const lead = new Lead(req.body)
    await lead.save()
    
    // Send notifications (WhatsApp + Email to sales team)
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
    const filter = {}
    if (industry) filter.industry = industry
    if (status) filter.status = status
    
    const leads = await Lead.find(filter)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 })
      .populate('assignedTo', 'name email')
    
    const total = await Lead.countDocuments(filter)
    
    res.json({ leads, total, page, pages: Math.ceil(total / limit) })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.updateLeadStatus = async (req, res) => {
  try {
    const { id } = req.params
    const { status, notes } = req.body
    
    const lead = await Lead.findByIdAndUpdate(
      id,
      { status, updatedAt: Date.now(), $push: { notes: { text: notes, createdBy: req.user.id } } },
      { new: true }
    )
    
    res.json({ success: true, lead })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}