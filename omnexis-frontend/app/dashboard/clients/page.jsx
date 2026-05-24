'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPlus, FiSearch, FiFilter, FiMail, FiPhone, FiMoreVertical, FiTrendingUp, FiUsers, FiClock } from 'react-icons/fi'
import Button from '@/components/ui/Button'

// Mock Data
const clients = [
  { id: 1, company: 'TechCorp Inc.', industry: 'Software', contact: 'Sarah Jenkins', email: 'sarah@techcorp.com', phone: '+1 (555) 123-4567', status: 'Active', mrr: 4500, since: '2025-01-15', avatar: 'https://i.pravatar.cc/150?u=techcorp' },
  { id: 2, company: 'Studio 45', industry: 'Design', contact: 'Mike Ross', email: 'mike@studio45.co', phone: '+1 (555) 987-6543', status: 'Active', mrr: 2800, since: '2025-03-10', avatar: 'https://i.pravatar.cc/150?u=studio45' },
  { id: 3, company: 'Growthly', industry: 'Marketing', contact: 'Emma Stone', email: 'emma@growthly.io', phone: '+1 (555) 456-7890', status: 'Onboarding', mrr: 1500, since: '2026-05-01', avatar: 'https://i.pravatar.cc/150?u=growthly' },
  { id: 4, company: 'Cafe Beans', industry: 'Retail', contact: 'David Kim', email: 'david@cafebeans.com', phone: '+1 (555) 789-0123', status: 'Active', mrr: 850, since: '2024-11-20', avatar: 'https://i.pravatar.cc/150?u=cafebeans' },
  { id: 5, company: 'SaaS Co', industry: 'Technology', contact: 'Alex Rivera', email: 'alex@saasco.net', phone: '+1 (555) 234-5678', status: 'Paused', mrr: 6000, since: '2025-08-05', avatar: 'https://i.pravatar.cc/150?u=saasco' },
  { id: 6, company: 'Dentist Plus', industry: 'Healthcare', contact: 'Dr. Smith', email: 'hello@dentistplus.com', phone: '+1 (555) 345-6789', status: 'Active', mrr: 1200, since: '2026-02-14', avatar: 'https://i.pravatar.cc/150?u=dentistplus' },
  { id: 7, company: 'Eco Builders', industry: 'Construction', contact: 'Tom Hardy', email: 'tom@ecobuilders.com', phone: '+1 (555) 876-5432', status: 'Active', mrr: 3200, since: '2025-06-22', avatar: 'https://i.pravatar.cc/150?u=ecobuilders' },
  { id: 8, company: 'FinTech App', industry: 'Finance', contact: 'Rachel Green', email: 'rachel@fintechapp.io', phone: '+1 (555) 901-2345', status: 'Onboarding', mrr: 5500, since: '2026-05-15', avatar: 'https://i.pravatar.cc/150?u=fintechapp' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
}

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)
}

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredClients = clients.filter(client => 
    client.company.toLowerCase().includes(searchTerm.toLowerCase()) || 
    client.contact.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'bg-green-100 text-green-700 border-green-200'
      case 'Paused': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'Onboarding': return 'bg-blue-100 text-blue-700 border-blue-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
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
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Clients Directory</h1>
            <p className="text-gray-500 font-medium mt-1">Manage your agency's client portfolio and relationships</p>
          </div>
          <Button className="shadow-lg shadow-primary-500/30">
            <FiPlus className="mr-2" /> Add New Client
          </Button>
        </motion.div>

        {/* Quick Metrics */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-lg text-white flex items-center justify-between relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
            <div className="relative z-10">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Total Active Clients</p>
              <h3 className="text-4xl font-black">{clients.filter(c => c.status === 'Active').length}</h3>
            </div>
            <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <FiUsers size={24} className="text-gray-300" />
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between group hover:shadow-md transition-shadow">
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Total MRR</p>
              <h3 className="text-3xl font-black text-gray-900">
                {formatCurrency(clients.filter(c => c.status !== 'Paused').reduce((sum, c) => sum + c.mrr, 0))}
              </h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
              <FiTrendingUp size={24} />
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between group hover:shadow-md transition-shadow">
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Avg. Lifespan</p>
              <h3 className="text-3xl font-black text-gray-900">14 <span className="text-xl text-gray-400 font-bold">mo</span></h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
              <FiClock size={24} />
            </div>
          </div>
        </motion.div>

        {/* Toolbar */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <div className="relative w-full sm:w-96">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search companies or contacts..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary-500 font-medium"
            />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-4 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold rounded-xl flex items-center justify-center transition-colors">
              <FiFilter className="mr-2" /> Filter By Status
            </button>
          </div>
        </motion.div>

        {/* Client Cards Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredClients.map((client) => (
            <motion.div 
              key={client.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col group"
            >
              {/* Card Header */}
              <div className="p-6 pb-0 relative">
                <button className="absolute top-4 right-4 text-gray-300 hover:text-gray-600 transition-colors p-1">
                  <FiMoreVertical size={20} />
                </button>
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <img 
                      src={client.avatar} 
                      alt={client.company} 
                      className="w-20 h-20 rounded-2xl object-cover shadow-sm border border-gray-100 group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <div className={`w-3 h-3 rounded-full ${client.status === 'Active' ? 'bg-green-500' : client.status === 'Onboarding' ? 'bg-blue-500' : 'bg-yellow-500'}`}></div>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 leading-tight">{client.company}</h3>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">{client.industry}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-center mb-6">
                  <span className={`px-3 py-1 inline-flex text-xs font-bold rounded-full border ${getStatusColor(client.status)}`}>
                    {client.status}
                  </span>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <p className="text-xs text-gray-500 font-medium mb-1">Monthly Recurring Revenue</p>
                  <p className="font-black text-xl text-gray-900">{formatCurrency(client.mrr)}</p>
                </div>

                <div className="mt-auto space-y-3">
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase mb-1">Primary Contact</p>
                    <p className="font-semibold text-gray-900 text-sm">{client.contact}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <a href={`mailto:${client.email}`} className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-primary-50 hover:text-primary-600 transition-colors tooltip-trigger relative">
                      <FiMail size={18} />
                    </a>
                    <a href={`tel:${client.phone}`} className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-primary-50 hover:text-primary-600 transition-colors tooltip-trigger relative">
                      <FiPhone size={18} />
                    </a>
                    <div className="flex-1 text-right">
                      <button className="text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors">
                        View Profile &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredClients.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiSearch className="text-gray-400" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">No clients found</h3>
            <p className="text-gray-500">We couldn't find any clients matching your search.</p>
          </div>
        )}

      </motion.div>
    </div>
  )
}
