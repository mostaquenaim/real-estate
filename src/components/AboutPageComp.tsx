'use client'

import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/components/animations'
import { Card } from '@/components/ui/card'

export default function AboutComponent() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="py-16 bg-green-50"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-green-900 mb-4 tracking-tight">
            About <span className="text-yellow-400">Banglar Choya</span>
          </h1>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-green-600 to-yellow-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <motion.div variants={fadeIn('right', 'spring', 0.2, 1)}>
            <Card className="p-8 shadow-lg rounded-2xl bg-white border border-green-100">
              <h2 className="text-2xl font-semibold text-green-800 mb-5">
                Our Story
              </h2>
              <p className="text-green-700 leading-relaxed mb-5">
                Established on 20th October 2023, Banglar Choya Model City Ltd.
                was founded with a vision to create premium residential
                communities in Dhaka's most promising locations.
              </p>
              <p className="text-green-700 leading-relaxed mb-5">
                Our name "Banglar Choya" reflects our commitment to selecting the
                cream (choya) of properties in Bangladesh (Banglar).
              </p>
              <p className="text-green-700 leading-relaxed">
                We specialize in land and plot sales, offering carefully curated
                properties with excellent growth potential.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn('left', 'spring', 0.4, 1)}>
            <Card className="p-8 shadow-lg rounded-2xl bg-white border border-green-100">
              <h2 className="text-2xl font-semibold text-yellow-500 mb-5">
                Our Mission
              </h2>
              <p className="text-green-700 leading-relaxed mb-6">
                To provide our clients with the best real estate investment
                opportunities through:
              </p>
              <ul className="list-disc list-inside space-y-3 text-green-700">
                {[
                  'Transparent and ethical business practices',
                  'Prime location selection',
                  'Flexible plot sizing options (3-10 katha)',
                  'Customizable plot configurations',
                  'Comprehensive after-sales support',
                ].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>

        <motion.div variants={fadeIn('up', 'spring', 0.6, 1)} className="mt-16">
          <Card className="p-10 bg-gradient-to-r from-green-100 to-yellow-100 rounded-3xl border border-green-200 shadow-inner">
            <h2 className="text-2xl font-semibold text-green-900 mb-8 text-center">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-green-800">
              {[
                {
                  title: 'Prime Locations',
                  description:
                    'Our projects are strategically located in rapidly developing areas of Dhaka.',
                },
                {
                  title: 'Legal Assurance',
                  description:
                    '100% legal documentation and clear titles for all properties.',
                },
                {
                  title: 'Custom Options',
                  description:
                    'Flexible plot sizes and customization options available.',
                },
              ].map(({ title, description }, i) => (
                <Card
                  key={i}
                  className="p-6 bg-white rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-shadow cursor-default"
                >
                  <h3 className="text-lg font-semibold text-green-700 mb-2">
                    {title}
                  </h3>
                  <p className="text-green-600 text-sm leading-relaxed">{description}</p>
                </Card>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}
