'use client'
import { teamMembers } from '@/lib/constants'
import { TeamMember } from '@/components/TeamMember'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/components/animations'

export default function TeamPageComp() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="py-20 bg-green-50"
    >
      <div className="container mx-auto px-6 max-w-7xl md:py-20">
        {/* Heading */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-extrabold text-green-900 mb-4 tracking-tight">
            Our <span className="text-yellow-400">Team</span>
          </h1>
          <p className="text-green-800 text-lg leading-relaxed">
            Meet the dedicated professionals behind Banglar Choya Model City Ltd.
          </p>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-green-600 to-yellow-400 mx-auto mt-6"></div>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} index={index} highlight={false} {...member} />
          ))}
        </div>

        {/* Departments Section */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 1)}
          className="mt-20 bg-gradient-to-r from-green-100 to-yellow-100 p-10 rounded-3xl border border-green-300 shadow-inner"
        >
          <h2 className="text-2xl font-semibold mb-8 text-green-900 text-center">
            Our Departments
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              'Chairman',
              'Vice Chairman',
              'Managing Director',
              'CEO',
              'Directors',
              'General Manager',
              'Engineers',
              'Accountant',
              'HR & Admin',
              'Operations'
            ].map((dept) => (
              <div
                key={dept}
                className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow cursor-default text-green-700 font-semibold"
              >
                {dept}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
