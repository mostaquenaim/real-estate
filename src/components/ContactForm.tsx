'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { motion } from 'framer-motion'
import { fadeIn } from './animations'
import { Mail, Phone, User } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().min(11, {
    message: 'Phone number must be at least 11 digits.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Add your form submission logic here
  }

  return (
    <motion.div
      variants={fadeIn('up', 'tween', 0.2, 1)}
      className="w-full max-w-2xl"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-6 md:p-8 bg-white border border-gray-200 rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <User className="h-4 w-4 text-green-600" /> Full Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" className="bg-gray-50 focus:ring-2 focus:ring-green-400" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Mail className="h-4 w-4 text-green-600" /> Email
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com" className="bg-gray-50 focus:ring-2 focus:ring-green-400" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Phone className="h-4 w-4 text-green-600" /> Phone Number
                </FormLabel>
                <FormControl>
                  <Input placeholder="01XXXXXXXXX" className="bg-gray-50 focus:ring-2 focus:ring-green-400" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-700">Your Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your requirements..."
                    className="min-h-[140px] bg-gray-50 focus:ring-2 focus:ring-green-400"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              className="cursor-pointer w-full py-4 text-lg font-semibold bg-gradient-to-r from-zinc-800 to-green-500 hover:from-zinc-900 hover:to-green-600 text-white rounded-xl shadow-lg"
            >
              Submit Inquiry
            </Button>
          </motion.div>
        </form>
      </Form>
    </motion.div>
  )
}
