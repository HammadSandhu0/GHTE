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
import { ArrownRightIcon } from "./Icons";

const FeatureCard = memo(({ title, link }) => (
  <div className="p-2 w-full">
    <div className="bg-light hover:bg-light/75 transition-all rounded flex p-2 h-full items-center cursor-pointer">
    <ArrownRightIcon/>
      <Link href={link} className="text-textcolor">
        {title}
      </Link>
    </div>
  </div>
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
    <section className="">
      <div className="space-y-4 lg:space-y-6">
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
