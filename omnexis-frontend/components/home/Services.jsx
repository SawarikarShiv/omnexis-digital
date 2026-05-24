'use client'

import { motion } from 'framer-motion'
import { FiSearch, FiTrendingUp, FiUsers, FiMail, FiMessageCircle, FiCode } from 'react-icons/fi'

const services = [
  { icon: FiSearch, title: 'SEO', desc: 'Rank #1 on Google and drive organic traffic' },
  { icon: FiTrendingUp, title: 'Google Ads', desc: 'Get immediate ROI with PPC campaigns' },
  { icon: FiUsers, title: 'Social Media', desc: 'Build brand awareness on Facebook, Instagram & LinkedIn' },
  { icon: FiMessageCircle, title: 'WhatsApp Automation', desc: 'Automate lead nurturing and support' },
  { icon: FiMail, title: 'Email Marketing', desc: 'Convert leads with targeted email campaigns' },
  { icon: FiCode, title: 'Website Builder', desc: 'High-converting landing pages and websites' },
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600">Complete digital marketing solutions tailored to your industry</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card hover:transform hover:-translate-y-2"
            >
              <service.icon className="text-4xl text-primary-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}