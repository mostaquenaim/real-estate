"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "./animations";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGlobe,
  FaRegCopy,
  FaCheckCircle,
} from "react-icons/fa";

type Concern = {
  id: string;
  title: string;
  image?: string;
  tagline?: string;
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
};

const concerns: Concern[] = [
  {
    id: "haat-bazar",
    title: "Banglar Choya Haat Bazar",
    image: "/sister-concerns/haat-bazar-logo.jpg",
    tagline: "বাংলার ছোঁয়া হাট বাজার — আপনার সুস্বাস্থ্যে প্রতিদিন",
    address:
      "প্রধান কার্যালয়ঃ বাড়ি-২৫ (১ম তলা), সড়কঃ ৪৭, গুলশান-২, ঢাকা-১২১২",
    phone: "+8801337938322",
  },
  {
    id: "mas-trading",
    title: "MAS TRADING COMPANY",
    image: "/sister-concerns/mas-trading-logo-png.png",
    tagline: "Quality you can trust",
    phone: "+8801337938322",
    email: "mastradingcompanybcmc@gmail.com",
    website: "https://www.banglarchoyamodelcity.com",
  },
];

export default function SisterConcerns() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(key);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (e) {
      // fallback: do nothing or optionally alert
      console.error("Copy failed", e);
    }
  };

  return (
    <motion.section
      variants={fadeIn("up", "tween", 0.15, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="py-16 bg-white text-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Sister Concerns
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Banglar Choya-এর অন্যান্য উদ্যোগ ও সেবা — প্রত্যেকটাই আমাদের ব্র্যান্ডের
            বিশ্বাসযোগ্যতা ও মান বজায় রাখতে কাজ করে।
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {concerns.map((c) => (
            <article
              key={c.id}
              className="relative bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
                {/* Logo */}
                <div className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 flex items-center justify-center mx-auto sm:mx-0">
                  {c.image ? (
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      style={{ objectFit: "contain" }}
                      className="p-3 sm:p-4"
                      priority={false}
                    />
                  ) : (
                    <div className="text-lg sm:text-xl font-semibold text-gray-600 text-center px-2">
                      {c.title.split(" ").slice(0, 2).join(" ")}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {c.title}
                  </h3>
                  {c.tagline && (
                    <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                      {c.tagline}
                    </p>
                  )}

                  <div className="space-y-3 sm:space-y-4">
                    {c.address && (
                      <div className="flex items-start gap-3">
                        <FaMapMarkerAlt className="text-green-600 mt-1 flex-shrink-0 text-base sm:text-lg" />
                        <div className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                          {c.address}
                        </div>
                      </div>
                    )}

                    {c.phone && (
                      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                        <div className="flex items-center gap-2 min-w-0">
                          <FaPhone className="text-blue-600 flex-shrink-0 text-sm sm:text-base" />
                          <a
                            href={`tel:${c.phone}`}
                            className="text-sm sm:text-base font-medium hover:text-blue-600 hover:underline transition-colors truncate"
                          >
                            {c.phone}
                          </a>
                        </div>

                        <button
                          aria-label={`Copy phone ${c.phone}`}
                          onClick={() => copyToClipboard(c.phone!, `${c.id}-phone`)}
                          className="ml-auto flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors px-2 py-1 rounded hover:bg-gray-50"
                        >
                          {copiedField === `${c.id}-phone` ? (
                            <>
                              <FaCheckCircle className="text-green-600" />
                              <span className="text-green-600 font-medium">Copied</span>
                            </>
                          ) : (
                            <>
                              <FaRegCopy />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}

                    {c.email && (
                      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          <FaEnvelope className="text-amber-600 flex-shrink-0 text-sm sm:text-base" />
                          <a
                            href={`mailto:${c.email}`}
                            className="text-sm sm:text-base font-medium hover:text-amber-600 hover:underline transition-colors break-all"
                          >
                            {c.email}
                          </a>
                        </div>

                        <button
                          aria-label={`Copy email ${c.email}`}
                          onClick={() => copyToClipboard(c.email!, `${c.id}-email`)}
                          className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors px-2 py-1 rounded hover:bg-gray-50"
                        >
                          {copiedField === `${c.id}-email` ? (
                            <>
                              <FaCheckCircle className="text-green-600" />
                              <span className="text-green-600 font-medium">Copied</span>
                            </>
                          ) : (
                            <>
                              <FaRegCopy />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}

                    {c.website && (
                      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          <FaGlobe className="text-sky-600 flex-shrink-0 text-sm sm:text-base" />
                          <a
                            href={c.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm sm:text-base font-medium hover:text-sky-600 hover:underline transition-colors break-all"
                          >
                            {c.website.replace(/^https?:\/\//, "")}
                          </a>
                        </div>

                        <button
                          aria-label={`Copy website ${c.website}`}
                          onClick={() =>
                            copyToClipboard(c.website!, `${c.id}-website`)
                          }
                          className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors px-2 py-1 rounded hover:bg-gray-50"
                        >
                          {copiedField === `${c.id}-website` ? (
                            <>
                              <FaCheckCircle className="text-green-600" />
                              <span className="text-green-600 font-medium">Copied</span>
                            </>
                          ) : (
                            <>
                              <FaRegCopy />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
