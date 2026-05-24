'use client'

import { Toaster } from 'react-hot-toast'

export default function Toast() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        className: 'font-bold rounded-xl shadow-xl',
        duration: 4000,
        style: {
          background: '#fff',
          color: '#333',
        },
        success: {
          iconTheme: {
            primary: '#0e8ce9',
            secondary: '#fff',
          },
        },
      }}
    />
  )
}
