require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
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

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/leads', leadRoutes)
app.use('/api/campaigns', campaignRoutes)
app.use('/api/crm', crmRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/payments', paymentRoutes)
app.use('/api/ai', aiRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Something went wrong!' })
})

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})