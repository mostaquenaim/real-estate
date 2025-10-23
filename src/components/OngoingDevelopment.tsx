import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./animations";
import { Card } from "./ui/card";

const OngoingDevelopment = () => {
  return (
    <motion.section
      variants={fadeIn("up", "tween", 0.6, 1)}
      className="mb-20 container mx-auto max-w-7xl"
    >
      <div className="text-center mb-16">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="inline-block text-xs uppercase tracking-widest text-green-600 font-semibold bg-green-100 py-2 px-4 rounded-full mb-4 shadow-sm"
        >
          আমাদের চলমান উন্নয়নশীল প্রকল্প
        </motion.span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ongoing Development Projects
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Transforming visions into reality with planned infrastructure and
          modern amenities
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Main Content - 3/4 Section */}
        <div className="lg:col-span-3 space-y-8">
          {/* Intro Card - Updated Content */}
          <motion.div
            variants={fadeIn("right", "spring", 0.2, 1)}
            className="relative p-6 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 shadow-lg"
          >
            <div className="absolute top-0 left-0 w-24 h-24 bg-green-200 rounded-full filter blur-[60px] opacity-30"></div>
            <p className="text-gray-700 text-lg leading-relaxed relative z-10">
              বাংলার ছোয়া মডেল সিটি লিমিটেডের জমি ও ফ্ল্যাটের চলমান প্রকল্পগুলো শুধু
              বিনিয়োগ নয়, এটি আপনার জীবনের **নতুন স্বপ্নের বীজ ও নিরাপদ আশ্রয়**।
              এখানে গড়ে উঠছে আধুনিকতা, নিরাপত্তা, আস্থা ও ভালোবাসা সমন্বয়ে এক
              অনন্য আবাসন, যা আপনার পরিবারকে দেবে আগামী দিনের জন্য স্থায়ী সুখের
              ও শান্তির ঠিকানা।
            </p>
          </motion.div>

          {/* Nawabganj Project - Updated Content */}
          <motion.div
            variants={fadeIn("up", "spring", 0.3, 1)}
            whileHover={{ y: -4 }}
          >
            <Card className="relative p-6 rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full filter blur-[80px] opacity-30"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <img
                    src="/gallery/nawabganj/nobabganj-signboard.jpg"
                    alt="Nawabganj Project"
                    className="rounded-xl shadow-md object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
                  />
                  {/* <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Under Development
                  </div> */}
                </div>
                <div className="space-y-4">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      নবাবগঞ্জ প্রকল্প
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    নবাবগঞ্জ আবাসন প্রকল্প আপনাকে দিচ্ছে **নিষ্কণ্টক জমি আর আধুনিক ফ্ল্যাটের মনোমুগ্ধকর মনোরম পরিবেশ**, নদীর ঘেরা প্রকৃতির ছোঁয়া, প্রশস্ত সড়ক, বিশুদ্ধ পানির সুবিধা, শিশুপার্ক, আধুনিক নিরাপত্তা ব্যবস্থা, টেকসই আধুনিক স্থাপত্য, কমিউনিটি সেন্টার সুবিধা, আর নাগরিক জীবনের সকল সুযোগ-সুবিধা নিয়ে গড়ে ওঠা এই পরিকল্পিত নগরী আপনার আগামীর প্রশান্তি। আজই ভবিষ্যৎ প্রজন্মের জন্য নিশ্চিত করুন এক নতুন দিগন্ত।
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      Prime Location
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      Modern Flats
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                      Child Park & Security
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Dhamrai Project - Updated Content */}
          <motion.div
            variants={fadeIn("up", "spring", 0.4, 1)}
            whileHover={{ y: -4 }}
          >
            <Card className="relative p-6 rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-amber-100 rounded-full filter blur-[80px] opacity-30"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 order-2 md:order-1">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-3">
                      <svg
                        className="w-6 h-6 text-amber-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      ধামরাই প্রকল্প
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    ধামরাই আবাসন প্রকল্প আপনাকে দিচ্ছে **পরিকল্পিত জমি**, যেখানে প্রতিটি পরিবার পাবেন স্বপ্নের নিরাপদ ঠিকানা। রাজধানীর সঙ্গে দ্রুত ও সহজ যোগাযোগ, টেকসই ও আধুনিক নির্মাণ, প্রশস্ত সড়ক ও সুপরিকল্পিত ড্রেনেজ, বিশুদ্ধ পানির নিশ্চয়তা এবং সিসি ক্যামেরা সমৃদ্ধ নিরাপত্তা ব্যবস্থা নিশ্চিত করে শান্তিপূর্ণ জীবন। এখানে রয়েছে সব বয়সী মানুষের জন্য বিনোদন ও খেলাধুলার সুবিধা।
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      Planned Plots
                    </span>
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">
                      Fast Connectivity
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      Security & Recreation
                    </span>
                  </div>
                </div>
                <div className="relative order-1 md:order-2">
                  <img
                    src="/gallery/dhamrai/dhamrai-photo.jpg"
                    alt="Dhamrai Project"
                    className="rounded-xl shadow-md object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
                  />
                  {/* <div className="absolute bottom-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Infrastructure Complete
                  </div> */}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Sidebar - 1/4 Section (No Content Change Requested) */}
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 1)}
          className="lg:col-span-1"
        >
          <Card className="relative p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl overflow-hidden h-full">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-500 rounded-full filter blur-[70px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-500 rounded-full filter blur-[80px] opacity-15"></div>

            <div className="relative z-10 text-center h-full flex flex-col">
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <svg
                    className="w-8 h-8 text-yellow-400"
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
                <h3 className="text-xl font-bold text-white mb-2">
                  Project Proposal
                </h3>
                <p className="text-gray-300 text-sm">
                  Detailed investment opportunities
                </p>
              </div>

              <div className="flex-1 mb-6">
                <img
                  src="/gallery/proposal-pic.jpg"
                  alt="Project Proposal"
                  className="rounded-xl shadow-lg object-cover w-full h-48 mx-auto transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="space-y-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <p className="text-white text-sm font-semibold">
                    Shariah Compliant
                  </p>
                  <p className="text-gray-300 text-xs">
                    All investments verified
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <p className="text-white text-sm font-semibold">
                    Legal Assurance
                  </p>
                  <p className="text-gray-300 text-xs">
                    Complete documentation
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OngoingDevelopment;