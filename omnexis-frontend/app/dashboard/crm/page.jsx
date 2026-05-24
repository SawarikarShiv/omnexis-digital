'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPlus, FiSearch, FiFilter, FiMoreHorizontal, FiCalendar, FiDollarSign } from 'react-icons/fi'
import Button from '@/components/ui/Button'

// Mock Data
const initialStages = [
  { id: 'stage-1', name: 'New Lead', color: 'bg-blue-500' },
  { id: 'stage-2', name: 'Contacted', color: 'bg-yellow-500' },
  { id: 'stage-3', name: 'Qualified', color: 'bg-purple-500' },
  { id: 'stage-4', name: 'Proposal Sent', color: 'bg-orange-500' },
  { id: 'stage-5', name: 'Closed Won', color: 'bg-green-500' }
]

const initialDeals = [
  { id: 1, title: 'SEO Optimization Retainer', company: 'TechCorp Inc.', value: 4500, stageId: 'stage-1', date: '2026-06-01', avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, title: 'Website Redesign', company: 'Studio 45', value: 12000, stageId: 'stage-1', date: '2026-06-05', avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, title: 'PPC Campaign Setup', company: 'Growthly', value: 2500, stageId: 'stage-2', date: '2026-05-28', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: 4, title: 'Social Media Management', company: 'Cafe Beans', value: 1500, stageId: 'stage-3', date: '2026-05-30', avatar: 'https://i.pravatar.cc/150?u=4' },
  { id: 5, title: 'Content Marketing Hub', company: 'SaaS Co', value: 8000, stageId: 'stage-4', date: '2026-06-10', avatar: 'https://i.pravatar.cc/150?u=5' },
  { id: 6, title: 'Local SEO Package', company: 'Dentist Plus', value: 1000, stageId: 'stage-5', date: '2026-05-20', avatar: 'https://i.pravatar.cc/150?u=6' },
]

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)
}

export default function CRMPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [deals, setDeals] = useState(initialDeals)

  const filteredDeals = deals.filter(deal => 
    deal.company.toLowerCase().includes(searchTerm.toLowerCase()) || 
    deal.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStageTotal = (stageId) => {
    return filteredDeals
      .filter(deal => deal.stageId === stageId)
      .reduce((sum, deal) => sum + deal.value, 0)
  }

  return (
    <div className="p-4 md:p-8 h-full flex flex-col max-w-[1600px] mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 shrink-0"
      >
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">CRM Pipeline</h1>
          <p className="text-gray-500 font-medium mt-1">Track deals and manage your sales pipeline</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search deals..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 font-medium outline-none transition-shadow"
            />
          </div>
          <Button variant="outline" className="hidden sm:flex">
            <FiFilter className="mr-2" /> Filter
          </Button>
          <Button className="shadow-lg shadow-primary-500/30 whitespace-nowrap">
            <FiPlus className="mr-2" /> Add Deal
          </Button>
        </div>
      </motion.div>

      {/* Kanban Board Container */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden pb-4 custom-scrollbar">
        <div className="flex h-full gap-6 items-start min-w-max px-1">
          {initialStages.map((stage, index) => {
            const stageDeals = filteredDeals.filter(d => d.stageId === stage.id)
            const totalValue = getStageTotal(stage.id)

            return (
              <motion.div 
                key={stage.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-80 flex flex-col h-full max-h-full bg-gray-50/50 rounded-2xl border border-gray-100 shrink-0"
              >
                {/* Column Header */}
                <div className="p-4 border-b border-gray-100 bg-white/50 rounded-t-2xl backdrop-blur-sm sticky top-0 z-10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${stage.color}`}></div>
                      <h3 className="font-bold text-gray-900">{stage.name}</h3>
                      <span className="bg-gray-200 text-gray-600 text-xs font-bold px-2 py-0.5 rounded-full">
                        {stageDeals.length}
                      </span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-700 transition-colors p-1 rounded hover:bg-gray-200">
                      <FiMoreHorizontal size={20} />
                    </button>
                  </div>
                  <div className="text-sm font-bold text-gray-500">
                    {formatCurrency(totalValue)}
                  </div>
                </div>

                {/* Column Body / Cards */}
                <div className="p-3 overflow-y-auto flex-1 space-y-3 custom-scrollbar">
                  {stageDeals.map((deal, i) => (
                    <motion.div
                      key={deal.id}
                      layoutId={`deal-${deal.id}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm cursor-pointer group hover:border-primary-300 hover:shadow-md transition-all"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-xs font-bold px-2 py-1 bg-gray-100 text-gray-600 rounded-lg group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                          {deal.company}
                        </span>
                      </div>
                      
                      <h4 className="font-bold text-gray-900 mb-4 leading-tight">{deal.title}</h4>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1.5 font-medium">
                          <FiDollarSign className="text-green-500" />
                          <span className="text-gray-900 font-bold">{formatCurrency(deal.value)}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <FiCalendar />
                          <span className="text-xs">{new Date(deal.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                        <div className="flex -space-x-2">
                          <img src={deal.avatar} alt="Assignee" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" />
                        </div>
                        <div className="text-xs font-bold text-gray-400 hover:text-primary-600 transition-colors">
                          View Details
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Empty State for Column */}
                  {stageDeals.length === 0 && (
                    <div className="h-24 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-xl text-gray-400 text-sm font-medium">
                      Drop deals here
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.3);
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(156, 163, 175, 0.5);
        }
      `}</style>
    </div>
  )
}
