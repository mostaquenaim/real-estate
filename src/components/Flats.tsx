import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./animations";
import { Card } from "./ui/card";

const Flats = () => {
  const features = [
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "২৪ ঘণ্টা নিরাপত্তা ব্যবস্থা",
      description: "আপনার এবং আপনার পরিবারের জন্য নিরাপত্তা নিশ্চিত করে"
    },
    {
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      title: "সুইমিং পুল ও জিম",
      description: "জীবনযাত্রাকে আরও সমৃদ্ধ এবং সক্রিয় করে তোলে"
    },
    {
      icon: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5",
      title: "পার্ক ও খেলার স্থান",
      description: "প্রকৃতির মাঝে বিনোদন ও বিশ্রামের ব্যবস্থা"
    },
    {
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      title: "আধুনিক নকশা এবং প্রশস্ততা",
      description: "পরিবার ও ব্যক্তিগত জীবনকে আরামদায়ক ও সুন্দর করে তোলে"
    },
    {
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      title: "হল ও সামাজিক সুবিধা",
      description: "শান্তিপূর্ণ ও আধুনিক জীবনযাপনের জন্য সব ধরনের সুযোগ-সুবিধাদি"
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "সম্পদের মূল্য বৃদ্ধি",
      description: "সময়ের সাথে ফ্লাটের মূল্য বৃদ্ধি বহন করে"
    }
  ];

  const projects = [
    {
      name: "নবাবগঞ্জ প্রকল্প",
      location: "ঢাকা-১১",
      size: "১৮১ বিঘা",
      status: "Under Construction",
      description: "১৮১ বিঘা জমির উপর গ্রাউন্ড উঠে এক বিশেষ প্রকল্প-যেখানে গৌরবের জন্য আধুনিক জীবনের আরাম মিলেমিশে একাকার।",
      details: "আজকের ব্যস্ত শহরে জীবন যেখানে একমুঠো খোলা জায়গায় ফ্লাটে খুঁজে পাওয়া কঠিন, সেখানে ১৮১ বিঘা এই প্রকল্প শুধু বসবাসের জন্য নয়, এটি একটি লাভজনক বিনিয়োগের ও দারুণ কমার্স তৈরি করার।",
      investment: "সময়ের সাথে ফ্লাটের মূল্য বৃদ্ধি বহন করে, যা আপনার জন্য সীমিত সম্পদকে নিশ্চয়তা দিয়ে যায়।",
      features: ["লাভজনক বিনিয়োগ", "আধুনিক জীবনের আরাম", "মূল্য বৃদ্ধির নিশ্চয়তা", "দারুণ কমার্স সুবিধা"],
      image: "/gallery/Apartment Building.avif",
      color: "blue"
    },
    {
      name: "ধামরাই প্রকল্প",
      location: "ঢাকা-২০",
      size: "৪১০ বিঘা",
      status: "Infrastructure Complete",
      description: "৪১০ বিঘা এই প্রকল্প পরিকল্পিতভাবে সাজানো হয়েছে প্রশস্ত রাস্তা, নির্দিষ্টানুসারে প্লটসমূহ বিন্যাস, বিক্রয় প্রদর্শনী ব্যবস্থা, উন্মুক্ত স্থান এবং আধুনিক ইনফ্রাস্ট্রাকচার দিয়ে।",
      details: "পরিবার নিয়ে নিশ্চিত, শান্তিপূর্ণ ও আধুনিক জীবনযাপন করার জন্য এখান থেকে সব ধরনের সুযোগ-সুবিধাদি।",
      investment: "ঢাকা শহরের ক্রমবর্ধমান চাপের কারণে প্রকৃতি ফ্লাট মূল্য প্রতিনিয়ত বৃদ্ধি পাচ্ছে, ফলে আমাদের একটি সঠিক বিনিয়োগ-সিদ্ধান্ত আপনাকে দেবে আগামী সীমিত ভবিষ্যৎ ও আর্থিক সমৃদ্ধি।",
      features: ["প্রশস্ত রাস্তা", "পরিকল্পিত বিন্যাস", "আধুনিক ইনফ্রাস্ট্রাকচার", "শান্তিপূর্ণ পরিবেশ"],
      image: "/gallery/flat-2.jpg",
      color: "green"
    }
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeIn("up", "tween", 0.2, 1)}
      className="py-20 px-4 container mx-auto max-w-7xl"
    >
      <div className="text-center mb-16">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="inline-block text-xs uppercase tracking-widest text-blue-600 font-semibold bg-blue-100 py-2 px-6 rounded-full mb-4 shadow-sm"
        >
          প্রিমিয়াম ফ্লাট সুবিধাদি
        </motion.span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          ফ্লাটের বৈশিষ্ট্য ও নাগরিক সুবিধাদি
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
          বাংলায় ছোঁয়া মডেল সিটি লিমিটেডের ফ্লাটগুলো হলো অত্যাধুনিক নাগরিক সুবিধাদি সম্বলিত। 
          প্রকৃতি ফ্লাট আধুনিক নকশা এবং প্রশস্ততা সমন্বিত, যা পরিবার ও ব্যক্তিগত জীবনকে আরামদায়ক ও সুন্দর করে তোলে।
        </p>
      </div>

      {/* Features Grid */}
      <div className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn("up", "spring", 0.1 * (index + 1), 0.8)}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-5">
                  <svg
                    className="w-7 h-7 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Showcase */}
      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn("up", "spring", 0.3, 1)}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Card className={`relative p-10 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden ${
              index % 2 === 0 ? 'bg-gradient-to-br from-blue-50 via-white to-indigo-50' : 'bg-gradient-to-br from-green-50 via-white to-emerald-50'
            }`}>
              {/* Decorative Elements */}
              <div className={`absolute top-0 right-0 w-96 h-96 ${
                project.color === 'blue' ? 'bg-blue-200' : 'bg-green-200'
              } rounded-full filter blur-3xl opacity-20`}></div>
              <div className={`absolute bottom-0 left-0 w-80 h-80 ${
                project.color === 'blue' ? 'bg-indigo-200' : 'bg-emerald-200'
              } rounded-full filter blur-3xl opacity-15`}></div>

              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  {/* Image Section */}
                  <div className={`relative ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <div className="relative group">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="rounded-2xl shadow-xl object-cover w-full h-96 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 scale-105 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className={`absolute top-6 left-6 ${
                      project.color === 'blue' ? 'bg-blue-600' : 'bg-green-600'
                    } text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                      {project.status}
                    </div>
                    <div className={`absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl border-2 shadow-lg ${
                      project.color === 'blue' ? 'border-blue-200' : 'border-green-200'
                    }`}>
                      <p className="text-lg font-bold text-gray-800">{project.size}</p>
                      <p className="text-xs text-gray-600">জমির পরিমাণ</p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`space-y-6 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        {project.name}
                      </h3>
                      <p className="text-gray-600 font-medium mb-5 flex items-center text-lg">
                        <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        {project.location}
                      </p>
                      <p className="text-gray-700 leading-relaxed text-lg mb-4">
                        {project.description}
                      </p>
                      <p className="text-gray-700 leading-relaxed text-base">
                        {project.details}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-4">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className={`w-7 h-7 ${
                            project.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                          } rounded-full flex items-center justify-center mr-3 flex-shrink-0`}>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Investment Highlight */}
                    <div className={`p-6 rounded-xl border-l-4 ${
                      project.color === 'blue' ? 'border-blue-500 bg-blue-50' : 'border-green-500 bg-green-50'
                    }`}>
                      <p className="text-sm font-semibold text-gray-800 mb-2">বিনিয়োগের সুযোগ</p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {project.investment}
                      </p>
                    </div>

                    {/* CTA Button */}
                    {/* <button className={`w-full py-4 px-8 rounded-xl font-bold text-white transition-all duration-300 shadow-lg hover:shadow-xl ${
                      project.color === 'blue' 
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800' 
                        : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800'
                    } flex items-center justify-center gap-3`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      {project.name} দেখুন
                    </button> */}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Final CTA */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn("up", "tween", 0.4, 1)}
        className="text-center mt-20"
      >
        <Card className="relative p-12 rounded-3xl bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-5">
              এটাই সময় সঠিক সিদ্ধান্ত নেওয়ার
            </h3>
            <p className="text-purple-100 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              কারণ বন্ধু, ফ্লাট সীমিত, আজ সুযোগ একবারই আসে। আপনার ভবিষ্যতের জন্য সঠিক বিনিয়োগের সিদ্ধান্ত নিন এখনই।
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                ফ্রি কনসাল্টেশন
              </button>
              {/* <button className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                ব্রোশার ডাউনলোড
              </button> */}
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.section>
  );
};

export default Flats;