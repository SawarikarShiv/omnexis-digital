'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiCheck, FiArrowRight, FiTrendingUp, FiUsers, FiTarget } from 'react-icons/fi'

export default function IndustryTemplate({ name, description, features, stats }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-800 to-transparent opacity-50"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digital Marketing for <span className="text-secondary-400">{name}</span>
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl text-lg">
                Get a Free Quote
              </Link>
              <Link href="/services" className="bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-4 rounded-xl text-lg transition">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored Marketing Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We understand the unique challenges of the {name} industry and deliver strategies that work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 text-xl">
                  {feature.icon || <FiCheck />}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="bg-primary-600 rounded-3xl p-12 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your {name} Business?</h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Let's build a data-driven marketing machine that delivers consistent growth and ROI.
            </p>
            <Link href="/contact" className="bg-white text-primary-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition inline-flex items-center">
              Schedule Free Consultation <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
