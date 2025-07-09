'use client'
import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion'
import Link from 'next/link'

export function PremiumPropertyCard({ project }) {
    const ref = useRef(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotateX = useMotionValue(0)
    const rotateY = useMotionValue(0)
    const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const centerX = mouseX - width / 2
        const centerY = mouseY - height / 2

        animate(x, centerX, { stiffness: 500, damping: 50 })
        animate(y, centerY, { stiffness: 500, damping: 50 })
        animate(rotateX, centerY / 20, { stiffness: 500, damping: 50 })
        animate(rotateY, -centerX / 20, { stiffness: 500, damping: 50 })
    }

    return (
        <motion.div
            ref={ref}
            style={{ transform }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                animate(rotateX, 0, { duration: 0.5 })
                animate(rotateY, 0, { duration: 0.5 })
            }}
            className="relative overflow-hidden rounded-2xl shadow-2xl group"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-premium-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative h-56 md:h-64 overflow-hidden rounded-t-2xl">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                    loading="lazy"
                    decoding="async"
                />
                {/* Gradient Overlay on bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
                    <h3 className="text-white text-xl font-semibold leading-tight truncate">{project.title}</h3>
                </div>
                {/* Featured Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-600 to-yellow-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg select-none">
                    Featured
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between h-[calc(100%-16rem)] md:h-[calc(100%-18rem)]">
                <div>
                    <div className="flex items-center text-gray-600 mb-3 space-x-2">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="text-sm font-medium">{project.location}</span>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base min-h-[3.5rem]">{project.description}</p>
                </div>

                <div className="flex justify-between items-center mb-6 text-gray-600 text-sm font-semibold tracking-wide">
                    <div>
                        <span className="block text-gray-400 text-xs font-normal">Total Land</span>
                        <p className="text-green-600">{project.landSize}</p>
                    </div>
                    <div>
                        <span className="block text-gray-400 text-xs font-normal">Plot Sizes</span>
                        <p className="text-yellow-600">{project.plotSizes}</p>
                    </div>
                </div>

                <Link href={`/projects/${project.slug}`}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-green-500 to-yellow-400 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                        aria-label={`View details of ${project.title}`}
                    >
                        View Details
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    )
}