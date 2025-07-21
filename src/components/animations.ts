'use client'
import { AnimationGeneratorType, Variants } from 'framer-motion'

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

export const itemVariants = (): Variants => ({
  hidden: {
    opacity: 0,
    y: 40
  },
  show: {
    opacity: 1, y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15
    }
  },
})

export const containerVariants = (): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
})

export const lineVariants = (): Variants => ({
  hidden: { scaleX: 0, originX: 0.5 },
  show: {
    scaleX: 1,
    transition: {
      duration: 0.9,
      delay: 0.3,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
})

export const fadeIn = (
  direction: 'up' | 'down' | 'left' | 'right', 
  type: AnimationGeneratorType, 
  delay: number, 
  duration: number
): Variants => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
})

export const slideIn = (): Variants => ({
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    }
  },
});

export const textVariant = (delay: number) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
})

