'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useAnimation } from 'framer-motion'
import { Phone, MapPin, Menu, X, Mail } from 'lucide-react'
import { useRef, useState } from 'react'
import { containerVariants, fadeIn, lineVariants, slideIn } from './animations'
import { Button } from './ui/button'

export default function Header() {
  const controls = useAnimation()
  const ref = useRef(null)
  const pathname = usePathname()
  console.log("pathname", pathname);
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <div className='flex flex-col items-center justify-center'>
      {/* Top Info Bar */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn("down", "tween", 0.1, 0.5)}
        className="flex justify-end md:justify-around gap-5 md:gap-0 px-2 md:px-0 py-2 items-center text-xs md:text-sm font-medium bg-green-800 text-white w-full"
      >
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-white md:text-green-600" />
          <span className="hidden md:inline">
            <a href="tel:01337938314">+88 01337938322</a>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-white md:text-green-600" />
          <span className="hidden md:inline">
            <a href="mailto:banglarchoyamodelcity@gmail.com">
              banglarchoyamodelcity@gmail.com
            </a>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-white md:text-green-600" />
          <a
            href="https://maps.app.goo.gl/qYfDv6Trgdsd8kf77"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:underline hidden md:inline"
          >
            Gulshan-2, Dhaka
          </a>
        </div>
      </motion.div>

      <header className="p-5 md:p-0 absolute top-10 z-50 md:bg-white md:backdrop-blur md:shadow-lg md:shadow-green-200 md:border-b-2 border-green-200 w-full md:w-5/6 lg:w-3/4 rounded-lg">
        {/* Main Navbar */}
        <div className="flex justify-between md:justify-around items-center">
          {/* Logo */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={slideIn()}
            className="flex items-center"
          >
            <Link href="/" className="">
              <img src={'/Banglar-Choya-logo.png'} className='w-20 md:w-32' />
              {/* <Link href="/" className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-green-700 tracking-tight leading-none">
              Banglar Choya
            </span>
            <span className="text-[10px] sm:text-xs font-semibold bg-green-600 text-white px-2 py-0.5 rounded shadow-sm">
              Model City Ltd.
            </span>
          </Link> */}
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center justify-around gap-6">
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                className="flex flex-col items-center"
                whileHover="hover"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  show: { opacity: 1, y: 0 },
                  hover: { transition: { staggerChildren: 0.1 } }
                }}
              >
                <Link
                  href={link.path}
                  className={`relative text-sm font-medium transition-colors duration-300 px-1 py-1 
          ${pathname === link.path || pathname === link.path + '/'
                      ? 'text-green-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r hover:after:from-transparent hover:after:to-transparent after:from-green-400 after:to-green-600'
                      : 'text-gray-700 hover:text-green-600'
                    }`}
                >
                  {link.name}
                </Link>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, width: 0 },
                    show: { opacity: 0, width: 0 },
                    hover: {
                      opacity: 1,
                      width: "3rem",
                      transition: { duration: 0.3 }
                    }
                  }}
                  className="h-1 rounded-full bg-gradient-to-r from-emerald-400 via-lime-400 to-emerald-500 shadow-md"
                />
              </motion.div>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="cursor-pointer bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-2 rounded-md shadow hover:scale-105 hover:shadow-lg transition-all duration-300">
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
          <div className="backdrop-blur-lg md:hidden space-y-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block text-center px-4 py-2 rounded-md text-sm font-medium transition 
                  ${pathname === link.path || pathname === link.path + '/'
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
    </div>
  )
}
