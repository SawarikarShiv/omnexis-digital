'use client'

import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiBriefcase, FiCalendar, FiEdit2, FiMessageSquare } from 'react-icons/fi'

export default function CustomerProfile({ customer }) {
  if (!customer) return (
    <div className="flex items-center justify-center h-64 text-gray-500">
      Select a customer to view details
    </div>
  )

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
    >
      {/* Header / Banner */}
      <div className="h-32 bg-gradient-to-r from-primary-600 to-primary-800" />
      
      <div className="px-8 pb-8">
        {/* Profile Info */}
        <div className="relative -mt-16 mb-6">
          <div className="w-32 h-32 bg-white rounded-2xl shadow-xl p-1 inline-block">
            <div className="w-full h-full bg-primary-100 rounded-xl flex items-center justify-center text-4xl font-bold text-primary-600">
              {customer.name?.charAt(0)}
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{customer.name}</h2>
                <p className="text-primary-600 font-medium">{customer.company}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition">
                  <FiEdit2 size={20} />
                </button>
                <button className="btn-primary py-2 px-4 flex items-center gap-2">
                  <FiMessageSquare size={18} /> Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-600">
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                <FiMail />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Email</p>
                <p className="font-medium">{customer.email}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-gray-600">
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                <FiPhone />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Phone</p>
                <p className="font-medium">{customer.phone || 'Not provided'}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-600">
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                <FiBriefcase />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Industry</p>
                <p className="font-medium">{customer.industry || 'Unknown'}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-gray-600">
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                <FiMapPin />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Location</p>
                <p className="font-medium">
                  {customer.address?.city ? `${customer.address.city}, ${customer.address.state}` : 'Not provided'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Status and Metrics */}
        <div className="border-t border-gray-100 pt-8 mt-8">
          <h3 className="text-lg font-bold mb-4">Customer Status</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-xl text-center">
              <p className="text-xs text-gray-400 mb-1 uppercase font-bold">Status</p>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                customer.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
              }`}>
                {customer.status || 'lead'}
              </span>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl text-center">
              <p className="text-xs text-gray-400 mb-1 uppercase font-bold">LTV</p>
              <p className="text-xl font-bold text-gray-800">${customer.ltv || '0.00'}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl text-center">
              <p className="text-xs text-gray-400 mb-1 uppercase font-bold">Acquired</p>
              <p className="text-sm font-bold text-gray-800">
                {customer.createdAt ? new Date(customer.createdAt).toLocaleDateString() : 'New'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
