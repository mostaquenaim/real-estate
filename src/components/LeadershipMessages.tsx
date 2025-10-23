"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Quote } from "lucide-react";

const leadershipMessages = [
  {
    title: "ব্যবস্থাপনা পরিচালক (GM)",
    name: "জনাব আব্দুল করিম",
    message: `আসসালামু আলাইকুম,

বাংলার ছোঁয়া মডেল সিটি লিমিটেড একটি ভিশনভিত্তিক প্রতিষ্ঠান, যার লক্ষ্য শুধু রিয়েল এস্টেট ব্যবসা নয়, বরং মানুষের বাড়ি ও সম্পত্তি কেনার স্বপ্নকে সহজ, নিরাপদ ও হালাল উপায়ে বাস্তবে রূপ দেওয়া।

বর্তমান সময়ে জমি ও ফ্ল্যাট কেনা অনেকের কাছেই জটিল ও ভয়ের বিষয়। আমরা সেই ভয় ও অনিশ্চয়তার অবসান ঘটিয়ে মানুষের দোরগোড়ায় আস্থার সাথে স্বচ্ছ কাগজপত্র ও সঠিক মালিকানা নিশ্চিত করে জমি ও ফ্ল্যাট পৌঁছে দিতে প্রতিশ্রুতিবদ্ধ।

আমাদের প্রতিটি প্রজেক্ট পরিকল্পিত, রেজিস্ট্রেশন ভিত্তিক এবং শরিয়াহ অনুযায়ী পরিচালিত। আমরা চাই, একজন সাধারণ মানুষও যেন নির্বিঘ্নে তার স্বপ্নের ঠিকানার মালিক হতে পারেন। একটি প্রতিষ্ঠান তখনই সফল হয়, যখন গ্রাহক, বিনিয়োগকারী ও কর্মীরা-তিন পক্ষই আত্মবিশ্বাস নিয়ে এগিয়ে যেতে পারে।

আমি বিশ্বাস করি, বাংলার ছোঁয়া সেই জায়গা থেকে আজ একটি পরিচিত ও বিশ্বাসযোগ্য ব্র্যান্ড হয়ে উঠেছে। এই যাত্রায় যারা আমাদের পাশে আছেন-আমাদের বিনিয়োগকারী, গ্রাহক, এবং পরিশ্রমী টিম-তাদের প্রতি জানাই আন্তরিক কৃতজ্ঞতা। আমরা আশাবাদী, সামনে আরও বড় পরিসরে মানুষের পাশে দাঁড়াতে পারবো ইনশাআল্লাহ। আসুন, আমরা সম্মিলিতভাবে একটি নিরাপদ, হালাল ও সমৃদ্ধ ভবিষ্যৎ গড়ে তুলি।`,
    gradient: "from-emerald-600 to-teal-600",
    bgPattern: "from-emerald-50 to-teal-50",
    // image: "/avatars/gm.png",
  },
  {
    title: "প্রধান নির্বাহী কর্মকর্তা (CEO)",
    name: "জনাব মোহাম্মদ রহমান",
    message: `বাংলার ছোঁয়া মডেল সিটি লিমিটেড এর সিইও হিসেবে আমি গভীর কৃতজ্ঞতা ও দায়িত্ববোধ নিয়ে এই কথাগুলো বলছি। এই প্রতিষ্ঠান গড়ে তোলার পেছনে আমাদের একটি সুদূরপ্রসারী লক্ষ্য ছিল-মানুষের জন্য জমি ও আবাসন সুবিধাকে সহজ, নিরাপদ এবং হালাল উপায়ে বাস্তবায়ন করা। বর্তমানে রিয়েল এস্টেট খাতটি নানা জটিলতা, অনিশ্চয়তা ও মানুষের আস্থাহীনতায় ভুগছে। আমরা সেই আস্থা ফিরিয়ে আনতেই কাজ করছি।

আমাদের প্রতিটি প্রকল্পে বিনিয়োগকারীর অর্থ সুরক্ষিত রাখতে সাব কবলা রেজিস্ট্রি, পাওয়ার অফ অ্যাটর্নি ও শরিয়াহভিত্তিক প্রক্রিয়া অনুসরণ করা হয়। আমরা বিশ্বাস করি, জমি বা ফ্ল্যাট কেনা একটি আর্থিক বিনিয়োগ নয়, এটি একটি আবেগ, একটি স্বপ্ন-নিজের ঠিকানা, নিজের ভরশার জায়গা। এই স্বপ্ন পূরণে যাতে কেউ প্রতারিত না হয়, সেজন্যই বাংলার ছোঁয়া কাজ করে যাচ্ছে সততা, স্বচ্ছতা ও পেশাদারিত্ব নিয়ে।

আমাদের লক্ষ্য শুধু শহর নয়-সারাদেশব্যাপী মানুষের কাছে আধুনিক, পরিকল্পিত ও শরিয়াহসম্মত আবাসনের সুযোগ পৌঁছে দেওয়া। এই যাত্রায় যারা আমাদের পাশে আছেন-আমাদের বিনিয়োগকারী, গ্রাহক, এবং পরিশ্রমী টিম-তাদের প্রতি জানাই আন্তরিক কৃতজ্ঞতা। আমরা আশাবাদী, সামনে আরও বড় পরিসরে মানুষের পাশে দাঁড়াতে পারবো ইনশাআল্লাহ। আসুন, আমরা সম্মিলিতভাবে একটি নিরাপদ, হালাল ও সমৃদ্ধ ভবিষ্যৎ গড়ে তুলি। আপনাদের বিশ্বাস আর ভালোবাসাই আমাদের সবচেয়ে বড় শক্তি। আমরা চাই, বাংলার ছোঁয়া হোক এমন একটি নাম-যেখানে মানুষ চোখ বন্ধ করে স্বপ্ন জমা রাখতে পারে।`,
    gradient: "from-blue-600 to-indigo-600",
    bgPattern: "from-blue-50 to-indigo-50",
  },
  {
    title: "পরিচালক (বিক্রয় ও বিপণন)",
    name: "জনাব আহমেদ হোসেন",
    message: `প্রিয় গ্রাহকবৃন্দ,

বাংলার ছোয়া মডেল সিটি লিমিটেড-এর পক্ষ থেকে আপনাদের আন্তরিক শুভেচ্ছা জানাচ্ছি। আমরা বিশ্বাস করি, "বাড়ি" শুধু ইট-পাথরের একটি স্থাপনা নয়-এটি আপনার স্বপ্ন, নিরাপত্তা ও ভবিষ্যতের প্রতিচ্ছবি। সেই স্বপ্ন বাস্তবে রূপ দিতে আমরা প্রতিশ্রুতিবদ্ধ, মানসম্মত অবকাঠামো, আধুনিক সুযোগ-সুবিধা ও সুশৃঙ্খল পরিকল্পনার মাধ্যমে।

আমাদের প্রতিটি প্রকল্পে আমরা অগ্রাধিকার দিই-সঠিক লোকেশন ও নিরাপদ বিনিয়োগ, প্রশস্ত রাস্তা, সবুজায়ন ও আধুনিক নাগরিক সুবিধা, স্বচ্ছ লেনদেন ও গ্রাহক আস্থার সম্পর্ক।

বাংলার ছোয়া মডেল সিটি লিমিটেড সবসময় চেষ্টা করছে যেন প্রতিটি গ্রাহক কেবল একটি প্লট বা ফ্ল্যাট না পান, বরং পান একটি নিরাপদ ভবিষ্যৎ ও একটি গর্বিত ঠিকানা।

আপনাদের বিশ্বাস ও ভরসা আমাদের অন্যতম প্রেরণা। আমরা চাই, আপনিও এই স্বপ্নযাত্রার গর্বিত অংশ হোন—একটি সুন্দর, পরিকল্পিত, আধুনিক ও সমৃদ্ধশালী ভবিষ্যতের পথে। আপনার স্বপ্ন পূরণে আমরা বদ্ধ পরিকর।`,
    gradient: "from-amber-600 to-orange-600",
    bgPattern: "from-amber-50 to-orange-50",
  },
  {
    title: "পরিচালক",
    name: "জনাব সাইফুল ইসলাম",
    message: `বাংলার ছোঁয়া মডেল সিটি লিমিটেড এমন একটি স্বপ্ন বয়ে চলা প্রতিষ্ঠান, যা মানুষের আবাসনের চাহিদাকে সম্মান করে, এবং সেটিকে বাস্তবতায় রূপ দিতে দৃঢ় প্রতিশ্রুতিবদ্ধ। আমাদের মূল লক্ষ্য-"জমি ও ফ্ল্যাট হোক সবার নাগালে, হালাল ইনকামে নিরাপদ ভবিষ্যতের নিশ্চয়তা।"

আমরা বিশ্বাস করি, একজন গ্রাহকের আস্থা অর্জনের চেয়ে বড় কিছু নেই। তাই প্রতিটি প্রকল্পে স্বচ্ছতা, নিরাপত্তা এবং পেশাদারিত্ব বজায় রেখে আমরা এগিয়ে চলেছি।

আমরা চাই, প্রতিটি মানুষ যেন হয়রানিমুক্ত, সহজ এবং সম্মানজনক প্রক্রিয়ার মাধ্যমে নিজের স্বপ্নের ঠিকানা অর্জন করতে পারে।

আপনারা আমাদের পাশে থাকুন—ইনশাআল্লাহ আমরা একসাথে গড়বো আগামীর আস্থার বাংলাদেশ।`,
    gradient: "from-purple-600 to-pink-600",
    bgPattern: "from-purple-50 to-pink-50",
  },
];

