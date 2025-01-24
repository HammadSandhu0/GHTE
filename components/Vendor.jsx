"use client";
import React from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";
import { useTranslations } from "next-intl";

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

const VendorSlider = () => {
  const t = useTranslations("Vendor");
  return (
    <motion.section
      className="py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        {/* Title and Description */}
        <motion.div className="text-center mb-8" variants={containerVariants}>
          <motion.h2
            className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8"
            data-translate-key="section_title_vendor"
            variants={headingVariants}
          >
            {t("title")}
          </motion.h2>
          <motion.p
            className="text-textcolor mt-6 md:w-1/2 mx-auto w-full text-lg lg:text-xl"
            data-translate-key="section_description_vendor"
            variants={paragraphVariants}
          >
            {t("description")}
          </motion.p>
        </motion.div>

        {/* Slider */}
        <motion.div
          className="overflow-hidden relative mt-20"
          variants={containerVariants}
        >
          <div className="flex animate-scroll whitespace-nowrap">
            {Array(14)
              .fill(null)
              .map((_, index) => (
                <motion.div
                  key={index}
                  className="flex-none w-48 h-24 mx-4 rounded-md flex items-center justify-center"
                  variants={containerVariants}
                >
                  <img
                    src={`/vendor${(index % 8) + 1}.png`}
                    alt={`Vendor ${(index % 8) + 1}`}
                    className="object-contain max-h-full"
                  />
                </motion.div>
              ))}
          </div>
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent"></div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-12rem * 7));
          }
        }

        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </motion.section>
  );
};

export default VendorSlider;
