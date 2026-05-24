'use client'

import IndustryTemplate from '@/components/industry/IndustryTemplate'
import { FiActivity, FiSearch, FiHeart } from 'react-icons/fi'

export default function HealthcareIndustryPage() {
  const healthcareData = {
    name: 'Healthcare',
    description: 'Grow your practice and reach more patients. We specialize in HIPAA-compliant marketing for hospitals, clinics, and wellness centers.',
    stats: [
      { label: 'Patient Growth', value: '45%' },
      { label: 'CPA Reduction', value: '30%' },
      { label: 'Appointments', value: '5k+' },
      { label: 'Expert Team', value: 'Healthcare' }
    ],
    features: [
      {
        icon: <FiActivity />,
        title: 'Local SEO',
        description: 'Dominate local search results for patients looking for care in their area.'
      },
      {
        icon: <FiSearch />,
        title: 'Patient Education',
        description: 'Content marketing that establishes your practice as a trusted medical authority.'
      },
      {
        icon: <FiHeart />,
        title: 'Reputation Management',
        description: 'Build and maintain positive reviews and patient trust across platforms.'
      }
    ]
  }

  return <IndustryTemplate {...healthcareData} />
}
