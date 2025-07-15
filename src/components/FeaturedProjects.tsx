import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { fadeIn } from './animations';
import AutoSlidingProjects from './AutoSlidingProjects ';

const FeaturedProjects = () => {
  return (
    <motion.section
      className="relative py-24 shadow-lg shadow-green-500 overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 md:bg-fixed bg-center bg-cover "
        style={{
          backgroundImage: `url('/backgrounds/gpt-generated-real-estate-photo.png')`,
        }}
      ></div>

      {/* Top black fade */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10"></div>

      {/* Bottom black fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 max-w-7xl">
        <motion.div variants={fadeIn('up', 'tween', 0.3, 1)}>
          <SectionTitle
            title="Our Featured Projects"
            subtitle="A glimpse into the developments shaping our future"
            isPage={false}
          />
          <AutoSlidingProjects />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturedProjects;
