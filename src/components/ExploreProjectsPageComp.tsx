"use client";
import BannerSection from "@/components/BannerSection";
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
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaRegCopy,
  FaCheckCircle,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { fadeIn } from "./animations";
import toast from "react-hot-toast";

export interface Project {
  title: string;
  image: string;
  video?: string;
  location: string;
  description: string;
  landSize: string;
  landSizeKatha?: number;
  landSizeShotangsho?: number;
  plotSizes: string;
  slug: string;
  coordinates?: number[];
  layout?: string;
  gallery?: string[];
  layouts?: string[];
  amenities?: string[];
  locationDetails?: string;
}

interface PropertyCardProps {
  project: Project;
}

export default function ExploreProjectsPageComp({
  project,
}: PropertyCardProps) {
  if (!project) return notFound();

  const [isShareOpen, setIsShareOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [layoutLightboxOpen, setLayoutLightboxOpen] = useState(false);
  const [layoutLightboxIndex, setLayoutLightboxIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const allImages = project.gallery?.length ? [...project.gallery] : [];
  const slides = allImages.map((img) => ({ src: img }));

  // const layoutImages = project.layouts?.length ? [...project.layouts] : [];
  // const layoutSlides = layoutImages.map((img) => ({ src: img }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const openLayoutLightbox = (index: number) => {
    setLayoutLightboxIndex(index);
    setLayoutLightboxOpen(true);
  };

  const handleSocialShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Check out this project!");

    const platforms = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    window.open(platforms[platform as keyof typeof platforms], "_blank");
  };

  const copyLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        toast.error("Failed to copy the link.");
      });
  };

  const amenities = [
    { icon: <FaShieldAlt />, text: "Security" },
    { icon: <FaTree />, text: "Green Environment" },
    { icon: <FaWater />, text: "Water Supply" },
    { icon: <FaCar />, text: "Parking Space" },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn("up", "tween", 0.1, 0.6)}
    >
      <BannerSection
        image={project.image ? project.image : ""}
        video={project.video ? project.video : ""}
        title={project.title}
        isProject={true}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* share button details  */}
        <motion.div className="relative flex flex-wrap md:flex-nowrap justify-between items-start gap-4 mb-8">
          <button
            onClick={() => setIsShareOpen(!isShareOpen)}
            className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 shadow-md"
          >
            <FiShare2 /> Share
          </button>

          {isShareOpen && (
            <div className="absolute z-20 bg-white border border-gray-200 rounded-lg shadow-lg top-full mt-2 left-0 w-56 p-2">
              <button
                onClick={() => handleSocialShare("twitter")}
                className="cursor-pointer flex items-center gap-2 w-full px-3 py-2 rounded hover:bg-gray-100"
              >
                <FaTwitter className="text-blue-500" /> Share on Twitter
              </button>
              <button
                onClick={() => handleSocialShare("facebook")}
                className="cursor-pointer flex items-center gap-2 w-full px-3 py-2 rounded hover:bg-gray-100"
              >
                <FaFacebook className="text-blue-700" /> Share on Facebook
              </button>
              <button
                onClick={() => handleSocialShare("linkedin")}
                className="cursor-pointer flex items-center gap-2 w-full px-3 py-2 rounded hover:bg-gray-100"
              >
                <FaLinkedin className="text-blue-600" /> Share on LinkedIn
              </button>
              <button
                onClick={copyLink}
                className="cursor-pointer flex items-center gap-2 w-full px-3 py-2 rounded hover:bg-gray-100 transition-colors duration-200"
              >
                {copied ? (
                  <>
                    <FaCheckCircle className="text-green-600" />
                    <span className="text-green-600 font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <FaRegCopy className="text-gray-600" />
                    <span className="text-gray-700">Copy Link</span>
                  </>
                )}
              </button>
            </div>
          )}
        </motion.div>

        {/* Gallery Section */}
        {allImages.length > 0 && (
          <motion.div initial="hidden" animate="show" className="mb-12">
            <div
              className={`grid grid-cols-1 ${allImages.length > 1 && "md:grid-cols-3"} gap-4`}
            >
              <div
                className={` ${allImages.length > 1 ? "md:col-span-2  h-96" : "h-[500px]"} relative rounded-xl overflow-hidden`}
              >
                <Image
                  src={allImages[0]}
                  alt={project.title}
                  fill
                  className="object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openLightbox(0)}
                  priority
                />
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm">
                  <MdOutlineZoomOutMap />
                  Click to enlarge
                </div>
              </div>
              <div
                className={`grid grid-cols-2 gap-4 h-96  ${allImages.length == 1 && "hidden"}`}
              >
                {allImages.slice(1, 5).map((img, index) => (
                  <div
                    key={index}
                    className="relative rounded-xl overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} ${index + 1}`}
                      fill
                      className="object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                      onClick={() => openLightbox(index + 1)}
                    />
                    {index === 3 && allImages.length > 5 && (
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white font-bold text-xl">
                        +{allImages.length - 5} more
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Lightbox
              open={lightboxOpen}
              close={() => setLightboxOpen(false)}
              slides={slides}
              index={lightboxIndex}
              plugins={[Zoom, Thumbnails]}
              animation={{ fade: 500 }}
              controller={{ closeOnBackdropClick: true }}
            />
          </motion.div>
        )}

        {/* Layout Section */}
        {project.layout && (
          <motion.div initial="hidden" animate="show" className="mb-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Project Layout
              </h2>
              <p className="text-gray-600">
                View our professionally designed site layout and floor plan
              </p>
            </div>

            <motion.div whileHover={{ y: -5 }} className="group">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-transparent max-w-xl mx-auto">
                <Image
                  src={project.layout}
                  alt="Project Layout"
                  fill
                  className="object-contain cursor-pointer group-hover:scale-105 transition-transform duration-300 p-4"
                  onClick={() => openLayoutLightbox(0)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button
                    onClick={() => openLayoutLightbox(0)}
                    className="w-full bg-white text-gray-900 py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                  >
                    <MdOutlineZoomOutMap /> Click to Enlarge
                  </button>
                </div>
              </div>
            </motion.div>
            <Lightbox
              open={layoutLightboxOpen}
              close={() => setLayoutLightboxOpen(false)}
              slides={project.layout ? [{ src: project.layout }] : []}
              index={layoutLightboxIndex}
              plugins={[Zoom, Thumbnails]}
              animation={{ fade: 500 }}
              controller={{ closeOnBackdropClick: true }}
            />
          </motion.div>
        )}

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Description */}
            <motion.div
              initial="hidden"
              animate="show"
              className="bg-white rounded-xl shadow-sm p-6 mb-8"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Project Details
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial="hidden"
              animate="show"
              className="bg-white rounded-xl shadow-sm p-6 mb-8"
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Key Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <FaRulerCombined size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Land Size</h3>
                    <p className="text-gray-600">{project.landSize}</p>
                    {project.landSizeKatha && (
                      <p className="text-gray-600">
                        {project.landSizeKatha} Katha
                      </p>
                    )}
                    {project.landSizeShotangsho && (
                      <p className="text-gray-600">
                        {project.landSizeShotangsho} Shotangsho
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <FaHome size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Plot Sizes</h3>
                    <p className="text-gray-600">{project.plotSizes}</p>
                  </div>
                </div>
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                      {amenity.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {amenity.text}
                      </h3>
                      <p className="text-gray-600">Available</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Location Map */}
            {/* Location Map */}
            {project.coordinates && (
              <motion.div
                initial="hidden"
                animate="show"
                className="bg-white rounded-xl shadow-sm p-6 mb-8"
              >
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  Location
                </h2>
                <div className="h-96 w-full bg-gray-200 rounded-lg overflow-hidden relative mb-6">
                  <iframe
                    src={`https://maps.google.com/maps?q=${project.coordinates[1]},${project.coordinates[0]}&z=15&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded-lg shadow-md flex items-center gap-2">
                    <FaMapMarkedAlt className="text-blue-500" />
                    <span className="text-sm font-medium">
                      {project.location}
                    </span>
                  </div>
                </div>

                {/* ✅ Location details if available */}
                {project.locationDetails && (
                  <div className="text-gray-700 leading-relaxed text-base">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: project.locationDetails,
                      }}
                    />
                  </div>
                )}
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            {/* Contact Card */}
            <motion.div
              initial="hidden"
              animate="show"
              className="bg-white rounded-xl shadow-sm p-6 sticky top-6 mb-8"
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Contact Us
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Phone</p>
                    <a
                      href="tel:+8801337938322"
                      className="font-medium hover:text-blue-600 transition-colors"
                    >
                      +88 01337938322
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <a
                      href="mailto:banglarchoyamodelcity@gmail.com"
                      className="font-medium hover:text-blue-600 transition-colors"
                    >
                      banglarchoyamodelcity@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <IoIosArrowForward className="text-blue-500" />
                  Request More Information
                </h3>
                <ContactForm />
              </div>
            </motion.div>

            {/* Brochure Download */}
            <motion.div
              initial="hidden"
              animate="show"
              className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-sm p-6 text-white"
            >
              <h2 className="text-xl font-semibold mb-4">
                Download Project Brochure
              </h2>
              <p className="mb-4 opacity-90">
                Get complete details about pricing, payment plans, and more.
              </p>
              <button className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                Download PDF
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
