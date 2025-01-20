"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const cardAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const MissionVision = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Animation triggers when 10% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      className="py-44"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {/* Mission */}
          <motion.div
            className="bg-white px-8 rounded-3xl shadow-lg flex flex-col items-start border border-textcolor/50 py-16"
            variants={cardAnimation}
          >
            <div className="mb-4 flex justify-center">
              <img
                src="/icon-our-mission.svg"
                alt="Our Mission Icon"
                className="w-16 h-16"
              />
            </div>
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-primary mb-4"
              variants={headingVariants}
            >
              Our Mission
            </motion.h3>
            <motion.p
              className="text-textcolor text-base font-medium md:text-lg"
              variants={paragraphVariants}
            >
              Our goal is to become Saudi Arabia's leading and most preferred
              provider of engineering solutions and services, delivering
              excellence and innovation across all projects.
            </motion.p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="bg-white px-8 rounded-3xl shadow-lg flex flex-col items-start border border-textcolor/50 py-16"
            variants={cardAnimation}
          >
            <div className="mb-4 flex justify-center">
              <img
                src="/icon-our-vision.svg"
                alt="Our Vision Icon"
                className="w-16 h-16"
              />
            </div>
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-primary mb-4"
              variants={headingVariants}
            >
              Our Vision
            </motion.h3>
            <motion.p
              className="text-textcolor text-base font-medium md:text-lg"
              variants={paragraphVariants}
            >
              We provide quality products, empower employees, ensure shareholder
              returns, uphold ethical standards, and actively contribute to the
              socio-economic development of our country.
            </motion.p>
          </motion.div>

          {/* Values */}
          <motion.div
            className="bg-white px-8 rounded-3xl shadow-lg flex flex-col items-start border border-textcolor/50 py-16"
            variants={cardAnimation}
          >
            <div className="mb-4 flex justify-center">
              <img
                src="/icon-our-values.svg"
                alt="Our Values Icon"
                className="w-16 h-16"
              />
            </div>
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-primary mb-4"
              variants={headingVariants}
            >
              Our Values
            </motion.h3>
            <motion.p
              className="text-textcolor text-base font-medium md:text-lg"
              variants={paragraphVariants}
            >
              Our core values shape our culture, emphasizing fairness,
              diversity, respect, quality, long-term commitment, and meaningful
              results. These principles define our organizational identity.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MissionVision;
