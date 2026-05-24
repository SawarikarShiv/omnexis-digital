'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiGlobe, FiClock } from 'react-icons/fi'

const stats = [
  { icon: FiAward, value: '150+', label: 'Projects Completed' },
  { icon: FiUsers, value: '50+', label: 'Happy Clients' },
  { icon: FiGlobe, value: '12+', label: 'Industries Served' },
  { icon: FiClock, value: '5+', label: 'Years Experience' },
]

const team = [
  { name: 'John Smith', role: 'CEO & Founder', image: '/images/team/ceo.jpg', bio: '10+ years in digital marketing' },
  { name: 'Sarah Johnson', role: 'Marketing Director', image: '/images/team/marketing-director.jpg', bio: 'Ex-Google ads specialist' },
  { name: 'Mike Chen', role: 'SEO Specialist', image: '/images/team/seo-specialist.jpg', bio: 'Certified SEO expert' },
]

export default function AboutPage() {
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
            About Omnexis Digital
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            We're on a mission to help businesses grow through data-driven digital marketing strategies
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2019, Omnexis Digital started with a simple idea: digital marketing should be 
                transparent, data-driven, and results-oriented.
              </p>
              <p className="text-gray-600 mb-4">
                Today, we've grown into a full-service digital marketing agency serving clients across 
                12+ industries, from finance and healthcare to ecommerce and technology.
              </p>
              <p className="text-gray-600">
                Our team of experts combines creativity with analytics to deliver measurable results 
                that help our clients scale their businesses.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 rounded-xl h-96 relative"
            >
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                Team Photo Placeholder
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="text-4xl text-primary-600 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-400">
                  Photo
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}