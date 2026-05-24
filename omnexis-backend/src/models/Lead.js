const mongoose = require('mongoose')

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  industry: { type: String, required: true, enum: ['finance', 'education', 'healthcare', 'realestate', 'ecommerce', 'travel', 'technology', 'automotive', 'restaurants', 'legal', 'homeservices', 'coaching'] },
  message: { type: String },
  status: { type: String, enum: ['new', 'contacted', 'qualified', 'lost', 'converted'], default: 'new' },
  source: { type: String, default: 'website' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  notes: [{ text: String, createdAt: { type: Date, default: Date.now }, createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Lead', leadSchema)