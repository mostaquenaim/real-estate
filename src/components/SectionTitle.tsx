'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView, Variants } from 'framer-motion'
import { containerVariants, lineVariants } from './animations'

interface SectionTitleProps {
  title: string
  subtitle?: string
  highlightColor?: 'green' | 'blue' | 'purple' | 'orange' | 'pink' | 'indigo'
  align?: 'left' | 'center' | 'right'
  isPage?: boolean
}

const colorMap = {
  green: 'from-green-600 to-yellow-400',
  blue: 'from-sky-500 to-cyan-500',
  purple: 'from-purple-500 to-indigo-500',
  orange: 'from-orange-400 to-amber-500',
  pink: 'from-rose-400 to-pink-500',
  indigo: 'from-indigo-500 to-violet-500',
}

export default function SectionTitle({
  title,
  subtitle,
  highlightColor = 'green',
  align = 'center',
  isPage=true
}: SectionTitleProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-25%' })

  useEffect(() => {
    if (isInView) controls.start('show')
  }, [isInView, controls])

  const alignMap = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }

  const itemVariants = (): Variants => ({
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants()}
      className={`flex flex-col relative ${alignMap[align]} mb-24`}
    >
      {subtitle && (
        <motion.p
          variants={itemVariants()}
          className={`${!isPage && 'bg-gradient-to-br from-zinc-200 via-cyan-100 to-zinc-200 p-2 rounded-lg shadow-lg shadow-black'} text-[8px] md:text-xs font-semibold tracking-widest text-gray-500 uppercase mb-3`}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.h2
        variants={itemVariants()}
        className={`${!isPage && 'bg-gradient-to-br from-cyan-100 via-zinc-200 to-cyan-100 p-2 rounded-lg shadow-lg shadow-black'} text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-gray-900 mb-5 relative`}
      >
        {/* {title.split(' ').map((word, i) => ( */}
          <span className="relative inline-block mr-2">
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-green-700 via-black to-green-600">
              {title}
            </span>
          </span>
        {/* ))} */}
      </motion.h2>

      <motion.div
        variants={lineVariants()}
        className={`w-24 h-1.5 rounded-full bg-gradient-to-r ${colorMap[highlightColor]} shadow-md`}
      />

      {/* Decorative background blobs */}
      {/* <div className="absolute inset-0 -z-10 opacity-20 overflow-hidden">
        <div className="absolute w-72 h-72 bg-green-300 rounded-full filter blur-3xl mix-blend-multiply animate-blob -top-20 -left-20" />
        <div className="absolute w-72 h-72 bg-yellow-300 rounded-full filter blur-3xl mix-blend-multiply animate-blob animation-delay-3000 -bottom-24 -right-16" />
      </div> */}
    </motion.div>
  )
}
