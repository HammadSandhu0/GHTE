"use client";
import React, { memo } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  containerVariants,
  motion,
  headingVariants,
  useInView,
} from "@/utils/animations";
import { Header, Heading } from "./Headings";
import { getFeaturedLinks } from "@/data/featuredLinksData";

const FeatureCard = memo(({ title, link }) => (
  <motion.div className="p-2 w-full" variants={headingVariants}>
    <div className="bg-light hover:bg-light/50 transition-all rounded flex p-4 h-full items-center cursor-pointer">
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        className="text-primary w-6 h-6 flex-shrink-0 mr-4"
        viewBox="0 0 24 24"
      >
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        <path d="M22 4L12 14.01l-3-3"></path>
      </svg>
      <Link href={link} className="title-font font-medium">
        {title}
      </Link>
    </div>
  </motion.div>
));

const FeaturedLink = () => {
  const t = useTranslations("Services");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <FeaturedLinkContent inViewRef={ref} isInView={inView} translations={t} />
  );
};

const FeaturedLinkContent = memo(({ inViewRef, isInView, translations: t }) => {
  // Get featured links from the external data file
  const features = getFeaturedLinks(t);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 mt-32">
        <Header>
          <Heading className="!text-primary">{t("heading")}</Heading>
        </Header>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full justify-items-center"
          ref={inViewRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              link={feature.link}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
});

// Add display names for better debugging
FeatureCard.displayName = "FeatureCard";
FeaturedLinkContent.displayName = "FeaturedLinkContent";
FeaturedLink.displayName = "FeaturedLink";

export default FeaturedLink;
