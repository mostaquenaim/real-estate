"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { motion } from "framer-motion";
import { fadeIn } from "./animations";
import { Mail, Phone, User } from "lucide-react";
import toast from "react-hot-toast";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(11, {
    message: "Phone number must be at least 11 digits.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xzzjyyon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
        }),
      });

      if (response.ok) {
        toast.success("Your message has been sent!");
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.2, 1)}
      className="w-full max-w-2xl"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 p-6 md:p-8 bg-white border border-gray-200 rounded-2xl shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <User className="h-4 w-4 text-green-600" /> Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      className="bg-gray-50 focus:ring-2 focus:ring-green-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Mail className="h-4 w-4 text-green-600" /> Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your@email.com"
                      className="bg-gray-50 focus:ring-2 focus:ring-green-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Phone className="h-4 w-4 text-green-600" /> Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="01XXXXXXXXX"
                    className="bg-gray-50 focus:ring-2 focus:ring-green-400"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-700">
                  Your Message
                </FormLabel>
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

          {/* Submit Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer w-full py-4 text-lg font-semibold bg-gradient-to-r from-zinc-800 to-green-500 hover:from-zinc-900 hover:to-green-600 text-white rounded-xl shadow-lg"
            >
              {isSubmitting ? "Sending..." : "Submit Inquiry"}
            </Button>
          </motion.div>
        </form>
      </Form>
    </motion.div>
  );
}
