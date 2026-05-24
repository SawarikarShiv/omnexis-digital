'use client'

import IndustryTemplate from '@/components/industry/IndustryTemplate'
import { FiCheckCircle, FiTrendingUp, FiTarget } from 'react-icons/fi'

export default function GenericIndustryPage({ params }) {
  // Since these are static routes in the current setup, I'll just use a fallback or specific ones.
  // For simplicity, I'll create one for each folder.
  // This is for Automotive.
  
  const industryData = {
    name: 'Automotive',
    description: 'Drive more sales and service appointments for your dealership. We specialize in high-impact marketing for the automotive industry.',
    stats: [
      { label: 'Sales Increase', value: '25%' },
      { label: 'Service Leads', value: '40%' },
      { label: 'Market Share', value: '+12%' },
      { label: 'Dealerships', value: 'Automotive' }
    ],
    features: [
      {
        icon: <FiCheckCircle />,
        title: 'Inventory Ads',
        description: 'Showcase your current inventory to local buyers on Google and Facebook.'
      },
      {
        icon: <FiTrendingUp />,
        title: 'Service Marketing',
        description: 'Target existing owners for service and maintenance through email and SMS.'
      },
      {
        icon: <FiTarget />,
        title: 'Local SEO',
        description: 'Be the first dealership found when local buyers search for their next vehicle.'
      }
    ]
  }

  return <IndustryTemplate {...industryData} />
}
