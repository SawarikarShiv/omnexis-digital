'use client'

import { motion } from 'framer-motion'
import { FiMoreVertical, FiPlus } from 'react-icons/fi'

const columns = [
  { id: 'new', title: 'New Leads', color: 'bg-blue-500' },
  { id: 'qualified', title: 'Qualified', color: 'bg-purple-500' },
  { id: 'negotiation', title: 'Negotiation', color: 'bg-yellow-500' },
  { id: 'closed', title: 'Closed Won', color: 'bg-green-500' },
]

export default function PipelineBoard({ leads = [] }) {
  const getLeadsByStatus = (status) => leads.filter(l => (l.status || 'new') === status)

  return (
    <div className="flex gap-6 overflow-x-auto pb-4 min-h-[500px]">
      {columns.map((col) => (
        <div key={col.id} className="flex-shrink-0 w-80">
          <div className="flex justify-between items-center mb-4 px-2">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${col.color}`} />
              <h4 className="font-bold text-gray-700">{col.title}</h4>
              <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full font-bold">
                {getLeadsByStatus(col.id).length}
              </span>
            </div>
            <button className="text-gray-400 hover:text-primary-600 transition">
              <FiPlus />
            </button>
          </div>

          <div className="bg-gray-100/50 rounded-2xl p-3 min-h-full border border-dashed border-gray-200">
            <div className="space-y-3">
              {getLeadsByStatus(col.id).map((lead, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2 }}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 cursor-grab active:cursor-grabbing"
                >
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-bold text-gray-900">{lead.name}</p>
                    <button className="text-gray-400"><FiMoreVertical size={14} /></button>
                  </div>
                  <p className="text-xs text-gray-500 truncate mb-3">{lead.company || 'Private Lead'}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      {new Date().toLocaleDateString()}
                    </span>
                    <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-[10px] font-bold">
                      {lead.name?.charAt(0)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
