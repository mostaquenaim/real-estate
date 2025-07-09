'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Grid, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import PropertyCard from '@/components/PropertyCard'
import { projects } from '@/lib/constants'
import Image from 'next/image'
import { motion } from 'framer-motion'

const AutoSlidingProjects = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

  // Extend projects for infinite loop
  const extendedProjects = [...projects, ...projects]

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      {/* Main Swiper */}
      <Swiper
        modules={[Autoplay, Grid, Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        slidesPerView={1}
        grid={{
          rows: 1,
          fill: 'row',
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        spaceBetween={30}
      >
        {extendedProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <PropertyCard project={project} index={index % projects.length} />
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        {/* <div className="absolute top-1/2 -left-6 z-50 transform -translate-y-1/2">
          <button className="custom-prev bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold rounded-full p-3 shadow-lg transition">
            ◀
          </button>
        </div>
        <div className="absolute top-1/2 -right-6 z-50 transform -translate-y-1/2">
          <button className="custom-next bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold rounded-full p-3 shadow-lg transition">
            ▶
          </button>
        </div> */}
      </Swiper>

      {/* Thumbnails Swiper */}
      <div className="mt-10 px-2">
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          slidesPerView={4}
          spaceBetween={12}
          watchSlidesProgress
          className="thumbs-swiper"
          breakpoints={{
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 7 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer overflow-hidden rounded-lg border-2 border-transparent hover:border-yellow-500 transition"
              >
                <Image
                  src={project.image || '/images/default-thumb.jpg'}
                  alt={`Thumbnail of ${project.title}`}
                  width={120}
                  height={80}
                  className="object-cover w-full h-[80px]"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default AutoSlidingProjects
