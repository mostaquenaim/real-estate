"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "./animations";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface BannerSectionProps {
  image: string;
  isHome?: boolean;
  isProject?: boolean;
  title?: string;
  subtitle?: string;
  button1?: string;
  button1Link?: string;
  button2?: string;
  button2Link?: string;
}

const BannerSection = ({
  image,
  isHome = false,
  isProject = false,
  title,
  subtitle,
  button1,
  button1Link,
  button2,
  button2Link,
}: BannerSectionProps) => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const titleStyle =
    "text-2xl md:text-4xl font-extrabold text-white leading-tight mx-auto md:mx-0 tracking-tight drop-shadow-lg";
  const homeStyle =
    "max-w-3xl lg:group-hover:scale-125 lg:group-hover:translate-x-40 transform transition-transform duration-500 ease-in-out pt-20";

  return (
    <section
      ref={heroRef}
      className={` ${!isHome ? "md:max-h-screen h-[65vh]" : "md:min-h-screen h-[80vh] md:h-[90vh] items-center"} relative flex overflow-hidden bg-cover bg-center bg-no-repeat shadow-2xl hover:shadow-green-700 group transition`}
      style={{
        backgroundImage: `url('${image}')`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content Container */}
      <div
        className={`relative z-20 container mx-auto text-center max-w-5xl ${isHome && "md:text-left "}`}
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={`${!isHome && (isProject ? "absolute bottom-1/6 left-1/2 -translate-x-1/2" : "lg:left-1/2 lg:-translate-x-1/2 absolute bottom-1/6")} `}
        >
          {isHome ? (
            <h1
              className={`${titleStyle}
              ${isHome ? homeStyle : ""}`}
            >
              Your Gateway to Premium Land, Plots & Apartments
              <span className="text-yellow-400">
                {" "}
                Across
                <span className="bg-gradient-to-r from-yellow-300 to-green-500 bg-clip-text text-transparent">
                  {" "}
                  Bangladesh{" "}
                </span>
                — Especially in Dhaka
              </span>
            </h1>
          ) : (
            <h1 className={`${titleStyle}`}>{title}</h1>
          )}

          {subtitle && (
            <p
              className={`mt-6 text-md text-yellow-100 mx-auto md:mx-0 leading-relaxed drop-shadow-md
              ${isHome && "lg:group-hover:scale-125 lg:group-hover:translate-x-40 transform transition-transform duration-500 ease-in-out delay-300 max-w-2xl"}`}
            >
              {subtitle}
            </p>
          )}

          <div
            className="mt-12 flex md:flex-col flex-row justify-center md:justify-start gap-6 max-w-xs mx-auto md:mx-0
            lg:group-hover:scale-125 lg:group-hover:translate-x-80 transform transition-transform duration-500 ease-in-out delay-500"
          >
            {button1 && button1Link && (
              <Link href={button1Link}>
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-300 to-yellow-600 hover:shadow-lg shadow-white border-white border-2 text-green-900 font-semibold p-4 cursor-pointer rounded-lg transition-transform duration-300"
                >
                  {button1}
                </motion.button>
              </Link>
            )}

            {button2 && button2Link && (
              <Link href={button2Link}>
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-700 shadow-white border-white border-2 font-semibold p-4 cursor-pointer rounded-lg shadow hover:shadow-lg transition duration-300"
                >
                  {button2}
                </motion.button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>

      {/* Bouncing Down Arrow */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 text-white"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="w-8 h-8 md:w-16 md:h-16 text-yellow-200 drop-shadow-xl" />
      </motion.div>
    </section>
  );
};

export default BannerSection;
