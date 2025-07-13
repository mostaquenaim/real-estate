'use client'
import { teamMembers } from '@/lib/constants'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/components/animations'
import { Tree, TreeNode } from 'react-organizational-chart'
import { TeamMember } from './TeamMember'

export default function TeamPageComp() {
  // Assuming teamMembers is structured with hierarchy information
  // For this example, let's assume the first member is the CEO and others report to them
  const ceo = teamMembers[0]
  const leadership = teamMembers.slice(1, 3)
  const managers = teamMembers.slice(3, 6)
  const staff = teamMembers.slice(6)

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

        {/* Organizational Chart */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 1)}
          className="mt-10 overflow-x-auto"
        >
          <div className="min-w-max lg:min-w-0 py-10">
            <Tree
              lineWidth={'2px'}
              lineColor={'#84cc16'}
              lineBorderRadius={'10px'}
              label={
                <div className="inline-block">
                  <TeamMember {...ceo} index={0} highlight={false} />
                </div>
              }
            >
              {/* Leadership Team */}
              <TreeNode label={
                <div className="inline-block w-full">
                  <div className="text-center mb-2 w-full text-sm font-semibold text-green-700">
                    Leadership Team
                  </div>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {leadership.map((member, index) => (
                      <TeamMember key={index} {...member} index={index + 1} highlight={member.highlight || false} />
                    ))}
                  </div>
                </div>
              }>
                {/* Managers */}
                <TreeNode label={
                  <div className="inline-block w-full">
                    <div className="text-center mb-2 w-full text-sm font-semibold text-green-700">
                      Department Managers
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center">
                      {managers.map((member, index) => (
                        <TeamMember key={index} {...member} index={index + 4} highlight={member.highlight || false} />
                      ))}
                    </div>
                  </div>
                }>
                  {/* Staff */}
                  <TreeNode label={
                    <div className="inline-block w-full">
                      <div className="text-center mb-2 w-full text-sm font-semibold text-green-700">
                        Team Members
                      </div>
                      <div className="flex flex-wrap gap-4 justify-center">
                        {staff.map((member, index) => (
                          <TeamMember key={index} {...member} index={index + 7} highlight={member.highlight || false}/>
                        ))}
                      </div>
                    </div>
                  } />
                </TreeNode>
              </TreeNode>
            </Tree>
          </div>

        </motion.div>

        {/* Departments Section (unchanged) */}
        {/* <motion.div
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
        </motion.div> */}
      </div>
    </motion.div>
  )
}