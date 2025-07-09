'use client'

import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/components/animations'
import PropertyCard from '@/components/PropertyCard'
import { projects } from '@/lib/constants'
import { FloatingShapes } from './FloatingShapes'

export default function HomeComponent() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="py-16 bg-white"
    >
      {/* Hero Section */}
      <section
        className="relative h-[85vh] sm:h-[80vh] md:h-[90vh] flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/land-drone-view.webp')",
        }}
      >

        {/* <FloatingShapes /> */}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Content Container */}
        <div className="relative z-20 container mx-auto px-6 max-w-7xl text-center md:text-left">
          <motion.div variants={fadeIn('up', 'tween', 0.3, 1)}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight max-w-3xl mx-auto md:mx-0 tracking-tight drop-shadow-lg">
              Premium Land & Plots in <span className="text-yellow-400">Dhaka</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-yellow-100 max-w-2xl mx-auto md:mx-0 leading-relaxed drop-shadow-md">
              Banglar Choya Model City Ltd. offers carefully selected lands and plots in prime locations of Dhaka with unmatched quality and trust.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center md:justify-start gap-6 max-w-xs mx-auto md:mx-0">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg text-green-900 font-semibold px-10 py-4 rounded-lg transition-transform duration-300"
              >
                Explore Projects
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-700 font-semibold px-10 py-4 rounded-lg shadow hover:shadow-lg transition duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div variants={fadeIn('up', 'tween', 0.3, 1)}>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Our Featured Projects
              </h2>
              <div className="w-28 h-1 rounded-full bg-gradient-to-r from-green-500 to-yellow-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
              {projects.map((project, index) => (
                <PropertyCard key={project.slug || index} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-28 bg-green-50">
        <div className="container mx-auto px-6 max-w-7xl">
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

              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-green-900 font-semibold px-12 py-4 rounded-lg shadow-inner shadow-yellow-300 transition-transform duration-300 hover:shadow-lg"
              >
                Learn More About Us
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
