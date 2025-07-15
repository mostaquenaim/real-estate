"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/components/animations";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import BannerSection from "./BannerSection";

export default function ContactComponent() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="bg-gradient-to-b from-gray-50 to-white"
    >
      {/* banner section  */}
      <BannerSection
        image="/backgrounds/real-estate-contact.jpg"
        title="Let's Build Something Exceptional Together"
        subtitle="Reach out to Banglar Choya Model City Ltd. — our experts are here to guide you through every step of your premium real estate journey."
      />

      <div className="container mx-auto px-4 max-w-7xl py-20">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="inline-block text-center w-full"
        >
          <span className="text-xs uppercase tracking-widest text-green-600 font-semibold bg-green-100 px-3 rounded-full">
            Get In Touch
          </span>
        </motion.div>

        <SectionTitle
          title="Your Vision, Our Expertise"
          subtitle="Whether you're looking to invest or find your dream property, our team is ready to guide you every step of the way."
          // subtitle='Explore our premium residential projects in Dhaka&apos;s most promising locations'
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 1)}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-yellow-400 rounded-2xl opacity-20 blur-md"></div>
            <Card className="relative p-10 rounded-2xl shadow-xl border border-gray-100 bg-white z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-gray-600 mb-8">
                Complete the form below and our consultant will contact you
                within 24 hours
              </p>
              <ContactForm />
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={fadeIn("left", "spring", 0.6, 1)}
            className="space-y-8"
          >
            {/* Office Information */}
            <Card className="p-10 rounded-2xl shadow-lg border border-gray-200 bg-white">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Our Corporate Office
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-gray-100 rounded-lg text-green-600 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">
                      Address
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      <a
                        href="https://maps.app.goo.gl/aWFSKQykjrCaS6t88"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-600 transition-colors"
                      >
                        1st floor, house-25, Road-47, Gulshan-2, Dhaka-1212
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-gray-100 rounded-lg text-green-600 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">
                      Contact
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      <a
                        href="tel:01337938322"
                        className="hover:text-green-600 transition-colors"
                      >
                        01337-938322
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-gray-100 rounded-lg text-green-600 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">
                      Email
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      <a
                        href="mailto:banglarchoyamodelcity@gmail.com"
                        className="hover:text-green-600 transition-colors"
                      >
                        banglarchoyamodelcity@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-gray-100 rounded-lg text-green-600 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">
                      Business Hours
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      Sunday - Thursday: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Project Locations */}
            <Card className="p-10 rounded-2xl shadow-lg border border-gray-200 bg-white">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Our Project Locations
                </h2>
              </div>

              <div className="space-y-6">
                <motion.div whileHover={{ x: 5 }} className="group">
                  <Card className="p-6 rounded-xl shadow-sm border border-gray-200 hover:border-green-400 transition-all cursor-default group-hover:shadow-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-gray-800 text-xl mb-1 group-hover:text-green-600 transition-colors">
                          Nawabganj Project
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Nawabganj, koliail-Dhaka-01
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                    </div>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="group">
                  <Card className="p-6 rounded-xl shadow-sm border border-gray-200 hover:border-yellow-400 transition-all cursor-default group-hover:shadow-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-gray-800 text-xl mb-1 group-hover:text-yellow-600 transition-colors">
                          Borakoir Project
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Borakoir, Dhamrai-Dhaka-20
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 transition-colors" />
                    </div>
                  </Card>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div variants={fadeIn("up", "spring", 0.8, 1)} className="mt-20">
          <Card className="rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.793759917115!2d90.4061113154316!3d23.7508268845871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sGulshan%202%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-2xl"
            ></iframe>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
