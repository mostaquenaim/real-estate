'use client'
import BannerSection from "@/components/BannerSection";
import { projects } from "@/lib/constants";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  FaMapMarkerAlt,
  FaRulerCombined,
  FaHome,
  FaShieldAlt,
  FaTree,
  FaWater,
  FaCar,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/animations";

export default async function ExploreProjectsPageComp({ project }) {
    console.log(project,'ssd');

  if (!project) {
    return notFound();
  }

  const galleryImages = [
    project.image,
    
  ];

  return (
    <>
      <BannerSection image={project.image} />
      <div className="container mx-auto py-16 px-4 max-w-6xl space-y-16">
        {/* Title & Location */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="space-y-4 text-center"
        >
          <h1 className="text-5xl font-bold text-green-900 font-serif tracking-tight">
            {project.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-lg text-gray-600">
            <FaMapMarkerAlt className="text-green-700" />
            <span>{project.location}</span>
            <span className="ml-4 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              {project?.status || "Ongoing"}
            </span>
          </div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
            className="h-[500px]"
          >
            {galleryImages.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Project Highlights */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <FaRulerCombined className="text-3xl mx-auto text-green-700 mb-2" />
            <h3 className="font-semibold">Area</h3>
            <p className="text-gray-600">{project.landSize}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <FaHome className="text-3xl mx-auto text-green-700 mb-2" />
            <h3 className="font-semibold">Plots Available</h3>
            <p className="text-gray-600">{project.plotSizes}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <FaWater className="text-3xl mx-auto text-green-700 mb-2" />
            <h3 className="font-semibold">Utilities</h3>
            <p className="text-gray-600">Water & Electricity</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <FaCar className="text-3xl mx-auto text-green-700 mb-2" />
            <h3 className="font-semibold">Road Width</h3>
            <p className="text-gray-600">20-30 ft</p>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h2 className="text-3xl font-bold text-green-900 font-serif">
            Project Overview
          </h2>
          <div className="prose prose-lg text-gray-700">
            <p>{project.description}</p>
            <p className="mt-4">
              Strategically located with excellent connectivity to major
              highways and business districts,
              {project.title} offers premium residential plots with all modern
              amenities. Our gated community ensures security and privacy while
              providing a serene living environment.
            </p>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="bg-green-50 rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-green-900 font-serif mb-6">
            Premium Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FaShieldAlt size={24} />,
                title: "24/7 Security",
                desc: "Gated community with CCTV surveillance",
              },
              {
                icon: <FaTree size={24} />,
                title: "Landscaped Gardens",
                desc: "Beautifully designed green spaces",
              },
              {
                icon: <FaWater size={24} />,
                title: "Water Supply",
                desc: "Deep tube well with overhead tank",
              },
              {
                icon: <FaCar size={24} />,
                title: "Wide Roads",
                desc: "30ft wide internal roads with street lights",
              },
              {
                icon: <FaHome size={24} />,
                title: "Community Center",
                desc: "Dedicated space for events",
              },
              {
                icon: <FaMapMarkedAlt size={24} />,
                title: "Prime Location",
                desc: "Close to schools, hospitals & markets",
              },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-700">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Location Map */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-green-900 font-serif">
            Strategic Location
          </h2>
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.862004095952!2d90.3782773154316!3d23.750767884587126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-2xl"
            ></iframe>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-3">Accessibility</h3>
              <ul className="space-y-2">
                <li>• 5 mins from main highway</li>
                <li>• 15 mins to city center</li>
                <li>• Nearby public transport</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-3">Nearby Facilities</h3>
              <ul className="space-y-2">
                <li>• International schools (2km)</li>
                <li>• Shopping malls (3km)</li>
                <li>• Hospitals (4km)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-3">Future Development</h3>
              <ul className="space-y-2">
                <li>• Metro rail extension (2025)</li>
                <li>• New commercial hub planned</li>
                <li>• Road widening project</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Investment Highlights */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="bg-gradient-to-r from-green-800 to-green-600 text-white rounded-2xl p-8 shadow-2xl"
        >
          <h2 className="text-3xl font-bold font-serif mb-6">
            Investment Potential
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Why Invest Here?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <span>High appreciation potential (15-20% annually)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <span>Government-approved land zoning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <span>Flexible payment plans available</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Payment Options</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Down Payment</h4>
                  <div className="w-full bg-green-700 rounded-full h-2.5 mt-1">
                    <div
                      className="bg-green-300 h-2.5 rounded-full"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                  <p className="text-green-200 text-sm mt-1">
                    30% down payment
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Installment Plan</h4>
                  <div className="w-full bg-green-700 rounded-full h-2.5 mt-1">
                    <div
                      className="bg-green-300 h-2.5 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <p className="text-green-200 text-sm mt-1">
                    70% in 24 months (0% interest)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-green-900 font-serif">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote:
                  "The investment process was smooth and transparent. The location is perfect for my future home.",
                author: "Mr. Rahman",
                role: "Investor",
              },
              {
                quote:
                  "Excellent customer service and clear documentation. The project is developing as promised.",
                author: "Ms. Khan",
                role: "Homeowner",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <div className="text-yellow-400 mb-3">★★★★★</div>
                <p className="italic text-gray-700 mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 text-green-800 rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10 bg-green-900 text-white">
              <h2 className="text-3xl font-bold font-serif mb-4">
                Schedule a Visit
              </h2>
              <p className="mb-6">
                Our sales team is ready to show you the property and discuss
                investment opportunities.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-green-300 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <a href="tel:+8801XXXXXXXXX" className="hover:underline">
                      +880 1XXXXXXXXX
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-green-300 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <a
                      href="mailto:info@yourcompany.com"
                      className="hover:underline"
                    >
                      info@yourcompany.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkedAlt className="text-green-300 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Visit Office</h3>
                    <p>House #123, Road #4, Dhanmondi, Dhaka</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Request Information
              </h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Interest
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option>Plot Purchase</option>
                    <option>Investment Info</option>
                    <option>Site Visit</option>
                    <option>Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-lg font-semibold transition duration-300"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
