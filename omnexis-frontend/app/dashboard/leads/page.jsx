'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import LeadTable from '../../../components/dashboard/LeadTable'

export default function LeadsPage() {
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()

  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/leads`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      })
      const data = await res.json()
      setLeads(data.leads || [])
    } catch (error) {
      console.error('Error fetching leads:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Loading leads...</div>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Lead Management</h1>
      <LeadTable leads={leads} />
    </div>
  )
}