'use client'

export default function ClientCard({ client }) {
  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm flex items-center space-x-4">
      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl font-bold text-primary-600">
        {client.name.charAt(0)}
      </div>
      <div>
        <h4 className="font-bold text-gray-800">{client.name}</h4>
        <p className="text-sm text-gray-500">{client.industry}</p>
        <p className="text-xs text-primary-600 mt-1 font-medium">{client.activeCampaigns} Active Campaigns</p>
      </div>
    </div>
  )
}
