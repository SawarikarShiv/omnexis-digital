'use client'

import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import api from '../lib/api'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      fetchUser()
    } else {
      setLoading(false)
    }
  }, [])

  const fetchUser = async () => {
    try {
      const res = await api.get('/api/auth/me')
      setUser(res.data)
    } catch (error) {
      console.error('Auth error:', error.message)
      localStorage.removeItem('token')
    } finally {
      setLoading(false)
    }
  }

  const login = async (email, password) => {
    try {
      const res = await api.post('/api/auth/login', { email, password })
      
      const { token, user: userData } = res.data
      localStorage.setItem('token', token)
      setUser(userData)
      toast.success('Login successful!')
      router.push('/dashboard')
      return true
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed'
      toast.error(message)
      return false
    }
  }

  const register = async (userData) => {
    try {
      const res = await api.post('/api/auth/register', userData)
      
      const { token, user: registeredUser } = res.data
      localStorage.setItem('token', token)
      setUser(registeredUser)
      toast.success('Registration successful!')
      router.push('/dashboard')
      return true
    } catch (error) {
      const message = error.response?.data?.message || 'Registration failed'
      toast.error(message)
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    toast.success('Logged out successfully')
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}