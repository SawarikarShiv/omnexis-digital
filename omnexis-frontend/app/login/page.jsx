'use client'

import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, loading } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
      >
        <div className="text-center">
          <h2 className="text-3xl font-black text-gray-900">
            Sign in to Omnexis
          </h2>
          <p className="mt-2 text-sm text-gray-600 font-medium">
            Or{' '}
            <Link href="/register" className="text-primary-600 hover:text-primary-500 font-bold">
              create a new account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <Input
              label="Email address"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
            />
            <Input
              label="Password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 font-medium">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-bold text-primary-600 hover:text-primary-500">
                Forgot password?
              </a>
            </div>
          </div>

          <Button type="submit" loading={loading} className="w-full">
            Sign in
          </Button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-primary-50 rounded-2xl border border-primary-100">
          <p className="text-xs font-black uppercase tracking-widest text-primary-700 mb-2">Demo Access</p>
          <div className="space-y-1">
            <p className="text-sm text-primary-800"><span className="font-bold">Email:</span> demo@omnexis.com</p>
            <p className="text-sm text-primary-800"><span className="font-bold">Pass:</span> demo123</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}