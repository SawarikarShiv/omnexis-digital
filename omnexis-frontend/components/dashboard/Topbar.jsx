'use client'

import { useAuth } from '../../hooks/useAuth'
import { FiBell, FiSearch, FiUser } from 'react-icons/fi'

export default function Topbar() {
  const { user } = useAuth()

  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-8">
      <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-96">
        <FiSearch className="text-gray-400 mr-2" />
        <input 
          type="text" 
          placeholder="Search leads, campaigns..." 
          className="bg-transparent border-none focus:outline-none w-full text-sm"
        />
      </div>
      
      <div className="flex items-center space-x-6">
        <button className="relative text-gray-600 hover:text-primary-600">
          <FiBell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>
        
        <div className="flex items-center space-x-3 border-l pl-6">
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-800">{user?.name || 'Admin User'}</p>
            <p className="text-xs text-gray-500 capitalize">{user?.role || 'Administrator'}</p>
          </div>
          <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
            <FiUser size={20} />
          </div>
        </div>
      </div>
    </header>
  )
}
