'use client'

import { useAuth } from '../../../hooks/useAuth'
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function DashboardOverview() {
  const { user } = useAuth()
  const [stats, setStats] = useState({ leads: 0, campaigns: 0, conversion: 0 })
  const [chartData, setChartData] = useState({ labels: [], datasets: [] })

  useEffect(() => {
    // Fetch dashboard data from your backend
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/analytics/overview`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    }).then(res => res.json()).then(data => {
      setStats(data.stats)
      setChartData({
        labels: data.weeklyLeads.map(l => l.day),
        datasets: [{ label: 'Leads', data: data.weeklyLeads.map(l => l.count), borderColor: 'rgb(59, 130, 246)', tension: 0.1 }]
      })
    })
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome back, {user?.name || 'Admin'}!</h1>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-bold text-blue-600">{stats.leads}</div>
          <div className="text-gray-600">Total Leads</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-bold text-green-600">{stats.campaigns}</div>
          <div className="text-gray-600">Active Campaigns</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-bold text-purple-600">{stats.conversion}%</div>
          <div className="text-gray-600">Conversion Rate</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="font-bold mb-4">Weekly Leads</h2>
        <Line data={chartData} />
      </div>
    </div>
  )
}