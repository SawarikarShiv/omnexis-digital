'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-primary-900 rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          {/* Decorative gradients */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-600 rounded-full filter blur-[100px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-500 rounded-full filter blur-[100px] opacity-20 translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Supercharge Your Growth?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join 50+ successful businesses and start getting more leads, more sales, and better ROI today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">
                Get Your Free Audit
              </Link>
              <Link href="/pricing" className="bg-primary-800 border border-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition">
                View Pricing
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
