'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Phone, MapPin } from 'lucide-react'
import { fadeIn, slideIn } from './animations'
import { Button } from './ui/button'

export default function Header() {
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Info Bar */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex justify-between items-center py-2 text-xs sm:text-sm text-green-900 font-medium"
        >
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-green-600" />
            <span>01337-938314</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-green-600" />
            <span>Gulshan-2, Dhaka</span>
          </div>
        </motion.div>

        {/* Main Navbar */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-3 sm:py-4 gap-y-2">
          
          {/* Logo */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideIn}
            className="flex items-center"
          >
            <Link href="/" className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-green-700 tracking-tight leading-none">
                Banglar Choya
              </span>
              <span className="text-[10px] sm:text-xs font-semibold bg-green-600 text-white px-2 py-0.5 rounded shadow-sm">
                Model City Ltd.
              </span>
            </Link>
          </motion.div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative text-sm font-medium transition duration-300 ease-in-out px-1 py-1 ${
                  pathname === link.path
                    ? 'text-green-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-green-400 after:to-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-2 rounded-md shadow hover:scale-105 hover:shadow-lg transition-all duration-300">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
