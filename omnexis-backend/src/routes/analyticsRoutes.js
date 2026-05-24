const express = require('express')
const router = express.Router()

router.get('/overview', (req, res) => res.json({ 
  stats: { leads: 0, campaigns: 0, conversion: 0 },
  weeklyLeads: []
}))

module.exports = router
