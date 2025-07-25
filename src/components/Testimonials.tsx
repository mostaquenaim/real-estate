"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SectionTitle from "./SectionTitle";
import { testimonials } from "@/lib/constants";

export const Testimonials = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 z-0 md:bg-fixed bg-center bg-cover "
        style={{
          backgroundImage: `url('/images/happy-client.jpg')`,
        }}
      ></div>
      {/* over the background image inset */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Top black fade */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10"></div>

      {/* Bottom black fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10"></div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* heading */}
        <SectionTitle
          title="Client Testimonials"
          subtitle="Real words from the people we proudly serve"
          isPage={false}
        />

        {/* swiper */}
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          className="pb-12"
        >
          {testimonials.map(({ quote, author, role, avatar }, i) => (
            <SwiperSlide
              key={i}
              className="w-96 max-w-[24rem] bg-white rounded-3xl p-8 shadow-lg flex flex-col justify-between cursor-pointer"
            >
              <div className="relative mb-6">
                <div className="absolute top-0 left-0 text-yellow-200 text-[6rem] font-serif select-none pointer-events-none -z-10">
                  &ldquo;
                </div>
                <p className="text-gray-800 text-lg leading-relaxed">{quote}</p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                {avatar && (
                  <img
                    src={avatar}
                    alt={author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400 shadow-md"
                    loading="lazy"
                  />
                )}
                <div>
                  <div className="font-semibold text-green-900">{author}</div>
                  <div className="text-yellow-600 text-sm">{role}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
