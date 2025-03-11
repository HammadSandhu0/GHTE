"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  containerVariants,
  headingVariants,
  motion,
  useInView,
} from "@/utils/animations";
import {
  CardHeading,
  Description,
  Header,
  Heading,
  SubHeading,
} from "./Headings";

const CountCard = ({ icon, heading, text, count, unit, subtext }) => (
  <motion.div
    className="relative group border rounded-[50px] shadow-lg p-7 py-10 flex flex-col items-start justify-between overflow-hidden"
    variants={headingVariants}
  >
    <div className="relative z-10 pb-6 mb-6">
      <Image
        src={icon}
        alt={heading}
        width={50}
        height={50}
        loading="lazy"
        quality={75}
      />
      <CardHeading>{heading}</CardHeading>
      <Description>{text}</Description>
    </div>
    <div className="relative z-10 text-start border-t py-5 w-full">
      <Heading className="!text-primary">
        {count}
        {unit}
      </Heading>
      <Description>{subtext}</Description>
    </div>
  </motion.div>
);

const WhyChooseUs = ({ whychooseus }) => {
  const t = useTranslations("Mainwhychoose");
  const [counts, setCounts] = useState([0, 0, 0]);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const animationDuration = 2000;
  const frameRate = 16;

  useEffect(() => {
    if (!inView) return;

    const values = [1000, 500, 99];

    values.forEach((endValue, index) => {
      let start = 0;
      const increment = Math.ceil(endValue / (animationDuration / frameRate));

      const interval = setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(prev[index] + increment, endValue);
          return newCounts;
        });

        if (start >= endValue) clearInterval(interval);
        start += increment;
      }, frameRate);
    });
  }, [inView]);

  return (
    <motion.div
      id="why-choose-us"
      className="py-16"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-2 md:px-4 lg:px-8 space-y-8 flex flex-col items-center justify-center ">
        <Header>
          <SubHeading>{t("title")}</SubHeading>
          <Heading className="!text-primary">{t("subtitle")}</Heading>
          <Description className="!text-textcolor">
            {t("description")}
          </Description>
        </Header>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {whychooseus.map((item, index) => (
            <CountCard
              key={index}
              icon={`/icon-why-choose-${index + 1}.svg`}
              heading={item.heading}
              text={item.description}
              count={counts[index]}
              unit={index === 2 ? "%" : "+"}
              subtext={t(
                index === 0
                  ? "numberOfProjectsTitle"
                  : index === 1
                  ? "happy_ClientsTitle"
                  : "client_SatisfactionTitle"
              )}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;
