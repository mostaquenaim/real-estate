"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/components/animations";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowLeftIcon,
  MapPinIcon,
  RulerIcon,
  ExpandIcon,
  PhoneIcon,
} from "@/components/icons";

interface ShowProjectProps {
  projectData: {
    title: string;
    location: string;
    landSize: string;
    plotSizes: string;
    description: string;
    features: string[];
    images: string[];
    contactNumber: string;
    mapEmbedUrl: string;
  };
}

const ShowProject = ({ projectData }: ShowProjectProps) => {
  const router = useRouter();

  // Sample project data - replace with your actual data fetching

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50"
    >
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <motion.button
          onClick={() => router.back()}
          whileHover={{ x: -5 }}
          className="flex items-center text-green-600 font-medium"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Projects
        </motion.button>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] w-full overflow-hidden mt-6">
        <Image
          src={projectData.images[0]}
          alt={projectData.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 md:px-12 md:pb-12">
          <motion.h1
            variants={fadeIn("up", "spring", 0.2, 1)}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            {projectData.title}
          </motion.h1>
          <motion.div
            variants={fadeIn("up", "spring", 0.3, 1)}
            className="flex items-center mt-3 text-white/90"
          >
            <MapPinIcon className="w-5 h-5 mr-2" />
            <span>{projectData.location}</span>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Project Details */}
          <div className="lg:col-span-2">
            {/* Project Description */}
            <motion.div
              variants={fadeIn("up", "spring", 0.4, 1)}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Project Overview
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {projectData.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <RulerIcon className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-800">
                      Land Size
                    </h3>
                  </div>
                  <p className="text-gray-700">{projectData.landSize}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <ExpandIcon className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-800">
                      Available Plot Sizes
                    </h3>
                  </div>
                  <p className="text-gray-700">{projectData.plotSizes}</p>
                </div>
              </div>
            </motion.div>

            {/* Project Features */}
            <motion.div
              variants={fadeIn("up", "spring", 0.5, 1)}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectData.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn("up", "spring", 0.5 + index * 0.1, 1)}
                    className="flex items-start bg-white p-4 rounded-lg border border-gray-100 shadow-sm"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Gallery */}
            <motion.div
              variants={fadeIn("up", "spring", 0.6, 1)}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectData.images.slice(1).map((image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="relative h-64 rounded-xl overflow-hidden shadow-md"
                  >
                    <Image
                      src={image}
                      alt={`${projectData.title} - ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Location Map */}
            <motion.div variants={fadeIn("up", "spring", 0.7, 1)}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Location
              </h2>
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src={projectData.mapEmbedUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact/Sidebar */}
          <div>
            <motion.div
              variants={fadeIn("up", "spring", 0.8, 1)}
              className="sticky top-24"
            >
              {/* Contact Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 mb-8">
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
                  <h3 className="text-xl font-bold">
                    Interested in this project?
                  </h3>
                  <p className="mt-2 opacity-90">
                    Schedule a site visit or get more information
                  </p>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <PhoneIcon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Contact Number</p>
                      <p className="text-lg font-semibold text-gray-800">
                        {projectData.contactNumber}
                      </p>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all">
                    Request Call Back
                  </button>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gray-800 p-6 text-white">
                  <h3 className="text-xl font-bold">At a Glance</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex justify-between border-b border-gray-100 pb-4">
                      <span className="text-gray-600">Project Type</span>
                      <span className="font-medium">Residential Plots</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-100 pb-4">
                      <span className="text-gray-600">Total Land Area</span>
                      <span className="font-medium">
                        {projectData.landSize}
                      </span>
                    </li>
                    <li className="flex justify-between border-b border-gray-100 pb-4">
                      <span className="text-gray-600">Plot Sizes</span>
                      <span className="font-medium">
                        {projectData.plotSizes}
                      </span>
                    </li>
                    <li className="flex justify-between border-b border-gray-100 pb-4">
                      <span className="text-gray-600">Installment Plan</span>
                      <span className="font-medium">Available</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Handover</span>
                      <span className="font-medium">Immediate</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ShowProject;
