'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  FiSearch, FiTrendingUp, FiUsers, FiMessageCircle, 
  FiMail, FiCode, FiDatabase, FiBarChart2 
} from 'react-icons/fi'

const services = [
  {
    icon: FiSearch,
    title: 'SEO Optimization',
    description: 'Rank higher on Google with our proven SEO strategies.',
    features: ['Keyword Research', 'On-page SEO', 'Link Building', 'Technical SEO']
  },
  {
    icon: FiTrendingUp,
    title: 'Google Ads',
    description: 'Get immediate traffic and leads with targeted PPC campaigns.',
    features: ['Search Ads', 'Display Ads', 'Remarketing', 'Shopping Ads']
  },
  {
    icon: FiUsers,
    title: 'Social Media Marketing',
    description: 'Build brand awareness and engagement across all platforms.',
    features: ['Content Creation', 'Paid Social', 'Community Management', 'Analytics']
  },
  {
    icon: FiMessageCircle,
    title: 'WhatsApp Automation',
    description: 'Automate customer support and lead nurturing.',
    features: ['Chatbots', 'Broadcast Lists', 'Auto-replies', 'Analytics']
  },
  {
    icon: FiMail,
    title: 'Email Marketing',
    description: 'Convert leads with personalized email campaigns.',
    features: ['Newsletters', 'Drip Campaigns', 'Segmentation', 'A/B Testing']
  },
  {
    icon: FiCode,
    title: 'Website Builder',
    description: 'High-converting landing pages and websites.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'CMS Integration']
  },
  {
    icon: FiDatabase,
    title: 'Lead Generation',
    description: 'Qualified leads delivered to your inbox.',
    features: ['Targeted Lists', 'Lead Scoring', 'CRM Integration', 'Follow-up Automation']
  },
  {
    icon: FiBarChart2,
    title: 'Analytics & Reporting',
    description: 'Data-driven insights to optimize your ROI.',
    features: ['Custom Dashboards', 'Monthly Reports', 'Conversion Tracking', 'ROI Analysis']
  }
]

export default function ServicesPage() {
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
            Our Digital Marketing Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Comprehensive solutions to help your business grow online
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="card hover:shadow-xl"
              >
                <service.icon className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">Get a free consultation and customized marketing plan</p>
          <Link href="/contact" className="btn-primary inline-block">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}