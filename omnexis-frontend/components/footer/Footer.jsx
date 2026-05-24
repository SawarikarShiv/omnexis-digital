'use client'

import Link from 'next/link'
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Pricing Plans', href: '/pricing' },
    { label: 'Contact Us', href: '/contact' },
  ],
  industries: [
    { label: 'Finance', href: '/industries/finance' },
    { label: 'Healthcare', href: '/industries/healthcare' },
    { label: 'Ecommerce', href: '/industries/ecommerce' },
    { label: 'Technology', href: '/industries/technology' },
  ],
  support: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Help Center', href: '/help' },
  ]
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-bold text-gradient inline-block">
              Omnexis
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Leading data-driven digital marketing agency helping businesses scale through innovative strategies and performance-focused campaigns.
            </p>
            <div className="flex space-x-4">
              {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-bold mb-6">Industries</h4>
            <ul className="space-y-4">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <FiMapPin className="mt-1 text-primary-500" />
                <span>123 Business Avenue, Suite 100, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FiPhone className="text-primary-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FiMail className="text-primary-500" />
                <span>hello@omnexis.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Omnexis Digital. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.support.map((link) => (
              <Link key={link.label} href={link.href} className="text-gray-500 text-sm hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
