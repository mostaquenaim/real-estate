import { Card, CardHeader, CardContent } from './ui/card'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { motion } from 'framer-motion'
import { fadeIn } from './animations'
import { Mail, Phone } from 'lucide-react'
import { Button } from './ui/button'

interface TeamMemberProps {
  name: string
  role: string
  description: string
  image: string
  contact?: string
  email?: string
  index: number
  highlight: boolean
}

export function TeamMember({
  name,
  role,
  description,
  image,
  contact,
  email,
  index,
  highlight = false
}: TeamMemberProps) {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.12, 0.75)}
      whileHover={{ y: -8, boxShadow: highlight ? '0 12px 20px rgba(234,179,8,0.4)' : '0 12px 20px rgba(34,197,94,0.3)' }}
      className="h-full"
    >
      <Card className={`h-full rounded-2xl transition-shadow duration-300 shadow-md hover:shadow-lg border ${highlight ? 'border-yellow-400' : 'border-green-100'}`}>
        {highlight && (
          <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 px-3 py-1 text-xs font-bold rounded-bl-lg rounded-tr-lg">
            LEADERSHIP
          </div>
        )}
        <CardHeader>
          <div className="flex items-center space-x-5">
            {/* <Avatar className={`h-16 w-16 ring-2 ${highlight ? 'ring-yellow-500' : 'ring-yellow-400'}`}>
              <AvatarImage src={image} alt={name} />
              <AvatarFallback className={`${highlight ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'} font-semibold`}>
                {name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar> */}
            <div>
              <h3 className={`text-lg font-semibold ${highlight ? 'text-yellow-800' : 'text-green-900'}`}>{name}</h3>
              <p className={`${highlight ? 'text-yellow-700' : 'text-yellow-600'} font-medium`}>{role}</p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-4">
          <p className="text-green-800 mb-5 leading-relaxed">{description}</p>

          {contact && (
            <div className="flex items-center gap-3 mb-3 text-green-700">
              <Phone className="h-5 w-5" />
              <a href={`tel:${contact}`} className="hover:text-yellow-500 transition-colors">
                {contact}
              </a>
            </div>
          )}

          {email && (
            <div className="flex items-center gap-3 text-green-700">
              <Mail className="h-5 w-5" />
              <a href={`mailto:${email}`} className="hover:text-yellow-500 transition-colors">
                {email}
              </a>
            </div>
          )}

          <Button
            variant="outline"
            className="mt-6 w-full border-yellow-400 text-yellow-600 hover:bg-yellow-100 transition"
          >
            Contact {name.split(' ')[0]}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
