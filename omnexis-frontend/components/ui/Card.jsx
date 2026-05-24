'use client'

export default function Card({ children, className = '', hover = true }) {
  return (
    <div className={`
      bg-white rounded-2xl border border-gray-100 shadow-sm p-6 
      ${hover ? 'hover:shadow-xl hover:border-primary-100 transition-all duration-300' : ''} 
      ${className}
    `}>
      {children}
    </div>
  )
}
