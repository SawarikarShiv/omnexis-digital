const express = require('express')
const router = express.Router()

router.get('/clients', (req, res) => res.json({ clients: [] }))

module.exports = router
