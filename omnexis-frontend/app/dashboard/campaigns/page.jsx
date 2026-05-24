'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPlus, FiSearch, FiFilter, FiMoreVertical, FiTrendingUp, FiActivity, FiDollarSign } from 'react-icons/fi'
import Button from '@/components/ui/Button'

// Mock Data
const campaigns = [
  { id: 1, name: 'Summer Promo 2026', platform: 'Google Ads', status: 'Active', spend: '$1,250', leads: 145, roas: '2.4x' },
  { id: 2, name: 'Retargeting Flow', platform: 'Facebook', status: 'Paused', spend: '$450', leads: 32, roas: '1.8x' },
  { id: 3, name: 'B2B Lead Gen', platform: 'LinkedIn', status: 'Active', spend: '$2,100', leads: 89, roas: '1.2x' },
  { id: 4, name: 'Holiday Special', platform: 'TikTok', status: 'Completed', spend: '$3,500', leads: 420, roas: '3.1x' },
  { id: 5, name: 'Search Brand Exact', platform: 'Google Ads', status: 'Active', spend: '$800', leads: 210, roas: '4.5x' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
}

export default function CampaignsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'bg-green-100 text-green-700 border-green-200'
      case 'Paused': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'Completed': return 'bg-blue-100 text-blue-700 border-blue-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getPlatformColor = (platform) => {
    switch(platform) {
      case 'Google Ads': return 'text-red-600 bg-red-50'
      case 'Facebook': return 'text-blue-600 bg-blue-50'
      case 'LinkedIn': return 'text-indigo-600 bg-indigo-50'
      case 'TikTok': return 'text-pink-600 bg-pink-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <motion.div 
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="space-y-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Campaigns</h1>
            <p className="text-gray-500 font-medium mt-1">Manage and track your marketing campaigns</p>
          </div>
          <Button className="shadow-lg shadow-primary-500/30">
            <FiPlus className="mr-2" /> Create Campaign
          </Button>
        </motion.div>

        {/* Quick Metrics */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between group hover:shadow-md transition-shadow">
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Active Campaigns</p>
              <h3 className="text-3xl font-black text-gray-900">12</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
              <FiActivity size={24} />
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between group hover:shadow-md transition-shadow">
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Total Spend</p>
              <h3 className="text-3xl font-black text-gray-900">$8,100</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
              <FiDollarSign size={24} />
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between group hover:shadow-md transition-shadow">
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Avg. ROAS</p>
              <h3 className="text-3xl font-black text-gray-900">2.6x</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
              <FiTrendingUp size={24} />
            </div>
          </div>
        </motion.div>

        {/* Toolbar */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <div className="relative w-full sm:w-96">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search campaigns..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary-500 font-medium"
            />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-4 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold rounded-xl flex items-center justify-center transition-colors">
              <FiFilter className="mr-2" /> Filter
            </button>
          </div>
        </motion.div>

        {/* Data Table */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Campaign Name</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Spend</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Leads</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">ROAS</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {campaigns.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())).map((campaign) => (
                  <motion.tr 
                    key={campaign.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ backgroundColor: 'rgba(249, 250, 251, 0.5)' }}
                    className="group transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold mr-4 ${getPlatformColor(campaign.platform)}`}>
                          {campaign.platform.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{campaign.name}</div>
                          <div className="text-sm font-medium text-gray-500">{campaign.platform}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full border ${getStatusColor(campaign.status)}`}>
                        {campaign.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-bold text-gray-900">
                      {campaign.spend}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-bold text-gray-900">
                      {campaign.leads}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                        {campaign.roas}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-primary-600 p-2 rounded-lg hover:bg-primary-50 transition-colors">
                        <FiMoreVertical size={20} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
            {campaigns.length === 0 && (
              <div className="p-12 text-center text-gray-500 font-medium">
                No campaigns found matching your search.
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
