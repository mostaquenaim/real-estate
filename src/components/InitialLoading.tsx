'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const InitialLoading = () => {
    const [completed, setCompleted] = useState(false)
    const [startTransition, setStartTransition] = useState(false)
    const [hideLoader, setHideLoader] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setCompleted(true)
        }, 2500) // time for animation to complete

        const timerTrans = setTimeout(() => {
            setStartTransition(true) // start movement to top-left
        }, 2500)

        const finalHide = setTimeout(() => {
            setHideLoader(true) // fade out the loader after movement
        }, 3500)

        return () => {
            clearTimeout(timer)
            clearTimeout(timerTrans)
            clearTimeout(finalHide)
        }
    }, [])


    return (
        <AnimatePresence>
            {!hideLoader && (
                <motion.div
                    className="fixed inset-0 md:flex items-center justify-center z-[9999]"
                    style={{
                        backgroundImage: `url('/rsz_cover_photo.png')`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    // transition={{ duration: 0.1 }}
                >
                    <div className="absolute inset-0 bg-blue-900/40 z-0" />
                    <div className=" z-10">
                        <motion.div
                            className="w-64 h-64 absolute"
                            initial={{ scale: 1 }}
                            animate={{
                                top: startTransition ? '12%' : '50%',
                                left: startTransition ? '20%' : '50%',
                                scale: startTransition ? 0.5 : 1,
                                translateX: '-50%',
                                translateY: '-50%',
                            }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="#d1d5db"
                                    strokeWidth="10"
                                    fill="none"
                                />
                                <motion.circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="#16a34a"
                                    strokeWidth="10"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeDasharray="251.2"
                                    strokeDashoffset="251.2"
                                    animate={{ strokeDashoffset: 0 }}
                                    transition={{ duration: 2, ease: 'easeInOut' }}
                                />
                            </svg>

                            <motion.img
                                src="/rsz_banglar-choya-logo.png"
                                alt="Banglar Choya Logo"
                                className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 
                            object-contain pointer-events-none"
                                initial={{ scale: 1 }}
                                animate={{ scale: startTransition ? 0.9 : 1 }}
                                transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default InitialLoading
