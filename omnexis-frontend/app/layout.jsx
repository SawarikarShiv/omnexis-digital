import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '../context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Omnexis Digital Marketing - Grow Your Business Online',
  description: 'Digital marketing agency specializing in SEO, Google Ads, Social Media, and Lead Generation for 12+ industries.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster position="top-right" />
        </AuthProvider>
      </body>
    </html>
  )
}