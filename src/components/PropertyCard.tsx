'use client'

import { motion } from 'framer-motion'
import { fadeIn } from './animations'
import Link from 'next/link'
import Image from 'next/image'
import { Project } from './ExploreProjectsPageComp'

interface PropertyCardProps {
  project: Project
  index: number
}

export default function PropertyCard({ project, index }: PropertyCardProps) {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.15, 0.85)}
      whileHover={{ 
        y: -10,
        boxShadow: '0 30px 45px rgba(0, 0, 0, 0.15)'
      }}
      className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-100"
    >
      {/* Premium Badge */}
      <div className="absolute top-6 left-6 z-10">
        <span className="bg-gradient-to-r from-green-600 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Premium
        </span>
      </div>

      {/* Luxury Image with Overlay */}
      <div className="relative h-72 md:h-80 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          quality={90}
          priority={index < 2}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        
        {/* Floating Info */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-12">
          <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
          <div className="flex items-center text-gray-200">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">{project.location}</span>
          </div>
        </div>
      </div>

      {/* Luxury Content */}
      <div className="p-6">
        <p className="text-gray-600 mb-6 leading-relaxed text-sm min-h-[3.5rem]">
          {project.description}
        </p>

        {/* Luxury Specs */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-3 rounded-lg">
            <span className="block text-xs text-gray-500 font-medium mb-1">Total Land</span>
            <p className="text-green-600 font-semibold">{project.landSize}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <span className="block text-xs text-gray-500 font-medium mb-1">Plot Sizes</span>
            <p className="text-yellow-600 font-semibold">{project.plotSizes}</p>
          </div>
        </div>

        {/* Amenities (if available) */}
        {project.amenities && (
          <div className="mb-6">
            <h4 className="text-xs text-gray-500 font-medium mb-2">KEY AMENITIES</h4>
            <div className="flex flex-wrap gap-2">
              {project.amenities.slice(0, 4).map((amenity, i) => (
                <span key={i} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  {amenity}
                </span>
              ))}
              {project.amenities.length > 4 && (
                <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  +{project.amenities.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Luxury CTA Button */}
        <Link href={`/projects/${project.slug}`}>
          <motion.button
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 5px 15px rgba(16, 185, 129, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-lg font-medium tracking-wide shadow-md transition-all duration-300 flex items-center justify-center"
          >
            Explore Property
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.button>
        </Link>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-400 rounded-2xl pointer-events-none transition-all duration-300"></div>
    </motion.div>
  )
}