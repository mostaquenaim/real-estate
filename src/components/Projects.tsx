import React from "react";
import { Card } from "./ui/card";
import { fadeIn } from "./animations";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      name: "নবাবগঞ্জ প্রকল্প",
      location: "ঢাকা-১ আসন",
      size: "৬৭৫ বিঘা", // Updated size
      //   status: "Under Construction",
      description:
        "৬৭৫ বিঘা জমির উপর গড়ে উঠছে এক স্বপ্নের প্রকল্প-যেখানে প্রকৃতির সৌন্দর্য আর আধুনিক জীবনের আরাম মিলেমিশে একাকার।", // Updated description
      details:
        "আজকের ব্যস্ত শহুরে জীবনে যেখানে একটু খোলা জায়গায় ফ্ল্যাট খুঁজে পাওয়া কঠিন, সেখানে ৬৭৫ বিঘার এই প্রকল্প শুধু বসবাসের জন্য নয়, এটি একটি লাভজনক বিনিয়োগেরও দারুণ সম্ভাবনা তৈরি করবে।", // Updated details
      investment:
        "সময়ের সাথে ফ্ল্যাটের মূল্য বৃদ্ধি পাবে বহুগুন, যা আপনার জন্য নিশ্চিত সম্পদের নিশ্চয়তা হয়ে থাকবে। এটাই সময় সঠিক সিদ্ধান্ত নেওয়ার। কারণ প্রকল্প বড়, ফ্ল্যাট সীমিত, আর সুযোগ একবারই আসে।", // Updated investment
      features: [
        "লাভজনক বিনিয়োগ",
        "আধুনিক জীবনের আরাম",
        "মূল্য বৃদ্ধির নিশ্চয়তা",
        "প্রকৃতির সৌন্দর্য", // Updated feature
      ],
      image: "/gallery/nawabganj/nobabganj-signboard.jpg",
      color: "blue",
    },
    {
      name: "ধামরাই প্রকল্প",
      location: "ঢাকা-২০ আসন",
      size: "৪৫০ বিঘা", // Updated size
      //   status: "Infrastructure Complete",
      description:
        "৪৫০ বিঘা বিশাল এই প্রকল্প পরিকল্পিতভাবে সাজানো হয়েছে প্রশস্ত রাস্তা, নির্ভরযোগ্য বিদ্যুৎ সংযোগ, বিশুদ্ধ পানির ব্যবস্থা, উন্নত ড্রেনেজ ও আধুনিক সিকিউরিটি সিস্টেম দিয়ে।", // Updated description
      details:
        "পরিবার নিয়ে নিশ্চিন্ত, শান্তিপূর্ণ ও আধুনিক জীবনযাপন করার জন্য এখানে থাকবে সব ধরনের সুযোগ-সুবিধা। ধামরাই এলাকা এখন দ্রুত উন্নয়নের পথে। ঢাকা শহরের ক্রমবর্ধমান চাপের কারণে ধামরাই হয়ে উঠছে বিনিয়োগের নতুন সম্ভাবনাময় কেন্দ্র।", // Updated details
      investment:
        "ফ্ল্যাটের মূল্য প্রতিনিয়ত বৃদ্ধি পাচ্ছে, ফলে আজকের একটি সঠিক বিনিয়োগের- সিদ্ধান্ত আপনাকে দেবে আগামী দিনের নিশ্চিন্ত ভবিষ্যৎ ও আর্থিক সমৃদ্ধি।", // Updated investment
      features: [
        "প্রশস্ত রাস্তা",
        "পরিকল্পিত বিন্যাস",
        "আধুনিক ইনফ্রাস্ট্রাকচার",
        "শান্তিপূর্ণ পরিবেশ",
      ],
      image: "/gallery/dhamrai/dhamrai-photo.jpg",
      color: "green",
    },
  ];
  return (
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
          <Card
            className={`relative p-10 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden ${
              index % 2 === 0
                ? "bg-gradient-to-br from-blue-50 via-white to-indigo-50"
                : "bg-gradient-to-br from-green-50 via-white to-emerald-50"
            }`}
          >
            {/* Decorative Elements */}
            <div
              className={`absolute top-0 right-0 w-96 h-96 ${
                project.color === "blue" ? "bg-blue-200" : "bg-green-200"
              } rounded-full filter blur-3xl opacity-20`}
            ></div>
            <div
              className={`absolute bottom-0 left-0 w-80 h-80 ${
                project.color === "blue" ? "bg-indigo-200" : "bg-emerald-200"
              } rounded-full filter blur-3xl opacity-15`}
            ></div>

            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Image Section */}
                <div
                  className={`relative ${
                    index % 2 === 0 ? "order-1" : "order-2"
                  }`}
                >
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="rounded-2xl shadow-xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 scale-105 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div
                    className={`absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-2 py-1 lg:px-5 lg:py-3 rounded-xl border-2 shadow-lg ${
                      project.color === "blue"
                        ? "border-blue-200"
                        : "border-green-200"
                    }`}
                  >
                    <p className="text-xs lg:text-lg font-bold text-gray-800">
                      {project.size}
                    </p>
                    <p className="text-[8px] lg:text-sm text-gray-600">জমির পরিমাণ</p>
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 0 ? "order-2" : "order-1"
                  }`}
                >
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 font-medium mb-5 flex items-center text-lg">
                      <svg
                        className="w-5 h-5 mr-2 text-gray-500"
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
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
                        <div
                          className={`w-7 h-7 ${
                            project.color === "blue"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-green-100 text-green-600"
                          } rounded-full flex items-center justify-center mr-3 flex-shrink-0`}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Investment Highlight */}
                  <div
                    className={`p-6 rounded-xl border-l-4 ${
                      project.color === "blue"
                        ? "border-blue-500 bg-blue-50"
                        : "border-green-500 bg-green-50"
                    }`}
                  >
                    <p className="text-sm font-semibold text-gray-800 mb-2">
                      বিনিয়োগের সুযোগ
                    </p>
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
  );
};

export default Projects;
