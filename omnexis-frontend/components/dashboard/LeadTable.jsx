'use client'

export default function LeadTable({ leads }) {
  if (!leads || leads.length === 0) {
    return <div className="p-8 text-center bg-white rounded-xl shadow-sm border border-gray-100">
      <p className="text-gray-500">No leads found.</p>
    </div>
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Industry</th>
            <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {leads.map((lead, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-800">{lead.name}</td>
              <td className="px-6 py-4 text-gray-600">{lead.email}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  lead.status === 'qualified' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {lead.status || 'new'}
                </span>
              </td>
              <td className="px-6 py-4 text-gray-600">{lead.industry}</td>
              <td className="px-6 py-4 text-gray-500">{new Date(lead.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
