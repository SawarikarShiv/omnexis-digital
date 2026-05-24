'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { FiMenu, FiX, FiChevronDown, FiExternalLink } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const industries = [
  { name: 'Finance', slug: 'finance' },
  { name: 'Healthcare', slug: 'healthcare' },
  { name: 'Real Estate', slug: 'real-estate' },
  { name: 'Ecommerce', slug: 'ecommerce' },
  { name: 'Education', slug: 'education' },
  { name: 'Technology', slug: 'technology' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showIndustries, setShowIndustries] = useState(false)
  const pathname = usePathname()
  const { user, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gradient flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white text-lg font-black italic">O</div>
          Omnexis
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-bold tracking-wide transition-colors hover:text-primary-600 ${
                pathname === link.href ? 'text-primary-600' : scrolled ? 'text-gray-700' : 'text-gray-800'
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Industry Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setShowIndustries(true)}
            onMouseLeave={() => setShowIndustries(false)}
          >
            <button className={`text-sm font-bold flex items-center gap-1 transition-colors hover:text-primary-600 ${
              scrolled ? 'text-gray-700' : 'text-gray-800'
            }`}>
              Industries <FiChevronDown className={`transition-transform ${showIndustries ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {showIndustries && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100 p-2"
                >
                  <div className="grid grid-cols-1">
                    {industries.map((ind) => (
                      <Link
                        key={ind.slug}
                        href={`/industries/${ind.slug}`}
                        className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary-50 hover:text-primary-600 group transition-all"
                      >
                        <span className="font-medium">{ind.name}</span>
                        <FiExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="h-6 w-px bg-gray-200" />

          {user ? (
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="btn-primary py-2.5 px-6">Dashboard</Link>
              <button onClick={logout} className="text-sm font-bold text-gray-500 hover:text-red-600 transition">Logout</button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/login" className={`text-sm font-bold transition ${scrolled ? 'text-gray-700' : 'text-gray-800'}`}>Login</Link>
              <Link href="/register" className="btn-primary py-2.5 px-6">Get Started</Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`lg:hidden p-2 rounded-xl bg-gray-100 ${scrolled ? 'text-gray-900' : 'text-gray-800'}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 bg-white z-[60] lg:hidden p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <Link href="/" className="text-2xl font-bold text-gradient">Omnexis</Link>
              <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-100 rounded-xl">
                <FiX size={24} />
              </button>
            </div>
            
            <div className="flex flex-col space-y-6 mb-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-bold text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Industries</p>
                <div className="grid grid-cols-2 gap-4">
                  {industries.map(ind => (
                    <Link 
                      key={ind.slug} 
                      href={`/industries/${ind.slug}`} 
                      className="text-gray-600 font-bold"
                      onClick={() => setIsOpen(false)}
                    >
                      {ind.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <Link href="/register" className="btn-primary py-4 text-center text-lg" onClick={() => setIsOpen(false)}>Get Started</Link>
              <Link href="/login" className="bg-gray-100 text-gray-900 py-4 text-center rounded-2xl font-bold" onClick={() => setIsOpen(false)}>Login</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}