"use client";
import { projects } from "@/lib/constants";
import PropertyCard from "@/components/PropertyCard";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/components/animations";
import { Card } from "@/components/ui/card";
import SectionTitle from "./SectionTitle";
import BannerSection from "./BannerSection";

export default function ProjectPageComp() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className=""
    >
      {/* banner section  */}
      <BannerSection
        image="/land-images/WhatsApp Image 2025-07-14 at 17.32.38_14bb2f61.jpg"
        title="Explore Our Exclusive Projects"
        subtitle="Discover premium land, plots, and apartments curated by Banglar Choya Model City Ltd. in prime locations across Bangladesh."
      />

      <div className="container mx-auto px-6 max-w-7xl py-10 md:py-20">
        <div className="mb-16 text-center">
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="inline-block mb-4"
          >
            <span className="text-xs uppercase tracking-widest text-green-600 font-semibold bg-green-100 px-3 py-1 rounded-full">
              Exclusive Developments
            </span>
          </motion.div>

          <SectionTitle
            title="Signature Properties"
            subtitle="Discover our curated collection of premium residential projects in Dhaka's most prestigious locations"
            highlightColor="green"
            align="center"
            isPage={true}
          />
        </div>
        {/* Projects Grid */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {projects.map((project, index) => (
            <PropertyCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        {/* Premium Plot Sizes Section */}
        <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="mt-24">
          <Card className="p-12 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-2xl overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full filter blur-[90px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-500 rounded-full filter blur-[100px] opacity-15"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-10 text-center">
                Custom Land Parcels Available
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  "3 Decimal",
                  "4 Decimal",
                  "5 Decimal",
                  "6 Decimal",
                  "7 Decimal",
                  "8 Decimal",
                  "9 Decimal",
                  "10 Decimal",
                  "3 Katha",
                  "5 Katha",
                  "10 Katha",
                  "1 Bigha",
                ].map((size) => (
                  <motion.div
                    key={size}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)",
                    }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-green-400 transition-all cursor-default py-4 flex items-center justify-center text-white font-medium text-sm tracking-wide"
                  >
                    {size}
                  </motion.div>
                ))}
              </div>

              <p className="mt-10 text-center text-gray-400 italic text-sm">
                * Custom plot sizes and configurations available upon request.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Premium CTA */}
        <motion.div
          variants={fadeIn("up", "tween", 0.7, 1)}
          className="mt-20 text-center"
        >
          <button className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <a href="tel: 01337938322">
              <span className="relative flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                Schedule Private Consultation
              </span>
            </a>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
