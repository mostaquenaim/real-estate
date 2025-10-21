"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/components/animations";
import { Card } from "@/components/ui/card";
import SectionTitle from "./SectionTitle";
import BannerSection from "./BannerSection";
import { MdVoiceChat } from "react-icons/md";
import Brochure from "./Brochure";

export default function AboutComponent() {
  const leadershipMessages = [
    {
      role: "ব্যবস্থাপনা পরিচালক",
      name: "মোঃ মাকসুদুল মোমিন মাসুদ",
      message: `আসসালামু আলাইকুম,
বাংলার ছোঁয়া মডেল সিটি লিমিটেড একটি ডেভেলপিং প্রতিষ্ঠান, যার লক্ষ্য শুধু ভবন এস্থেট ব্যবসা নয়, বরং মানুষের বাড়ি ও সম্পত্তির কোনো স্বপ্নকে সহজ, নিরাপদ ও হালাল উপায়ে বাস্তব রূপ দেওয়া।

বর্তমান সময়ে জমি ও ফ্ল্যাট কেনা অনেকের কাছেই জটিল ও ভয়ের বিষয়। আমরা সেই ভয় ও অনিশ্চয়তার অবসান ঘটিয়ে মানুষের দোরগোড়ায় আস্থার সাথে স্বচ্ছ কার্যপ্রণালী ও সঠিক মালিকানা নিশ্চিত করে জমি ও ফ্ল্যাট পৌঁছে দিতে প্রতিশ্রুতিবদ্ধ।

আমাদের প্রতিটি প্রজেক্টই পরিকল্পিত, রেজিস্ট্রেশন নিশ্চিত এবং শরিয়াহ অনুসারী পরিচালিত। আমরা চাই, একজন সাধারণ মানুষও যেন নির্ভয়ে তার স্বপ্নের ঠিকানার মালিক হতে পারেন।`,
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      icon: "M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m2-1l-2-1m2 1v2.5",
    },
    {
      role: "প্রধান নির্বাহী কর্মকর্তা (সিইও)",
      name: "এস মাহমুদ",
      message: `বাংলার ছোঁয়া মডেল সিটি লিমিটেড এর সিইও হিসেবে আমি গভীর কৃতজ্ঞতা ও দায়িত্ববোধ নিয়ে এই কথাগুলো বলছি। এই প্রতিষ্ঠান গড়ে তোলার পেছনে আমাদের একটি সুদূরপ্রসারী লক্ষ্য ছিল—মানুষের জন্য জমি ও আবাসন সুবিধাকে সহজ, নিরাপদ এবং হালাল উপায়ে বাস্তবায়ন করা।

আমাদের প্রতিটি প্রকল্প বিনিয়োগকারীর অর্থ সুরক্ষিত রাখার সাথে সাথে রেজিস্ট্রি, পাওয়ার অফ অ্যাটর্নি ও শরিয়াহসম্মত প্রক্রিয়া অনুসরণ করা হয়। আমরা বিশ্বাস করি, জমি বা ফ্ল্যাট কেনা একটি আর্থিক বিনিয়োগ নয়, এটি একটি আবেগ, একটি স্বপ্ন—নিজের ঠিকানা, নিজের পরিশ্রমের আশ্রয়।`,
      color: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      role: "পরিচালক (বিক্রয় ও বিপণন)",
      name: "এম এম শরিফুল",
      message: `প্রিয় গ্রাহকবৃন্দ,

বাংলার ছোঁয়া মডেল সিটি লিমিটেড-এর লক্ষ্য হলো আমাদের আত্মবিশ্বাসে ভরপুর আপনাদের নিজের "বাড়ি", "জমি" স্বপ্ন পূরণে নির্ভরযোগ্য সহযাত্রী হওয়া। আমরা সর্বদা চেষ্টা করি যেন গ্রাহকরা নিরাপদ ও শরিয়াহসম্মত উপায়ে তাদের স্বপ্নের ঠিকানার মালিক হতে পারেন।

আমাদের প্রতিটি প্রকল্প আমরা পরিকল্পিতভাবে দিই—সঠিক লোকেশন ও নির্ভরযোগ্য বিনিয়োগের মাধ্যমে যাতে, স্বচ্ছতা ও সঠিকতার দিক থেকে গ্রাহকদের সম্পূর্ণ আস্থা বজায় থাকে।`,
      color: "from-amber-50 to-amber-100",
      borderColor: "border-amber-200",
      icon: "M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      role: "পরিচালক",
      name: "আফিক চৌধুরী",
      message: `বাংলার ছোঁয়া মডেল সিটি লিমিটেড এমন একটি স্বপ্ন বাস্তবায়নের প্রতিষ্ঠান, যা মানুষের বাসস্থান নির্মাণের পাশাপাশি সমাজের শান্তি, সচ্ছলতা ও বিশ্বাস স্থাপন করতে দৃঢ় প্রতিজ্ঞাবদ্ধ। আমাদের লক্ষ্য—"জমি ও ফ্ল্যাট কেনা সহজ, নিরাপদ, হালাল ও ইসলামী বিধান অনুযায়ী বাস্তবায়নের নিশ্চয়তা প্রদান।"

আমরা বিশ্বাস করি, একজন গ্রাহকের পূর্ণ আস্থা অর্জনই আমাদের বড় লক্ষ্য। তাই প্রতিটি প্রকল্পে স্বচ্ছতা, নির্ভরযোগ্যতা এবং গ্রাহক সন্তুষ্টি নিশ্চিত করতে আমরা নিরলসভাবে কাজ করে যাচ্ছি।`,
      color: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
  ];

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show">
      {/* banner section  */}
      <BannerSection
        image="/rsz_cover_photo.png"
        title="Crafting the Future of Premium Living in Bangladesh"
        subtitle="At Banglar Choya Model City Ltd., we redefine urban excellence through visionary planning, legal assurance, and a passion for community-focused development."
      />

      <div className="container mx-auto max-w-7xl md:py-20 text-center">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="inline-block"
        >
          <span className="text-xs uppercase tracking-widest text-green-600 font-semibold bg-green-100 px-3 rounded-full">
            Our Heritage
          </span>
        </motion.div>

        <SectionTitle
          title="The Banglar Choya Legacy"
          subtitle="Redefining luxury living through exceptional craftsmanship and visionary urban development"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Our Story - Premium Card */}
          <motion.div variants={fadeIn("right", "spring", 0.2, 1)}>
            <Card className="relative p-4 md:p-10 rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden h-full">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full filter blur-[80px] opacity-30"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-100 rounded-full filter blur-[90px] opacity-20"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Our Genesis
                  </h2>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 border-l-4 border-green-500 pl-4">
                  Founded on{" "}
                  <span className="font-semibold">October 20, 2023</span>,
                  Banglar Choya Model City Ltd. emerged from a vision to create
                  <span className="font-semibold text-green-600">
                    {" "}
                    exclusive residential enclaves
                  </span>{" "}
                  in Dhaka's most coveted locations.
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  The name <span className="italic">"Banglar Choya"</span>{" "}
                  embodies our philosophy of selecting only the
                  <span className="font-semibold"> finest properties</span> -
                  the absolute cream (choya) of Bangladesh's (Banglar) real
                  estate landscape.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-700 font-medium">
                    We specialize in{" "}
                    <span className="text-green-600">
                      premium land development
                    </span>
                    , offering discerning clients
                    <span className="text-yellow-600">
                      {" "}
                      meticulously curated properties
                    </span>{" "}
                    with exceptional appreciation potential.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Our Mission - Premium Card */}
          <motion.div variants={fadeIn("left", "spring", 0.4, 1)}>
            <Card className="relative p-4 md:p-10 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl overflow-hidden h-full">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full filter blur-[90px] opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-500 rounded-full filter blur-[100px] opacity-15"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 backdrop-blur-sm">
                    <svg
                      className="w-6 h-6 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Our Covenant
                  </h2>
                </div>

                <p className="text-gray-300 mb-6">
                  To deliver{" "}
                  <span className="font-semibold text-white">
                    unparalleled real estate investment opportunities
                  </span>{" "}
                  through:
                </p>

                <ul className="space-y-4">
                  {[
                    {
                      text: "Impeccable ethical standards and complete transparency",
                      icon: "M12 15l8-8m0 0h-8m8 0v8m-6-10a2 2 0 11-4 0 2 2 0 014 0z",
                    },
                    {
                      text: "Strategic acquisition of prime locations with high growth potential",
                      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
                    },
                    {
                      text: "Flexible plot configurations from 3–10 decimal (including 3, 5, 10 katha options)",
                      icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
                    },
                    {
                      text: "Tailored solutions for bespoke requirements",
                      icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
                    },
                    {
                      text: "Comprehensive concierge-level after-sales service",
                      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                    },
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-start"
                    >
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-yellow-400 mt-1 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={item.icon}
                        />
                      </svg>
                      <span className="text-gray-300">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Leadership Messages Section */}
        <motion.div variants={fadeIn("up", "tween", 0.5, 1)} className="mb-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block mb-6"
          >
            <span className="text-xs uppercase tracking-widest text-green-600 font-semibold bg-green-100 py-2 px-4 rounded-full">
              Leadership Voices
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Messages from Our Leadership
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadershipMessages.map((leader, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn("up", "spring", 0.1 * (idx + 1), 1)}
                whileHover={{ y: -4 }}
              >
                <Card
                  className={`relative p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-2 ${leader.borderColor} h-full bg-gradient-to-br ${leader.color} overflow-hidden`}
                >
                  {/* Icon Background */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                    <MdVoiceChat className="w-full h-full text-gray-900" />
                  </div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-gray-900">
                        {leader.role}
                      </h3>
                      {leader.name && (
                        <p className="text-sm font-semibold text-gray-700">
                          {leader.name}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <p className="text-gray-800 leading-relaxed text-sm whitespace-pre-line">
                      {leader.message}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* brochure  */}
        <section className="mb-20">
          <Brochure />
        </section>

        {/* Why Choose Us - Premium Section */}
        <motion.div variants={fadeIn("up", "spring", 0.6, 1)}>
          <Card className="relative p-4 md:p-12 rounded-3xl bg-gradient-to-br from-gray-50 to-white shadow-2xl overflow-hidden border border-gray-200">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-100 rounded-full filter blur-[100px] opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-100 rounded-full filter blur-[110px] opacity-20"></div>

            <div className="relative z-10 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block mb-6"
              >
                <span className="text-xs uppercase tracking-widest text-green-600 font-semibold bg-green-100 py-2 px-4 rounded-full shadow-sm">
                  The Banglar Choya Difference
                </span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                Why Partner With Us
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Prime Locations",
                    description:
                      "Our projects occupy strategically selected positions in Dhaka's most rapidly appreciating districts, ensuring long-term value growth.",
                    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
                  },
                  {
                    title: "Legal Assurance",
                    description:
                      "Every property comes with complete documentation, verified titles, and legal guarantees for absolute peace of mind.",
                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  },
                  {
                    title: "Tailored Solutions",
                    description:
                      "From custom plot configurations to personalized payment plans, we accommodate your unique requirements with white-glove service.",
                    icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
                  },
                ].map(({ title, description, icon }, i) => (
                  <motion.div key={i} whileHover={{ y: -8 }}>
                    <Card className="h-full p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                      <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                        <svg
                          className="w-8 h-8 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={icon}
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Premium CTA */}
        <motion.div
          variants={fadeIn("up", "tween", 0.8, 1)}
          className="mt-20 text-center"
        >
          <button className="relative inline-flex items-center justify-center px-4 py-4 overflow-hidden font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
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
