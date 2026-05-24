const express = require('express')
const router = express.Router()

router.get('/history', (req, res) => res.json({ payments: [] }))

module.exports = router
