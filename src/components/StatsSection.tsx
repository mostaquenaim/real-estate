'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { InView } from 'react-intersection-observer'
import { HiOutlineOfficeBuilding , HiOutlineUserGroup, HiOutlineMap, HiOutlineEmojiHappy } from 'react-icons/hi'


const stats = [
  { value: 25, suffix: '+', label: 'Projects Completed', icon: HiOutlineOfficeBuilding  },
  { value: 500, suffix: '+', label: 'Happy Clients', icon: HiOutlineUserGroup },
  { value: 100, suffix: ' Acres', label: 'Land Developed', icon: HiOutlineMap },
  { value: 99, suffix: '%', label: 'Client Satisfaction', icon: HiOutlineEmojiHappy },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } },
}

export const StatsSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-green-600 via-green-900 to-green-600 overflow-hidden">
      {/* Subtle animated waves background */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-30">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#064e3b"
            fillOpacity="0.6"
            d="M0,64L48,80C96,96,192,128,288,160C384,192,480,224,576,224C672,224,768,192,864,181.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
        >
          {stats.map(({ value, suffix, label, icon: Icon }, i) => (
            <InView key={i} triggerOnce>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  variants={itemVariants}
                  className="relative bg-white/10 backdrop-blur-md rounded-3xl p-10 flex flex-col items-center shadow-lg border border-green-700 hover:shadow-2xl transition-shadow duration-500 cursor-default select-none"
                >
                  <div className="bg-yellow-400 rounded-full p-4 mb-6 shadow-xl text-green-900">
                    <Icon size={48} />
                  </div>
                  <div className="text-5xl font-extrabold text-yellow-400 tracking-tight mb-2 drop-shadow-lg">
                    {inView ? (
                      <CountUp
                        end={value}
                        suffix={suffix}
                        duration={3}
                        useEasing
                        easingFn={(t, b, c, d) => (c * (t /= d) * t * t + b)} // cubic ease-in
                      />
                    ) : (
                      0
                    )}
                  </div>
                  <div className="text-white text-xl font-semibold tracking-wide">{label}</div>
                  {/* Decorative underline */}
                  <div className="w-12 h-1 bg-yellow-400 rounded-full mt-4"></div>
                </motion.div>
              )}
            </InView>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
