'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Phone, MapPin, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { fadeIn, slideIn } from './animations'
import { Button } from './ui/button'

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-green-100">
      {/* Top Info Bar */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="flex justify-around items-center py-2 text-xs sm:text-sm text-green-900 font-medium"
      >
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-green-600" />
          <span>
            <a href="tel:01337938314">
              01337-938314
            </a>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-green-600" />
          <span>Gulshan-2, Dhaka</span>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <div className="flex justify-between md:justify-around items-center py-3 sm:py-4">
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-around gap-6">
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

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-2 rounded-md shadow hover:scale-105 hover:shadow-lg transition-all duration-300">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-green-700 focus:outline-none">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden space-y-2 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block text-center px-4 py-2 rounded-md text-sm font-medium transition ${
                pathname === link.path
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-800 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="px-4">
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-md py-2 shadow hover:scale-105 transition duration-300">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
