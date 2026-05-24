const jwt = require('jsonwebtoken')
const pool = require('../config/db')

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
      return res.status(401).json({ message: 'Authentication required' })
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const result = await pool.query('SELECT id, full_name as name, email, role FROM register_users WHERE id = $1', [decoded.id])
    
    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'User not found' })
    }
    
    req.user = result.rows[0]
    next()
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' })
  }
}

module.exports = { protect }