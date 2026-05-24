const express = require('express')
const router = express.Router()

router.post('/generate-content', (req, res) => res.json({ content: 'AI Generated Content' }))

module.exports = router
