"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Description, Heading } from "./Headings";
import { MissionIcon, ValuesIcon, VisionIcon } from "./Icons";

const MissionVision = () => {
  const t = useTranslations("Mission-vision-value");

  // Array of card data to avoid repetition
  const cards = [
    {
      key: "mission",
      icon: <MissionIcon />,
      alt: "Our Mission Icon",
      titleKey: "mission-title",
      descriptionKey: "mission-description",
    },
    {
      key: "vision",
      icon: <VisionIcon />,
      alt: "Our Vision Icon",
      titleKey: "vision-title",
      descriptionKey: "vision-description",
    },
    {
      key: "values",
      icon: <ValuesIcon />,
      alt: "Our Values Icon",
      titleKey: "values-title",
      descriptionKey: "values-description",
    },
  ];

  // Reusable card component
  const CardItem = ({ icon, alt, titleKey, descriptionKey }) => (
    <div className="bg-white p-8 rounded-3xl shadow-lg flex flex-col items-start border border-textcolor/50">
      <div className="mb-4 flex justify-start w-full" aria-label={alt}>
        {icon}
      </div>
      <Heading className="!text-primary !text-2xl md:!text-3xl mb-4 !font-semibold">
        {t(titleKey)}
      </Heading>
      <Description>{t(descriptionKey)}</Description>
    </div>
  );

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-center">
          {cards.map((card) => (
            <CardItem
              key={card.key}
              icon={card.icon}
              alt={card.alt}
              titleKey={card.titleKey}
              descriptionKey={card.descriptionKey}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
