'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiCheck } from 'react-icons/fi'

const plans = [
  {
    name: 'Starter',
    price: '999',
    features: ['SEO Audit', '5 Keywords', 'Monthly Reports', 'Email Support']
  },
  {
    name: 'Professional',
    price: '2,499',
    popular: true,
    features: ['Everything in Starter', 'PPC Management', 'Social Media', 'Priority Support']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Everything in Pro', 'Custom Strategy', 'Dedicated Manager', '24/7 Support']
  }
]

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className={`card bg-white p-8 rounded-xl relative ${plan.popular ? 'border-2 border-primary-600 shadow-xl' : ''}`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-0 bg-primary-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold mb-6">
                {plan.price === 'Custom' ? 'Custom' : `$${plan.price}`}
                {plan.price !== 'Custom' && <span className="text-sm text-gray-500">/mo</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <FiCheck className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`block text-center py-3 rounded-lg font-semibold transition ${
                  plan.popular ? 'bg-primary-600 text-white hover:bg-primary-700' : 'border border-primary-600 text-primary-600 hover:bg-primary-50'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
