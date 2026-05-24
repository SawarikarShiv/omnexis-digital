'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import toast from 'react-hot-toast'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, industry: 'contact', source: 'contact_page' })
      })
      
      if (res.ok) {
        toast.success('Thank you! We\'ll get back to you within 24 hours.')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } catch (error) {
      toast.error('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Get in touch with our team for a free consultation
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FiMapPin className="text-primary-600 text-xl mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-gray-600">123 Business Avenue, Suite 100<br />New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FiPhone className="text-primary-600 text-xl mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FiMail className="text-primary-600 text-xl mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-600">hello@omnexis.com</p>
                    <p className="text-gray-600">support@omnexis.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FiClock className="text-primary-600 text-xl mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-400">
                Google Maps Integration
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button type="submit" disabled={loading} className="btn-primary w-full">
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}