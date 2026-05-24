'use client'

import IndustryTemplate from '@/components/industry/IndustryTemplate'
import { FiHome, FiMapPin, FiCamera } from 'react-icons/fi'

export default function RealEstateIndustryPage() {
  const realEstateData = {
    name: 'Real Estate',
    description: 'Sell properties faster and attract more listings. We help agencies and developers showcase their inventory to the right buyers.',
    stats: [
      { label: 'Inventory Turnover', value: '2.5x' },
      { label: 'Lead Quality', value: '85%' },
      { label: 'Prop Sales', value: '$50M+' },
      { label: 'Partnered', value: 'Agencies' }
    ],
    features: [
      {
        icon: <FiHome />,
        title: 'Listing Visibility',
        description: 'Maximize exposure for your listings on Google, Social Media, and Real Estate portals.'
      },
      {
        icon: <FiMapPin />,
        title: 'Geo-Targeted Ads',
        description: 'Reach potential buyers and sellers exactly where they are looking.'
      },
      {
        icon: <FiCamera />,
        title: 'Visual Marketing',
        description: 'High-impact video and image campaigns that bring properties to life.'
      }
    ]
  }

  return <IndustryTemplate {...realEstateData} />
}
