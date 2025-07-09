'use client'
import { motion } from 'framer-motion'

export const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute border-2 border-primary-300/30 rounded-lg"
        initial={{
          x: Math.random() * 100 - 50,
          y: Math.random() * 100 - 50,
          rotate: Math.random() * 360,
          width: `${Math.random() * 200 + 100}px`,
          height: `${Math.random() * 200 + 100}px`,
          opacity: 0.3
        }}
        animate={{
          x: Math.random() * 100 - 50,
          y: Math.random() * 100 - 50,
          rotate: Math.random() * 360,
          transition: {
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            repeatType: 'reverse'
          }
        }}
      />
    ))}
  </div>
)