'use client'

import { useAuth } from '../../hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Sidebar from '../../components/dashboard/Sidebar'
import Topbar from '../../components/dashboard/Topbar'

export default function DashboardLayout({ children }) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading) {
    return <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
    </div>
  }

  if (!user) return null

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  )
}