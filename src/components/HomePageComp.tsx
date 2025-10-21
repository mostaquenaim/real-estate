"use client";

import { fadeIn, staggerContainer } from "@/components/animations";
import Link from "next/link";
import { motion } from "framer-motion";
import { StatsSection } from "./StatsSection";
import { Testimonials } from "./Testimonials";
import FeaturedProjects from "./FeaturedProjects";
import BannerSection from "./BannerSection";
import { useSearchParams } from "next/navigation";
import Brochure from "./Brochure";

export default function HomeComponent() {
  const searchParams = useSearchParams();
  const isInitial = searchParams.get("initial") === "true";
  console.log(isInitial, "isInitial");

  return (
    <motion.div
      variants={isInitial ? staggerContainer : undefined}
      initial={isInitial ? "hidden" : "show"}
      animate="show"
      className=""
    >
      {/* banner section */}
      <BannerSection
        image={"/rsz_11city-sunset-banglar-choya-cover.jpg"}
        isHome={true}
        title={
          "Your Gateway to Premium Land, Plots & Apartments Across Bangladesh — Especially in Dhaka"
        }
        subtitle={
          "Discover the most promising lands, plots, and apartments in Bangladesh, meticulously curated by Banglar Choya Model City Ltd. — your trusted partner in real estate excellence"
        }
        button1={"Explore Projects"}
        button1Link={"/projects"}
        button2={"Contact Us"}
        button2Link={"/contact"}
      />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* About Section */}
      <motion.section
        className="py-28 bg-gradient-to-br from-green-300 via-white to-green-300"
        initial={isInitial ? { opacity: 0, y: 60 } : false}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-24">
            <motion.div
              variants={
                isInitial ? fadeIn("right", "tween", 0.3, 1) : undefined
              }
              className="md:w-1/2 rounded-3xl overflow-hidden shadow-xl ring-4 ring-yellow-400 ring-opacity-70 transition-shadow duration-500 hover:shadow-2xl"
            >
              <img
                src="/about-banglar-choya.jpg"
                alt="About Banglar Choya"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            <motion.div
              variants={isInitial ? fadeIn("left", "tween", 0.3, 1) : undefined}
              className="md:w-1/2 flex flex-col justify-center"
            >
              <div className="flex items-center mb-8">
                <div className="w-1.5 h-16 bg-yellow-400 rounded mr-6 shadow-md"></div>
                <h2
                  className="text-4xl font-extrabold text-green-900 mb-0 tracking-wide leading-tight font-serif"
                  style={{ fontVariantCaps: "small-caps" }}
                >
                  About Banglar Choya Model City Ltd.
                </h2>
              </div>

              <p className="text-green-800 mb-8 leading-relaxed text-lg max-w-lg tracking-wide">
                Established on 20th October 2023, Banglar Choya Model City Ltd.
                is a premier real estate developer in Dhaka, specializing in
                land and plot sales with a legacy of trust and quality.
              </p>
              <p className="text-green-700 mb-12 leading-relaxed text-lg max-w-lg tracking-wide">
                We primarily offer plots ranging from 3 to 10 decimal. Selected
                options are also available in 3, 5, and 10 katha — all
                customizable as per your needs. Our projects are strategically
                located with excellent connectivity and promising future growth.
              </p>

              <Link href={"/about"}>
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer bg-gradient-to-r from-yellow-400 to-yellow-500 text-green-900 font-semibold px-12 py-4 rounded-lg shadow-inner shadow-yellow-300 transition-transform duration-300 hover:shadow-lg"
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Brochure></Brochure>

      {/* Testimonials */}
      <Testimonials />

      {/* Stats */}
      <StatsSection />

      {/* brochure */}
      {/* <Brochure></Brochure> */}
    </motion.div>
  );
}
