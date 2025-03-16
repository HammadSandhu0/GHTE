"use client";
import React, { memo } from "react";
import "tailwindcss/tailwind.css";
import { useTranslations } from "next-intl";
import { containerVariants, motion, useInView } from "@/utils/animations";
import { Description, Header, Heading } from "./Headings";
import Image from "next/image";
import FeaturedLink from "./FeaturedLinks";

const VendorSlider = memo(() => {
  const t = useTranslations("Vendor");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <VendorSliderContent inViewRef={ref} isInView={inView} translations={t} />
  );
});

const VendorSliderContent = memo(({ inViewRef, isInView, translations: t }) => {
  return (
    <motion.section
      className="py-20"
      ref={inViewRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <VendorHeader translations={t} />
        <VendorLogoSlider />
        <FeaturedLink />
      </div>
    </motion.section>
  );
});

const VendorHeader = memo(({ translations: t }) => (
  <Header>
    <Heading className="!text-primary">{t("title")}</Heading>
    <Description>{t("description")}</Description>
  </Header>
));

const VendorLogoSlider = memo(() => {
  // Create two sets of logos to create the infinite scroll effect
  return (
    <div className="relative mt-20 overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 z-10 w-16 h-full bg-gradient-to-r from-white to-transparent"></div>
      <div className="absolute top-0 right-0 z-10 w-16 h-full bg-gradient-to-l from-white to-transparent"></div>
      <div className="flex">
        <div className="flex logoSlider">
          <VendorLogos />
        </div>
        <div className="flex logoSlider">
          <VendorLogos />
        </div>
      </div>

      <style jsx>{`
        .logoSlider {
          animation: scrollLogos 30s linear infinite;
          will-change: transform;
        }

        @keyframes scrollLogos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
});

const VendorLogos = memo(() => (
  <>
    {Array(7)
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
            width={192}
            height={96}
            className="object-contain max-h-full"
            priority={index < 4}
          />
        </motion.div>
      ))}
  </>
));

// Add display names for better debugging
VendorSlider.displayName = "VendorSlider";
VendorSliderContent.displayName = "VendorSliderContent";
VendorHeader.displayName = "VendorHeader";
VendorLogoSlider.displayName = "VendorLogoSlider";
VendorLogos.displayName = "VendorLogos";

export default VendorSlider;
