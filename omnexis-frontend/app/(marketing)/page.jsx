'use client'

import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import Industries from '@/components/home/Industries'
import Testimonials from '@/components/home/Testimonials'
import Pricing from '@/components/home/Pricing'
import CTASection from '@/components/home/CTASection'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Services />
      <Industries />
      <Testimonials />
      <Pricing />
      <CTASection />
    </motion.div>
  )
}