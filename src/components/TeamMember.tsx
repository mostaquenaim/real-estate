'use client'
import { Card, CardHeader, CardContent } from './ui/card'
import { motion } from 'framer-motion'
import { fadeIn } from './animations'

interface TeamMemberProps {
  name: string
  role: string
  description: string
  image: string
  contact?: string
  email?: string
  index: number
  highlight: boolean
  className?: string
}

export function TeamMember({
  name,
  role,
  description,
  image,
  contact,
  email,
  index,
  highlight = false,
  className = ''
}: TeamMemberProps) {

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.12, 0.75)}
      whileHover={{ y: -8, boxShadow: highlight ? '0 12px 20px rgba(234,179,8,0.4)' : '0 12px 20px rgba(34,197,94,0.3)' }}
      className={`h-full ${className}`}
    >
      <Card
        className={`h-full w-full max-w-xs md:max-w-sm lg:max-w-xs rounded-2xl transition-shadow duration-300 shadow-md hover:shadow-lg border 
    ${highlight ? 'border-yellow-400' : 'border-green-100'}`}
      >
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div>
              <h3 className={`text-lg font-semibold ${highlight ? 'text-yellow-800' : 'text-green-900'}`}>{name}</h3>
              <p className={`${highlight ? 'text-yellow-700' : 'text-yellow-600'} font-medium`}>{role}</p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-4 text-sm sm:text-base">
          <p className="text-green-800 mb-5 leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
