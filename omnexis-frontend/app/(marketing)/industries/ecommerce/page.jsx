'use client'

import IndustryTemplate from '@/components/industry/IndustryTemplate'
import { FiShoppingCart, FiTrendingUp, FiRepeat } from 'react-icons/fi'

export default function EcommerceIndustryPage() {
  const ecommerceData = {
    name: 'Ecommerce',
    description: 'Scale your online store and increase your ROAS. We help brands grow their revenue through optimized shopping ads and conversion rate optimization.',
    stats: [
      { label: 'Revenue Growth', value: '120%' },
      { label: 'Avg ROAS', value: '5.2x' },
      { label: 'Orders Processed', value: '100k+' },
      { label: 'Scalability', value: 'Ecommerce' }
    ],
    features: [
      {
        icon: <FiShoppingCart />,
        title: 'Shopping Ads',
        description: 'Dominate Google Shopping and Social Media marketplaces with optimized product feeds.'
      },
      {
        icon: <FiTrendingUp />,
        title: 'CRO',
        description: 'Improve your website user experience to convert more visitors into buyers.'
      },
      {
        icon: <FiRepeat />,
        title: 'Retention Marketing',
        description: 'Build customer loyalty and increase lifetime value through email and SMS automation.'
      }
    ]
  }

  return <IndustryTemplate {...ecommerceData} />
}
