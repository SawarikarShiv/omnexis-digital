'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const industries = [
  { name: 'Finance', slug: 'finance', icon: '💰', color: 'bg-blue-100' },
  { name: 'Healthcare', slug: 'healthcare', icon: '🏥', color: 'bg-green-100' },
  { name: 'Education', slug: 'education', icon: '📚', color: 'bg-purple-100' },
  { name: 'Real Estate', slug: 'real-estate', icon: '🏠', color: 'bg-orange-100' },
  { name: 'Ecommerce', slug: 'ecommerce', icon: '🛒', color: 'bg-pink-100' },
  { name: 'Travel', slug: 'travel', icon: '✈️', color: 'bg-cyan-100' },
  { name: 'Technology', slug: 'technology', icon: '💻', color: 'bg-indigo-100' },
  { name: 'Automotive', slug: 'automotive', icon: '🚗', color: 'bg-red-100' },
  { name: 'Restaurants', slug: 'restaurants', icon: '🍽️', color: 'bg-yellow-100' },
  { name: 'Legal', slug: 'legal', icon: '⚖️', color: 'bg-gray-100' },
  { name: 'Home Services', slug: 'home-services', icon: '🔧', color: 'bg-teal-100' },
  { name: 'Coaching', slug: 'coaching', icon: '🎯', color: 'bg-amber-100' },
]

export default function Industries() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600">Specialized digital marketing for 12+ industries</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link href={`/industries/${industry.slug}`}>
                <div className={`${industry.color} rounded-xl p-6 text-center hover:shadow-lg transition-all hover:transform hover:-translate-y-1 cursor-pointer`}>
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <h3 className="font-semibold text-gray-800">{industry.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}