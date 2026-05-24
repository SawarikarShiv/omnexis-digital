'use client'

export default function Loader({ size = 'md', color = 'primary' }) {
  const sizes = {
    sm: 'w-5 h-5 border-2',
    md: 'w-10 h-10 border-4',
    lg: 'w-16 h-16 border-4'
  }
  
  const colors = {
    primary: 'border-primary-200 border-t-primary-600',
    white: 'border-white/20 border-t-white'
  }

  return (
    <div className="flex items-center justify-center p-4">
      <div className={`animate-spin rounded-full ${sizes[size]} ${colors[color]}`} />
    </div>
  )
}
