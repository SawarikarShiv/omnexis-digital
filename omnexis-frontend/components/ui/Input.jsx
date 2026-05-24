'use client'

export default function Input({ 
  label, 
  error, 
  className = '', 
  ...props 
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-bold text-gray-700 mb-2 px-1">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white focus:border-transparent
          transition-all duration-200 placeholder:text-gray-400
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1.5 text-xs text-red-600 font-bold px-1">{error}</p>
      )}
    </div>
  )
}
