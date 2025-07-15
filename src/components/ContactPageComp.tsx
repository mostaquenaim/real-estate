"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/components/animations";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";
import SectionTitle from "./SectionTitle";
import BannerSection from "./BannerSection";

export default function ContactComponent() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="bg-green-50"
    >

      <div className="container mx-auto px-6 max-w-7xl md:py-20">
        <SectionTitle
          title="Contact Us"
          subtitle="Reach out to us for inquiries, site visits, or any assistance."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div variants={fadeIn("right", "spring", 0.2, 1)}>
            <ContactForm />
          </motion.div>

          <motion.div variants={fadeIn("left", "spring", 0.4, 1)}>
            <Card className="p-10 rounded-3xl shadow-lg border border-green-200 bg-white flex flex-col justify-between h-full">
              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-green-900 mb-6 border-b border-green-200 pb-4">
                  Office Information
                </h2>

                <div className="space-y-10 text-green-700">
                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-green-100 rounded-full text-green-700">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-900 text-lg mb-1">
                        Head Office
                      </h3>
                      <p className="leading-relaxed">
                        <a
                          href="https://maps.app.goo.gl/aWFSKQykjrCaS6t88"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-700 hover:underline"
                        >
                          1st floor, house-25, Road-47, Gulshan-2, Dhaka-1212
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-green-100 rounded-full text-green-700">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-900 text-lg mb-1">
                        Contact Numbers
                      </h3>
                      <p>
                        <a href="tel:01337938322" className="leading-relaxed">
                          01337-938322
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-green-100 rounded-full text-green-700">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-900 text-lg mb-1">
                        Email
                      </h3>
                      <p className="leading-relaxed">
                        <a href="mailto:banglarchoyamodelcity@gmail.com">
                          banglarchoyamodelcity@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-green-900 mb-6 border-b border-green-200 pb-3">
                  Project Locations
                </h3>
                <div className="space-y-8 text-green-700">
                  <Card className="p-6 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-shadow cursor-default">
                    <h4 className="font-semibold text-green-700 text-xl mb-1">
                      Nawabganj Project
                    </h4>
                    <p className="text-green-600 text-sm leading-relaxed">
                      Nawabganj, koliail-Dhaka-01
                    </p>
                  </Card>
                  <Card className="p-6 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-shadow cursor-default">
                    <h4 className="font-semibold text-yellow-500 text-xl mb-1">
                      Borakoir Project
                    </h4>
                    <p className="text-green-600 text-sm leading-relaxed">
                      Borakoir, Dhamrai-Dhaka-20
                    </p>
                  </Card>
                </div>
              </section>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
