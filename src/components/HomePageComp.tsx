'use client'

import { fadeIn, staggerContainer } from '@/components/animations'
import PropertyCard from '@/components/PropertyCard'
import { projects } from '@/lib/constants'
import Link from 'next/link'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import AutoSlidingProjects from './AutoSlidingProjects '
import { StatsSection } from './StatsSection'
import { Testimonials } from './Testimonials'
import SectionTitle from './SectionTitle'
import FeaturedProjects from './FeaturedProjects'

export default function HomeComponent() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className=""
    >
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[85vh] sm:h-[80vh] md:h-[90vh] flex items-center overflow-hidden bg-cover bg-center bg-no-repeat
        shadow-2xl hover:shadow-green-700 group transition"
        style={{
          backgroundImage:
            "url('/images/land-drone-view.webp')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Content Container */}
        <div className="relative z-20 container mx-auto px-6 max-w-7xl text-center md:text-left 
        ">
          <motion.div variants={fadeIn('up', 'tween', 0.3, 1)}>
            <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight max-w-3xl mx-auto md:mx-0 tracking-tight drop-shadow-lg
            lg:group-hover:scale-125 lg:group-hover:translate-x-40 lg:group-hover:-translate-y-20 transform transition-transform duration-500 ease-in-out ">
              Your Gateway to Premium Land, Plots & Apartments
              <span className="text-yellow-400">{' '}Across Bangladesh — Especially in Dhaka</span>
            </h1>

            <p className="mt-6 text-md text-yellow-100 max-w-2xl mx-auto md:mx-0 leading-relaxed drop-shadow-md
            lg:group-hover:scale-125 lg:group-hover:translate-x-40 lg:group-hover:-translate-y-10 transform transition-transform duration-500 ease-in-out delay-300">
              Discover the most promising lands, plots, and apartments in Bangladesh, meticulously curated by Banglar Choya Model City Ltd. — your trusted partner in real estate excellence.

            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center md:justify-start gap-6 max-w-xs mx-auto md:mx-0
            lg:group-hover:scale-125 lg:group-hover:translate-x-80 transform transition-transform duration-500 ease-in-out delay-500
            ">
              <Link href={'/projects'} className=''>
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-300 to-yellow-600 hover:shadow-lg shadow-white border-white border-2 text-green-900 font-semibold p-4 cursor-pointer rounded-lg transition-transform duration-300"
                >
                  Explore Projects
                </motion.button>
              </Link>

              <Link href={'/contact'} className=''>
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-700 shadow-white border-white border-2 font-semibold p-4 cursor-pointer rounded-lg shadow hover:shadow-lg transition duration-300"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* About Section */}
      < motion.section
        className="py-28 bg-gradient-to-br from-green-300 via-white to-green-300"
        initial={{ opacity: 0, y: 60 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      > <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-24">

            <motion.div
              variants={fadeIn('right', 'tween', 0.3, 1)}
              className="md:w-1/2 rounded-3xl overflow-hidden shadow-xl ring-4 ring-yellow-400 ring-opacity-70 transition-shadow duration-500 hover:shadow-2xl"
            >
              <img
                src="/lands/nawabganj-investment-land.jpg"
                alt="About Banglar Choya"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            <motion.div
              variants={fadeIn('left', 'tween', 0.3, 1)}
              className="md:w-1/2 flex flex-col justify-center"
            >
              <div className="flex items-center mb-8">
                <div className="w-1.5 h-16 bg-yellow-400 rounded mr-6 shadow-md"></div>
                <h2
                  className="text-4xl font-extrabold text-green-900 mb-0 tracking-wide leading-tight font-serif"
                  style={{ fontVariantCaps: 'small-caps' }}
                >
                  About Banglar Choya Model City Ltd.
                </h2>
              </div>

              <p className="text-green-800 mb-8 leading-relaxed text-lg max-w-lg tracking-wide">
                Established on 20th October 2023, Banglar Choya Model City Ltd. is a premier real estate developer in Dhaka, specializing in land and plot sales with a legacy of trust and quality.
              </p>
              <p className="text-green-700 mb-12 leading-relaxed text-lg max-w-lg tracking-wide">
                We offer plots ranging from 3 to 10 kathas, customizable to your needs. Our projects are strategically located with excellent connectivity and promising future growth.
              </p>

              <Link href={'/about'}>
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer bg-gradient-to-r from-yellow-400 to-yellow-500 text-green-900 font-semibold px-12 py-4 rounded-lg shadow-inner shadow-yellow-300 transition-transform duration-300 hover:shadow-lg"
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section >

      {/* Testimonials */}
      <Testimonials></Testimonials>

      {/* stats / statistics  */}
      <StatsSection></StatsSection>


    </motion.div >
  )
}
