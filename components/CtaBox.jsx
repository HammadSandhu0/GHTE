"use client";
import React from "react";
import { motion } from "framer-motion";
import SecondaryBtn from "./SecondaryBtn";
import { useTranslations } from "next-intl";

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

const CtaBox = () => {
  const t = useTranslations("CTA");
  return (
    <motion.div
      className="bg-primary  p-8 sm:p-4 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Ensures animation runs once when 20% of the component is in view
      variants={containerVariants}
    >
      <motion.div className="container mx-auto flex flex-row items-center">
        {/* Content Section */}
        <motion.div className="lg:w-1/2 sm:w-2/3 w-full lg:text-left flex flex-col items-start">
          <motion.h2
            className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            variants={headingVariants}
          >
            {t("title")}
          </motion.h2>

          <motion.p
            className="text-white text-lg lg:text-xl my-8"
            variants={paragraphVariants}
          >
            {t("description")}
          </motion.p>

          <motion.div variants={buttonVariants}>
            <SecondaryBtn
              text={t("free-quote-btn")}
              href="/contact"
              className="hover:text-white hover:border-white hover:border border border-secondary"
            />
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="absolute sm:static w-40 right-0 bottom-0 lg:w-1/2 sm:w-2/6 mt-8 lg:mt-0 sm:flex justify-end"
          variants={buttonVariants}
        >
          <img
            src="/manphone.png"
            alt="Man with Phone"
            className="lg:max-w-full h-auto sm:full sm:h-auto"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CtaBox;
