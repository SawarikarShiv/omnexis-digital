'use client'

import { useAuth } from '../../hooks/useAuth'

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Welcome, {user?.name || 'User'}!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card">
          <h3 className="text-gray-500 text-sm">Total Leads</h3>
          <p className="text-3xl font-bold">124</p>
        </div>
        <div className="card">
          <h3 className="text-gray-500 text-sm">Active Campaigns</h3>
          <p className="text-3xl font-bold">12</p>
        </div>
        <div className="card">
          <h3 className="text-gray-500 text-sm">ROI</h3>
          <p className="text-3xl font-bold">+24%</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">New Lead: John Doe</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
                <span className="text-primary-600 text-sm">View</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="card">
          <h2 className="text-lg font-bold mb-4">Quick Stats</h2>
          <div className="h-48 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-400">Chart will be here</p>
          </div>
        </div>
      </div>
    </div>
  )
}
