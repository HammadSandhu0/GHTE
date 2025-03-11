"use client";
import React, { memo } from "react";
import "tailwindcss/tailwind.css";
import { useTranslations } from "next-intl";
import { containerVariants, motion } from "@/utils/animations";
import { Description, Header, Heading } from "./Headings";
import Image from "next/image"; // Import next/image for optimized image loading
import FeaturedLink from "./FeaturedLinks";

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
        <Header>
          <Heading className="!text-primary">{t("title")}</Heading>
          <Description>{t("description")}</Description>
        </Header>
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
                  <Image
                    src={`/vendor${(index % 8) + 1}.png`}
                    alt={`Vendor ${(index % 8) + 1}`}
                    width={192} // specify a width
                    height={96} // specify a height
                    className="object-contain max-h-full"
                    priority={index < 4} // prioritize images that appear first for quicker load times
                  />
                </motion.div>
              ))}
          </div>
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent"></div>
        </motion.div>

        <FeaturedLink />
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
          will-change: transform; /* Optimizes for smoother scrolling */
        }
      `}</style>
    </motion.section>
  );
};

// Memoize the VendorSlider to avoid unnecessary re-renders
export default memo(VendorSlider);
