const pool = require('../config/db')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body
    
    const userCheck = await pool.query('SELECT id FROM register_users WHERE email = $1', [email])
    if (userCheck.rows.length > 0) return res.status(400).json({ message: 'User already exists' })

    const hashedPassword = await bcrypt.hash(password, 10)
    
    const result = await pool.query(
      'INSERT INTO register_users (full_name, email, password) VALUES ($1, $2, $3) RETURNING id, full_name, email, role',
      [name, email, hashedPassword]
    )
    
    const user = result.rows[0]

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '30d' })
    res.status(201).json({ token, user: { id: user.id, name: user.full_name, email: user.email, role: user.role } })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    
    const result = await pool.query('SELECT * FROM register_users WHERE email = $1', [email])
    const user = result.rows[0]
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '30d' })
    res.json({ token, user: { id: user.id, name: user.full_name, email, role: user.role } })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getMe = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, full_name as name, email, role, phone, created_at as "createdAt" FROM register_users WHERE id = $1',
      [req.user.id]
    )
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.json(result.rows[0])
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { register, login, getMe }
