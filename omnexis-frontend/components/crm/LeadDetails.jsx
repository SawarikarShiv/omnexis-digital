'use client'

import { motion } from 'framer-motion'
import { FiUser, FiMail, FiPhone, FiTarget, FiStar, FiActivity } from 'react-icons/fi'

export default function LeadDetails({ lead }) {
  if (!lead) return (
    <div className="p-8 text-center bg-white rounded-2xl border border-dashed border-gray-200 text-gray-400">
      Select a lead to view details and history
    </div>
  )

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600 bg-green-50'
    if (score >= 50) return 'text-yellow-600 bg-yellow-50'
    return 'text-red-600 bg-red-50'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Lead Header Card */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white text-xl">
              <FiUser />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{lead.name}</h3>
              <p className="text-gray-500 text-sm">{lead.source || 'Website Lead'}</p>
            </div>
          </div>
          <div className={`px-4 py-2 rounded-xl flex items-center gap-2 font-bold ${getScoreColor(lead.score || 0)}`}>
            <FiStar fill="currentColor" />
            {lead.score || 0}% Lead Score
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <FiMail className="text-gray-400" />
            <span className="text-sm font-medium truncate">{lead.email}</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <FiPhone className="text-gray-400" />
            <span className="text-sm font-medium">{lead.phone || 'No phone'}</span>
          </div>
        </div>
      </div>

      {/* Activity Timeline Skeleton */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h4 className="font-bold mb-6 flex items-center gap-2">
          <FiActivity className="text-primary-600" /> Recent Activity
        </h4>
        <div className="space-y-6 relative">
          {/* Vertical Line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-100" />
          
          {[
            { date: '2 hours ago', action: 'Lead submitted contact form', type: 'form' },
            { date: 'Yesterday', action: 'Assigned to Sales Representative', type: 'assign' },
            { date: '3 days ago', action: 'Website visit from Google Search', type: 'web' }
          ].map((activity, i) => (
            <div key={i} className="relative pl-8">
              <div className="absolute left-0 top-1 w-6 h-6 bg-white border-2 border-primary-600 rounded-full flex items-center justify-center" />
              <div>
                <p className="text-sm font-bold text-gray-800">{activity.action}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-3">
        <button className="flex-1 btn-primary py-3">Schedule Call</button>
        <button className="flex-1 bg-gray-100 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-200 transition">
          Mark as Qualified
        </button>
      </div>
    </motion.div>
  )
}
