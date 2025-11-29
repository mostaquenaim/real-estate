import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./animations";

const Brochure = () => {
  const downloadLogo = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
    );
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.6, 1)}
      className="text-center bg-sky-300/20 py-16 px-6 shadow-lg border border-sky-300"
    >
      <div className="inline-block mb-6">
        <span className="text-xs uppercase tracking-widest text-green-600 font-semibold bg-green-100 py-2 px-4 rounded-full">
          Company Brochure
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Explore Our Official Brochure
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Discover our journey, vision, and premium land projects in detail.
        Download the brochure to learn more about our offerings and commitments.
      </p>

      <div className="flex flex-col lg:flex-row justify-center gap-2 text-xs lg:text-base">
        <a
          href="/brochure/Corporate Brochure (bangla) v2.2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 lg:px-8 lg:py-4 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 transition-all duration-300"
        >
          {downloadLogo()}
          Download Brochure (PDF)
        </a>

        <a
          href="/brochure/Corporate Brochure (Folding page).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 lg:px-8 lg:py-4 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 transition-all duration-300"
        >
          {downloadLogo()}
          Download Brochure (Folding Page)
        </a>
      </div>
    </motion.div>
  );
};

export default Brochure;
