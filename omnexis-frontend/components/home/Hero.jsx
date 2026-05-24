'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="relative container py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Grow Your Business with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                Data-Driven Marketing
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Omnexis Digital helps businesses across 12+ industries scale with SEO, Google Ads, 
              Social Media, and Lead Generation. Get qualified leads and maximize ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition text-center">
                Get Free Consultation
              </Link>
              <Link href="/services" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition text-center">
                View Services
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <Image
              src="/images/hero/hero-illustration.svg"
              alt="Digital Marketing Illustration"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}