const LeadershipMessages = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto mb-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Messages from Our Leadership
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            আমাদের দূরদর্শী নেতৃত্বের পক্ষ থেকে অনুপ্রেরণামূলক বার্তা
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="space-y-8">
          {leadershipMessages.map((msg, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Decorative gradient bar */}
              <div className={`h-2 bg-gradient-to-r ${msg.gradient}`}></div>

              {/* Card Content */}
              <div className={`bg-gradient-to-br ${msg.bgPattern} p-8 md:p-10`}>
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Avatar Section */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      {/* {msg?.image ? (
                        <div className="relative">
                          <div className={`absolute inset-0 bg-gradient-to-br ${msg.gradient} rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                          <img
                            src={msg.image}
                            alt={msg.title}
                            className="relative h-32 w-32 md:h-40 md:w-40 rounded-full object-cover border-4 border-white shadow-xl"
                          />
                        </div>
                      ) 
                      : (
                        <div className={`h-32 w-32 md:h-40 md:w-40 rounded-full bg-gradient-to-br ${msg.gradient} flex items-center justify-center shadow-xl border-4 border-white`}>
                          <span className="text-white text-4xl font-bold">
                            {msg.title.charAt(0)}
                          </span>
                        </div>
                      )
                      } */}
                      {/* Quote Icon */}
                      <div
                        className={`absolute -bottom-2 -right-2 h-12 w-12 bg-gradient-to-br ${msg.gradient} rounded-full flex items-center justify-center shadow-lg`}
                      >
                        <Quote className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                    {/* Title and Position */}
                    <div className="mb-6">
                      <h3
                        className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${msg.gradient} bg-clip-text text-transparent mb-2`}
                      >
                        {msg.title}
                      </h3>
                      {msg.name && (
                        <p className="text-gray-600 text-lg font-medium">
                          {msg.name}
                        </p>
                      )}
                    </div>

                    {/* Message Content */}
                    <div className="relative">
                      <div
                        className={`text-gray-700 leading-relaxed text-base md:text-lg whitespace-pre-line overflow-hidden transition-all duration-500 ${
                          expandedIndex === i ? "max-h-none" : "max-h-48"
                        }`}
                      >
                        {msg.message}
                      </div>

                      {/* Gradient Fade for collapsed state */}
                      {expandedIndex !== i && (
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/60 to-transparent pointer-events-none"></div>
                      )}
                    </div>

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => toggleExpand(i)}
                      className={`mt-6 flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${msg.gradient} text-white font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                    >
                      <span>
                        {expandedIndex === i
                          ? "সংক্ষিপ্ত করুন"
                          : "সম্পূর্ণ পড়ুন"}
                      </span>
                      {expandedIndex === i ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 text-center">
          <div className="inline-block">
            <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipMessages;
