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
        y: -8,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
      }}
      className="group relative bg-white rounded-xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200"
    >
      {/* Status Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-emerald-600 text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow-md">
          Featured
        </span>
      </div>

      {/* Image Section */}
      <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-103"
          quality={90}
          priority={index < 2}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title & Location */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
            {project.title}
          </h3>
          <div className="flex items-center text-gray-600">
            <svg className="w-4 h-4 mr-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">{project.location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-5 leading-relaxed min-h-[2.5rem] line-clamp-3">
          {project.description}
        </p>

        {/* Key Specs */}
        <div className="grid grid-cols-2 gap-3 mb-5 pb-5 border-b border-gray-200">
          <div>
            <span className="block text-xs text-gray-500 font-medium mb-1.5">Land Size</span>
            <p className="text-sm font-semibold text-gray-900">{project.landSize}</p>
          </div>
          <div>
            <span className="block text-xs text-gray-500 font-medium mb-1.5">Plot Sizes</span>
            <p className="text-sm font-semibold text-gray-900">{project.plotSizes}</p>
          </div>
        </div>

        {/* Amenities */}
        {project.amenities && project.amenities.length > 0 && (
          <div className="mb-5">
            <span className="block text-xs text-gray-500 font-semibold mb-2.5 uppercase tracking-wide">Amenities</span>
            <div className="flex flex-wrap gap-1.5">
              {project.amenities.slice(0, 3).map((amenity, i) => (
                <span key={i} className="inline-block text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded">
                  {amenity}
                </span>
              ))}
              {project.amenities.length > 3 && (
                <span className="inline-block text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded">
                  +{project.amenities.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* CTA Button */}
        <Link href={`/projects/${project.slug}`}>
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-lg font-medium text-sm transition-colors duration-300 flex items-center justify-center gap-2"
          >
            View Details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}