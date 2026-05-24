'use client'

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline',
  ghost: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
  danger: 'bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg'
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-6 py-3',
  lg: 'px-8 py-4 text-lg'
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  loading = false,
  ...props 
}) {
  const variantClass = variants[variant] || variants.primary
  const sizeClass = sizes[size] || sizes.md
  
  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl font-bold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none ${variantClass} ${sizeClass} ${className}`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </>
      ) : children}
    </button>
  )
}
