"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image"; // Optimized image handling
import CompanyBTn from "./CompanyBTn";
import Reach from "./Reach";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <div className="container mx-auto py-16 lg:py-32 px-4 sm:px-0" ref={ref}>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Image Section */}
        <motion.div
          className="w-full flex justify-center lg:justify-start"
          variants={imageVariants}
          style={{ willChange: "transform, opacity" }} // Performance optimization
        >
          <Image
            src="/about.png"
            alt="Illustration about Gulf Horizon Telecom Est."
            width={800}
            height={600}
            className="w-full rounded-3xl xl:w-[80%]"
            quality={90}
            loading="lazy"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="text-center lg:text-start space-y-6"
          variants={containerVariants}
        >
          <motion.h3
            className="text-secondary text-lg md:text-xl font-semibold"
            data-translate-key="Aboutus"
            variants={headingVariants}
          >
            About Us
          </motion.h3>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary"
            data-translate-key="Aboutheading"
            variants={headingVariants}
          >
            Gulf Horizon Telecom Est.
          </motion.h2>
          <motion.p
            className="text-lg lg:text-xl text-textcolor"
            data-translate-key="Aboutdescription"
            variants={paragraphVariants}
          >
            With a powerful respect in the market, Gulf Horizon Telecom Est is
            pleased to partner with world-famous producers to make premier
            products and systems specially made for long-term reliability. Our
            clients believe us as a reliable solution for all projects required,
            from establishment to post-sales guidance.
          </motion.p>
          {/* Reach Section */}
          <MemoizedReach />
          {/* Button Section */}
          <MemoizedCompanyBTn />
        </motion.div>
      </motion.div>
    </div>
  );
};

// Wrap Reach and CompanyBTn components in React.memo to prevent unnecessary re-renders
const MemoizedReach = memo(Reach);
const MemoizedCompanyBTn = memo(CompanyBTn);

export default About;
