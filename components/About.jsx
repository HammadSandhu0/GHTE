import React, { memo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import CompanyBTn from "./CompanyBTn";
import Reach from "./Reach";
import { useTranslations } from "next-intl";
import {
  containerVariants,
  headingVariants,
  imageVariants,
  paragraphVariants,
} from "@/utils/animations";

const About = memo(() => {
  const t = useTranslations("AboutPage");
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

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
        >
          <Image
            src="/about.png"
            alt="Illustration about Gulf Horizon Telecom Est."
            width={800}
            height={600}
            className="w-full rounded-3xl xl:w-[80%]"
            quality={90}
            loading="lazy"
            placeholder="blur"
            blurDataURL="/about-placeholder.png" // Placeholder image for better UX
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="text-center lg:text-start space-y-3"
          variants={containerVariants}
        >
          <motion.h3
            className="text-secondary text-lg md:text-xl font-semibold"
            variants={headingVariants}
          >
            {t("title")}
          </motion.h3>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary"
            variants={headingVariants}
          >
            {t("maintitle")}
          </motion.h2>
          <motion.p
            className="text-lg lg:text-xl text-textcolor"
            variants={paragraphVariants}
          >
            {t("description")}
          </motion.p>
          <MemoizedReach />
          <MemoizedCompanyBTn />
        </motion.div>
      </motion.div>
    </div>
  );
});

// Memoized components to prevent unnecessary re-renders
const MemoizedReach = memo(Reach);
const MemoizedCompanyBTn = memo(CompanyBTn);

export default About;
