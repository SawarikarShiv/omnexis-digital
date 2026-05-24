'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah Evans',
    role: 'Marketing Manager, HealthPlus',
    text: 'Omnexis transformed our lead generation. We saw a 300% increase in qualified leads within just 3 months.',
    avatar: 'SE'
  },
  {
    name: 'David Chen',
    role: 'Founder, TechFlow',
    text: 'Their SEO strategies are top-notch. We now rank #1 for our most competitive keywords.',
    avatar: 'DC'
  },
  {
    name: 'Emily Rodriguez',
    role: 'CEO, ShopSpark',
    text: 'The ROI we get from their Google Ads management is incredible. Best marketing partner we have ever had.',
    avatar: 'ER'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card bg-gray-50 p-8 rounded-xl"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
