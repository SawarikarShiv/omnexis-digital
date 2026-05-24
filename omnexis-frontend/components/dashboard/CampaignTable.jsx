'use client'

export default function CampaignTable({ campaigns }) {
  if (!campaigns || campaigns.length === 0) {
    return (
      <div className="bg-white p-8 text-center rounded-xl border">
        <p className="text-gray-500">No active campaigns found.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase">Campaign Name</th>
            <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase">Status</th>
            <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase">Budget</th>
            <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase">Spend</th>
            <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase">ROAS</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {campaigns.map((camp, index) => (
            <tr key={index}>
              <td className="px-6 py-4 font-medium">{camp.name}</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Active</span>
              </td>
              <td className="px-6 py-4 text-gray-600">${camp.budget}</td>
              <td className="px-6 py-4 text-gray-600">${camp.spend}</td>
              <td className="px-6 py-4 font-bold text-green-600">{camp.roas}x</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
