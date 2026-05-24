'use client'

import IndustryTemplate from '@/components/industry/IndustryTemplate'
import { FiTrendingUp, FiTarget, FiShield } from 'react-icons/fi'

export default function FinanceIndustryPage() {
  const financeData = {
    name: 'Finance',
    description: 'Establish trust and authority in the financial sector. We help banks, fintechs, and advisors reach qualified clients through compliant, data-driven marketing.',
    stats: [
      { label: 'Avg ROI', value: '4.5x' },
      { label: 'Leads Generated', value: '15k+' },
      { label: 'Client Retention', value: '98%' },
      { label: 'Industries Served', value: 'Finance' }
    ],
    features: [
      {
        icon: <FiTrendingUp />,
        title: 'Lead Generation',
        description: 'Target high-net-worth individuals and businesses looking for financial services.'
      },
      {
        icon: <FiTarget />,
        title: 'Search Optimization',
        description: 'Rank for high-intent keywords like "investment advisor" or "business loans".'
      },
      {
        icon: <FiShield />,
        title: 'Compliance-Ready',
        description: 'Marketing strategies that adhere to strict financial regulations and standards.'
      }
    ]
  }

  return <IndustryTemplate {...financeData} />
}
