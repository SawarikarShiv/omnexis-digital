'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiCheck, FiX } from 'react-icons/fi'

const plans = [
  {
    name: 'Starter',
    price: '999',
    period: 'month',
    description: 'Perfect for small businesses',
    features: [
      { name: 'SEO Audit', included: true },
      { name: 'Keyword Research', included: true },
      { name: 'Google Ads Management', included: false },
      { name: 'Social Media Management', included: false },
      { name: 'Email Marketing', included: false },
      { name: 'Monthly Reports', included: true },
      { name: 'Dedicated Account Manager', included: false },
      { name: '24/7 Support', included: false },
    ]
  },
  {
    name: 'Professional',
    price: '2,499',
    period: 'month',
    description: 'Best for growing businesses',
    popular: true,
    features: [
      { name: 'SEO Audit', included: true },
      { name: 'Keyword Research', included: true },
      { name: 'Google Ads Management', included: true },
      { name: 'Social Media Management', included: true },
      { name: 'Email Marketing', included: true },
      { name: 'Monthly Reports', included: true },
      { name: 'Dedicated Account Manager', included: true },
      { name: '24/7 Support', included: false },
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: [
      { name: 'SEO Audit', included: true },
      { name: 'Keyword Research', included: true },
      { name: 'Google Ads Management', included: true },
      { name: 'Social Media Management', included: true },
      { name: 'Email Marketing', included: true },
      { name: 'Monthly Reports', included: true },
      { name: 'Dedicated Account Manager', included: true },
      { name: '24/7 Support', included: true },
    ]
  }
]

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly')

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
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Choose the perfect plan for your business needs. No hidden fees.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`card relative ${plan.popular ? 'border-2 border-primary-500 shadow-xl' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm">
                    Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    {plan.price !== 'Custom' ? (
                      <>
                        <span className="text-4xl font-bold">${plan.price}</span>
                        <span className="text-gray-600">/{plan.period}</span>
                      </>
                    ) : (
                      <span className="text-3xl font-bold">Custom Pricing</span>
                    )}
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      {feature.included ? (
                        <FiCheck className="text-green-500 mr-2 flex-shrink-0" />
                      ) : (
                        <FiX className="text-red-500 mr-2 flex-shrink-0" />
                      )}
                      <span className={!feature.included ? 'text-gray-400' : ''}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href={plan.price === 'Custom' ? '/contact' : '/register'}
                  className={`block text-center py-3 rounded-lg font-semibold transition ${
                    plan.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { q: 'Can I switch plans later?', a: 'Yes, you can upgrade or downgrade your plan at any time.' },
              { q: 'Are there any setup fees?', a: 'No, we have zero setup fees for all plans.' },
              { q: 'Do you offer custom enterprise solutions?', a: 'Yes, contact our sales team for custom pricing.' },
              { q: 'Is there a contract?', a: 'Month-to-month contracts with no long-term commitment.' },
            ].map((faq, idx) => (
              <div key={idx} className="card">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}