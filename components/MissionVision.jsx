"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { containerVariants, motion, cardAnimation } from "@/utils/animations";
import Image from "next/image"; // Using Next.js Image for optimization
import { Description, Heading, SubHeading } from "./Headings";

const MissionVision = () => {
  const t = useTranslations("Mission-vision-value");

  // Array of card data to avoid repetition
  const cards = [
    {
      key: "mission",
      icon: "/icon-our-mission.svg",
      alt: "Our Mission Icon",
      titleKey: "mission-title",
      descriptionKey: "mission-description",
    },
    {
      key: "vision",
      icon: "/icon-our-vision.svg",
      alt: "Our Vision Icon",
      titleKey: "vision-title",
      descriptionKey: "vision-description",
    },
    {
      key: "values",
      icon: "/icon-our-values.svg",
      alt: "Our Values Icon",
      titleKey: "values-title",
      descriptionKey: "values-description",
    },
  ];

  // Reusable card component
  const CardItem = ({ icon, alt, titleKey, descriptionKey }) => (
    <motion.div
      className="bg-white px-8 rounded-3xl shadow-lg flex flex-col items-start border border-textcolor/50 py-16"
      variants={cardAnimation}
    >
      <div className="mb-4 flex justify-start w-full">
        <Image
          src={icon}
          alt={alt}
          width={64}
          height={64}
          className="w-16 h-16"
        />
      </div>
      <Heading className="!text-primary !text-2xl md:!text-3xl mb-4 !font-semibold">
        {t(titleKey)}
      </Heading>
      <Description>{t(descriptionKey)}</Description>
    </motion.div>
  );

  return (
    <motion.section
      className="py-20 md:py-32 lg:py-44"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {cards.map((card) => (
            <CardItem
              key={card.key}
              icon={card.icon}
              alt={card.alt}
              titleKey={card.titleKey}
              descriptionKey={card.descriptionKey}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MissionVision;
