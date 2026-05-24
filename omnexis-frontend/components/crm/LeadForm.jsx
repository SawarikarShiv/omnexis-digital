'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import api from '@/lib/api'
import toast from 'react-hot-toast'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

const leadSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  industry: z.string().optional(),
  message: z.string().min(10, 'Message should be at least 10 characters'),
})

export default function LeadForm({ industry, onSuccess }) {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(leadSchema),
    defaultValues: { industry }
  })

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      await api.post('/api/leads', data)
      toast.success('Thank you! Our team will contact you soon.')
      reset()
      if (onSuccess) onSuccess()
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Full Name"
        placeholder="John Doe"
        error={errors.name?.message}
        {...register('name')}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          error={errors.email?.message}
          {...register('email')}
        />
        <Input
          label="Phone Number"
          placeholder="+1 (555) 000-0000"
          error={errors.phone?.message}
          {...register('phone')}
        />
      </div>

      <Input
        label="Company Name"
        placeholder="Company Inc."
        error={errors.company?.message}
        {...register('company')}
      />

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2 px-1">Message</label>
        <textarea
          className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white focus:border-transparent transition-all duration-200 ${errors.message ? 'border-red-500' : ''}`}
          rows="4"
          placeholder="How can we help you?"
          {...register('message')}
        ></textarea>
        {errors.message && <p className="mt-1 text-xs text-red-600 font-bold">{errors.message.message}</p>}
      </div>

      <Button type="submit" loading={loading} className="w-full">
        Send Inquiry
      </Button>
    </form>
  )
}
