"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";
import { fadeIn } from "./animations";
import Link from "next/link";
import { ChevronDown, Play } from "lucide-react";
import SocialPlatforms from "./SocialPlatforms";

interface BannerSectionProps {
  image?: string;
  video?: string;
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
  video,
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
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [activeVideo, setActiveVideo] = useState(false);

  // const [playVideo, setPlayVideo] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const titleStyle =
    "text-2xl md:text-4xl font-extrabold text-opacity-80 leading-tight mx-auto md:mx-0 tracking-tight drop-shadow-lg text-white";

  const homeStyle =
    "max-w-3xl transform transition-transform duration-500 ease-in-out pt-20";

  const handleArrowClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const handleVideoClick = () => {
    // if (!videoRef.current) return;
    console.log(activeVideo,'activeVideo');
    setActiveVideo(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.controls = true;
        videoRef.current.play();
      }
    }, 50);
  };

  return (
    <motion.section
      ref={heroRef}
      className={`${
        !isHome
          ? "md:max-h-screen h-[65vh]"
          : "md:min-h-screen h-[80vh] md:h-[90vh] items-center"
      } relative flex overflow-hidden bg-cover bg-center bg-no-repeat shadow-2xl group transition`}
      style={{
        backgroundImage: !video ? `url('${image}')` : undefined,
      }}
      initial="initial"
      whileHover="hover"
    >
      {/* Background Video */}
      {/* Background Video (when not active) */}
      {video && (
        <video
          ref={videoRef}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ${
            activeVideo ? "opacity-0 pointer-events-none" : "opacity-100 z-0"
          }`}
        />
      )}

      {/* --- FULLSCREEN VIDEO POPUP --- */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(false)}
        >
          {/* Stop background click from closing */}
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white text-3xl font-bold"
              onClick={() => setActiveVideo(false)}
            >
              ✕
            </button>

            <video
              ref={videoRef}
              src={video}
              autoPlay
              controls
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}

      {/* Dark Overlay */}
      {!activeVideo && (
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none"></div>
      )}

      {/* Hover Play Button */}
      {video && !activeVideo && (
        <motion.button
          onClick={handleVideoClick}
          className="absolute bottom-5 right-5 z-30 p-3 bg-white/80 hover:bg-white rounded-full shadow-xl transition"
          whileHover={{ scale: 1.1 }}
        >
          <Play className="text-green-700 w-6 h-6" />
        </motion.button>
      )}

      {/* Content Container */}
      <div
        className={`relative z-20 container mx-auto text-center max-w-5xl ${
          isHome && "md:text-left"
        }`}
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={`${
            !isHome &&
            (isProject
              ? "absolute bottom-1/6 left-1/2 -translate-x-1/2"
              : "lg:left-1/2 lg:-translate-x-1/2 absolute bottom-1/6")
          } `}
        >
          {isHome ? (
            <h1 className={`${titleStyle} ${homeStyle}`}>
              {"Your Gateway to Premium Land, Plots & Apartments "
                .split("")
                .map((letter, index) => (
                  <motion.span
                    key={`main-${index}`}
                    className="inline-block"
                    custom={index}
                    variants={{
                      initial: { scale: 1 },
                      hover: (i) => ({
                        scale: [1, 1.5, 1.1],
                        transition: {
                          delay: i * 0.01,
                          duration: 0.5,
                        },
                      }),
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
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
              className={`mt-6 text-md text-yellow-100 mx-auto md:mx-0 leading-relaxed drop-shadow-md ${
                isHome &&
                "transform transition-transform duration-500 ease-in-out delay-300 max-w-2xl"
              }`}
            >
              {subtitle}
            </p>
          )}

          <div
            className="mt-12 flex justify-center md:justify-start gap-6 max-w-xs mx-auto md:mx-0
             transform transition-transform duration-500 ease-in-out delay-500"
          >
            {button1 && button1Link && (
              <Link href={button1Link}>
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-300 to-yellow-600 hover:shadow-lg shadow-white border-white border-2 text-green-900 font-semibold p-2 md:p-4 cursor-pointer rounded-lg transition-transform duration-300"
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
                  className="bg-white text-green-700 shadow-white border-white border-2 font-semibold p-2 md:p-4 cursor-pointer rounded-lg shadow hover:shadow-lg transition duration-300"
                >
                  {button2}
                </motion.button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>

      {/* Bouncing Down Arrow */}
      {!activeVideo && (
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 text-white"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={handleArrowClick}
        >
          <ChevronDown className="cursor-pointer w-8 h-8 md:w-16 md:h-16 text-yellow-200 drop-shadow-xl" />
        </motion.div>
      )}

      {/* Social Media */}
      <SocialPlatforms
        classes="flex md:flex-col gap-4 top-0 right-0 absolute m-5 z-50"
        iconStyle="text-white opacity-50 hover:opacity-100"
        textSize="lg lg:2xl"
      />
    </motion.section>
  );
};

export default BannerSection;
