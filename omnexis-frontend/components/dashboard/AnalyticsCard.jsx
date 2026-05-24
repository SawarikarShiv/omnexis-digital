'use client'

export default function AnalyticsCard({ title, value, change, trend, icon: Icon }) {
  return (
    <div className="card p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        {Icon && (
          <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
            <Icon size={20} />
          </div>
        )}
      </div>
      <div className="flex items-center text-sm">
        <span className={`font-semibold ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {trend === 'up' ? '↑' : '↓'} {change}%
        </span>
        <span className="text-gray-400 ml-2">vs last month</span>
      </div>
    </div>
  )
}
