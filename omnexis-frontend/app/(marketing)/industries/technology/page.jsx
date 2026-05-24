'use client'

import IndustryTemplate from '@/components/industry/IndustryTemplate'
import { FiCpu, FiCode, FiCloud } from 'react-icons/fi'

export default function TechnologyIndustryPage() {
  const technologyData = {
    name: 'Technology',
    description: 'Accelerate your SaaS or tech company growth. We specialize in B2B lead generation and user acquisition for innovative technology brands.',
    stats: [
      { label: 'User Growth', value: '250%' },
      { label: 'LTV/CAC Ratio', value: '4.8x' },
      { label: 'Demo Requests', value: '10k+' },
      { label: 'Tech Stack', value: 'Optimized' }
    ],
    features: [
      {
        icon: <FiCpu />,
        title: 'B2B Lead Gen',
        description: 'Connect with decision-makers through highly targeted LinkedIn and Search campaigns.'
      },
      {
        icon: <FiCode />,
        title: 'Technical Content',
        description: 'Establish thought leadership with high-quality technical content that speaks to your audience.'
      },
      {
        icon: <FiCloud />,
        title: 'Product Marketing',
        description: 'Data-driven strategies to increase product adoption and reduce churn.'
      }
    ]
  }

  return <IndustryTemplate {...technologyData} />
}
