"use client";
import React from "react";
import { motion } from "framer-motion";
import CompanyBTn from "./CompanyBTn";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.4,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const CompanyHistory = () => {
  return (
    <motion.div
      className="container mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Content Section */}
        <div>
          {/* Section Title */}
          <motion.div variants={headingVariants}>
            <h3 className="text-base md:text-lg font-semibold text-secondary mb-2">
              Our History
            </h3>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
              Crafting structures that last a lifetime
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-textcolor md:text-xl text-base leading-relaxed mb-6"
            variants={paragraphVariants}
          >
            Since 2007, we have been proudly serving the Kingdom of Saudi Arabia
            with a wide range of engineering services. From power management
            solutions like UPS systems and generators to advanced security
            installations such as CCTV, we ensure the highest standards of
            quality and reliability. Our offerings also include cutting-edge
            software solutions, load banks, data center services, server
            management, and computer systems. With over a decade of experience,
            we continue to support the diverse engineering needs of our clients
            across various sectors in Saudi Arabia.
          </motion.p>

          {/* Buttons & Support */}
          <motion.div
            className="flex flex-wrap items-center gap-6"
            variants={buttonVariants}
          >
            <CompanyBTn />
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div className="relative" variants={containerVariants}>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <motion.img
              src="/about3.png"
              alt="Company History"
              className="w-full h-auto object-cover"
              variants={headingVariants}
            />
          </div>

          {/* Experience Box */}
          <div className="absolute bottom-0 left-0 bg-primary text-white px-6 py-4 rounded-tr-lg">
            <h3 className="text-3xl lg:text-5xl font-bold">
              <span className="counter">20</span>+
            </h3>
            <p className="text-base md:text-lg">Years of Experience</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CompanyHistory;
