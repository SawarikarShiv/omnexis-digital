const express = require('express')
const router = express.Router()

// Basic lead routes
router.get('/', (req, res) => res.json({ leads: [] }))
router.post('/', (req, res) => res.status(201).json({ message: 'Lead created' }))

module.exports = router
