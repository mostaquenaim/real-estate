'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView, Variants } from 'framer-motion'
import { containerVariants, lineVariants } from './animations'

interface SectionTitleProps {
    title: string
    subtitle?: string
    highlightColor?: 'green' | 'blue' | 'purple' | 'orange' | 'pink' | 'indigo'
    align?: 'left' | 'center' | 'right'
}

const colorMap = {
    green: 'from-emerald-400 via-lime-400 to-emerald-500',
    blue: 'from-sky-400 via-cyan-400 to-blue-500',
    purple: 'from-purple-400 via-fuchsia-400 to-indigo-500',
    orange: 'from-amber-400 via-orange-400 to-amber-500',
    pink: 'from-pink-400 via-rose-400 to-pink-500',
    indigo: 'from-indigo-400 via-violet-400 to-indigo-500',
}

export default function SectionTitle({
    title,
    subtitle,
    highlightColor = 'green',
    align = 'center',
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
                    className="text-sm  p-2 rounded-lg font-semibold tracking-wide text-gray-500 uppercase mb-3"
                >
                    {subtitle}
                </motion.p>
            )}

            <motion.h2
                variants={itemVariants()}
                className=" p-2 rounded-lg shadow-green-300 shadow-lg border-green-600 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-5 leading-tight relative"
            >
                {title.split(' ').map((word, i) => (
                    <span key={i} className="relative inline-block mr-2 ">
                        <span className="relative z-10">{word}</span>
                        {/* <span
              className={`absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r ${colorMap[highlightColor]} opacity-30 rounded z-0`}
            /> */}
                    </span>
                ))}
            </motion.h2>

            <motion.div
                variants={lineVariants()}
                className={`w-36 h-1.5 rounded-full bg-gradient-to-r ${colorMap[highlightColor]} shadow-lg shadow-${highlightColor}/30`}
            />

            {/* Decorative Gradient Blobs */}
            <div className="absolute inset-0 -z-10 opacity-20 overflow-hidden">
                <div className="absolute w-72 h-72 bg-blue-400 rounded-full filter blur-3xl mix-blend-multiply animate-blob -top-20 -left-20" />
                <div className="absolute w-72 h-72 bg-emerald-400 rounded-full filter blur-3xl mix-blend-multiply animate-blob animation-delay-3000 -bottom-24 -right-16" />
            </div>
        </motion.div>
    )
}
