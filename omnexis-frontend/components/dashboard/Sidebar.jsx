'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  FiHome, FiTarget, FiUsers, FiDatabase, 
  FiBarChart2, FiUserCheck, FiUsers as FiTeam, 
  FiFileText, FiSettings 
} from 'react-icons/fi'

const menuItems = [
  { href: '/dashboard/overview', icon: FiHome, label: 'Overview' },
  { href: '/dashboard/campaigns', icon: FiTarget, label: 'Campaigns' },
  { href: '/dashboard/leads', icon: FiUsers, label: 'Leads' },
  { href: '/dashboard/crm', icon: FiDatabase, label: 'CRM' },
  { href: '/dashboard/analytics', icon: FiBarChart2, label: 'Analytics' },
  { href: '/dashboard/clients', icon: FiUserCheck, label: 'Clients' },
  { href: '/dashboard/team', icon: FiTeam, label: 'Team' },
  { href: '/dashboard/invoices', icon: FiFileText, label: 'Invoices' },
  { href: '/dashboard/settings', icon: FiSettings, label: 'Settings' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="bg-gray-900 text-white w-64 flex-shrink-0">
      <div className="p-4">
        <h2 className="text-xl font-bold">Omnexis Dashboard</h2>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-6 py-3 transition-colors ${
                isActive ? 'bg-primary-600' : 'hover:bg-gray-800'
              }`}
            >
              <item.icon className="mr-3" />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}