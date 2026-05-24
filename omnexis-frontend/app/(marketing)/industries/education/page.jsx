'use client'

import IndustryTemplate from '@/components/industry/IndustryTemplate'
import { FiBookOpen, FiUsers, FiAward } from 'react-icons/fi'

export default function EducationIndustryPage() {
  const educationData = {
    name: 'Education',
    description: 'Increase student enrollments and build your institution brand. We help schools, universities, and edtech companies reach motivated learners.',
    stats: [
      { label: 'Enrollment Up', value: '35%' },
      { label: 'Cost Per Lead', value: '-25%' },
      { label: 'Students Reached', value: '1M+' },
      { label: 'Institutions', value: 'Education' }
    ],
    features: [
      {
        icon: <FiBookOpen />,
        title: 'Student Recruitment',
        description: 'Target prospective students across search and social media with compelling campaigns.'
      },
      {
        icon: <FiUsers />,
        title: 'Social Proof',
        description: 'Leverage alumni success stories and testimonials to build credibility and trust.'
      },
      {
        icon: <FiAward />,
        title: 'Brand Authority',
        description: 'Content marketing that positions your institution as a leader in educational excellence.'
      }
    ]
  }

  return <IndustryTemplate {...educationData} />
}
