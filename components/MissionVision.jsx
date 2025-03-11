"use client";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import {
  containerVariants,
  motion,
  headingVariants,
  paragraphVariants,
  cardAnimation,
} from "@/utils/animations";

// Animation varian
const MissionVision = () => {
  const t = useTranslations("Mission-vision-value");

  return (
    <motion.section
      className="py-44"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
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
              {t("mission-title")}
            </motion.h3>
            <motion.p
              className="text-textcolor text-base font-medium md:text-lg"
              variants={paragraphVariants}
            >
              {t("mission-description")}
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
              {t("vision-title")}
            </motion.h3>
            <motion.p
              className="text-textcolor text-base font-medium md:text-lg"
              variants={paragraphVariants}
            >
              {t("vision-description")}
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
              {t("values-title")}
            </motion.h3>
            <motion.p
              className="text-textcolor text-base font-medium md:text-lg"
              variants={paragraphVariants}
            >
              {t("values-description")}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MissionVision;
