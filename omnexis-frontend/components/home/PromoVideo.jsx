'use client'

import { useState } from 'react'
import VideoPlayer from '@/components/ui/VideoPlayer'
import { motion } from 'framer-motion'

export default function PromoVideo() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="py-20 bg-primary-600 text-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Watch How We Help Businesses Grow
            </h2>
            <p className="text-lg mb-6 text-primary-100">
              See how Omnexis Digital transforms businesses with data-driven marketing strategies.
              Get insights into our process and success stories.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span> 200% average lead increase
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span> 85% client retention rate
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span> 50+ successful campaigns
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {showVideo ? (
              <VideoPlayer
                src="/videos/promo-video.mp4"
                poster="/images/hero/dashboard-preview.png"
                title="How Omnexis Works"
              />
            ) : (
              <div 
                onClick={() => setShowVideo(true)}
                className="relative cursor-pointer group"
              >
                <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="/images/hero/dashboard-preview.png"
                    alt="Video Thumbnail"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                    <div className="bg-white rounded-full p-5 group-hover:scale-110 transition-transform">
                      <svg className="w-12 h-12 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}