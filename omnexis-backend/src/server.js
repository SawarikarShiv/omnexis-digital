require('dotenv').config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const authRoutes = require('./routes/authRoutes')
const leadRoutes = require('./routes/leadRoutes')
const campaignRoutes = require('./routes/campaignRoutes')
const crmRoutes = require('./routes/crmRoutes')
const analyticsRoutes = require('./routes/analyticsRoutes')
const paymentRoutes = require('./routes/paymentRoutes')
const aiRoutes = require('./routes/aiRoutes')

const app = express()

// Middleware
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// Root Route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Omnexis Backend Running Successfully 🚀',
    server: 'Omnexis Backend',
    port: process.env.PORT,
    environment: process.env.NODE_ENV
  })
})

// API Routes
app.use('/api/auth', authRoutes)
app.use('/api/leads', leadRoutes)
app.use('/api/campaigns', campaignRoutes)
app.use('/api/crm', crmRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/payments', paymentRoutes)
app.use('/api/ai', aiRoutes)

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route Not Found'
  })
})

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack)

  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  })
})

// Start Server
const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})