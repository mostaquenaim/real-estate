import React from 'react';
import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle';
import AutoSlidingProjects from './AutoSlidingProjects ';
import { fadeIn } from './animations';

const FeaturedProjects = () => {
    return (
        <motion.section
            className="relative py-24 shadow-lg shadow-green-500"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div
                className="absolute inset-0 z-0 bg-fixed bg-center bg-cover opacity-80"
                style={{ backgroundImage: `url('/backgrounds/ft-projects.jpg')` }}
            ></div>
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div variants={fadeIn('up', 'tween', 0.3, 1)}>
                    <SectionTitle
                        title="Our Featured Projects"
                        subtitle="A glimpse into the developments shaping our future"
                    />
                    <AutoSlidingProjects />
                </motion.div>
            </div >
        </motion.section >
    );
};

export default FeaturedProjects;