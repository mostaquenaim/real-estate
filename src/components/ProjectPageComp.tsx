'use client'
import { projects } from '@/lib/constants'
import PropertyCard from '@/components/PropertyCard'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/components/animations'
import { Card } from '@/components/ui/card'

export default function ProjectPageComp() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="py-20 bg-green-50"
    >
      <div className="container mx-auto px-6 max-w-7xl md:py-20">
        {/* Header */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-extrabold text-green-900 mb-4 tracking-tight">
            Our <span className="text-yellow-400">Projects</span>
          </h1>
          <p className="text-green-800 text-lg leading-relaxed">
            Explore our premium residential projects in Dhaka's most promising locations.
          </p>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-green-600 to-yellow-400 mx-auto mt-6"></div>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <PropertyCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Plot Sizes Section */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 1)}
          className="mt-20"
        >
          <Card className="p-10 rounded-3xl bg-gradient-to-r from-green-100 to-yellow-100 border border-green-200 shadow-inner">
            <h2 className="text-2xl font-semibold mb-8 text-green-900 text-center">
              Plot Sizes Available
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6">
              {[
                '3 Decimal', '4 Decimal', '5 Decimal', '6 Decimal', '7 Decimal', '8 Decimal', '9 Decimal', '10 Decimal',
                '3 Katha', '5 Katha', '10 Katha',
              ].map((size) => (
                <div
                  key={size}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-default py-3 flex items-center justify-center text-green-700 font-semibold"
                >
                  {size}
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-green-700 italic text-sm">
              * Custom plot sizes and configurations available upon request.
            </p>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}
