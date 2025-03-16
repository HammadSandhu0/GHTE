"use client";
import React, { memo } from "react";
import CompanyBTn from "./ButtonGroup";
import { useTranslations } from "next-intl";
import {
  containerVariants,
  useInView,
  itemVariants,
  motion,
  headingVariants,
  buttonVariants,
} from "@/utils/animations";
import { Description, Header, Heading, SubHeading } from "./Headings";

const CompanyHistory = memo(() => {
  const t = useTranslations("CompanyHistory");
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return <CompanyHistorySection ref={ref} inView={inView} translations={t} />;
});

const CompanyHistorySection = memo(({ ref, inView, translations: t }) => {
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full py-8 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <CompanyContent
            title={t("title")}
            mainTitle={t("maintitle")}
            description={t("description")}
            description2={t("description2")}
            description3={t("description3")}
          />
          <CompanyImage
            years={t("years")}
            yearOfExperience={t("yearofexperience")}
            variants={containerVariants}
          />
        </div>
      </div>
    </motion.section>
  );
});

const CompanyContent = memo(
  ({ title, mainTitle, description, description2, description3 }) => (
    <div className="order-2 lg:order-1 text-center lg:text-start space-y-3 md:space-y-4 lg:space-y-5 px-4 sm:px-6 md:px-0">
      <Header className="text-start">
        <SubHeading>{title}</SubHeading>
        <Heading className="!text-primary">{mainTitle}</Heading>
        <Description>{description}</Description>
        <Description>{description2}</Description>
      </Header>

      <motion.div
        className="flex flex-wrap items-center gap-6 sm:justify-center lg:justify-start py-2 md:py-4"
        variants={buttonVariants}
      >
        <CompanyBTn />
      </motion.div>
    </div>
  )
);

const CompanyImage = memo(({ years, yearOfExperience, variants }) => (
  <motion.div
    className="w-full order-1 lg:order-2 relative flex justify-center lg:justify-end"
    variants={variants}
  >
    <div className="relative w-full max-w-md lg:max-w-none overflow-hidden rounded-2xl md:rounded-3xl shadow-lg">
      <motion.img
        src="/about3.png"
        alt="Company History"
        className="w-full h-auto object-cover object-center rounded-2xl md:rounded-3xl"
        variants={headingVariants}
        loading="lazy"
      />

      {/* Experience Box */}
      <div className="absolute bottom-0 left-0 bg-primary text-white px-6 py-4 rounded-tr-lg rounded-bl-3xl">
        <h3 className="text-3xl lg:text-5xl font-bold">
          <span className="counter">{years}</span>+
        </h3>
        <p className="text-base md:text-lg">{yearOfExperience}</p>
      </div>
    </div>
  </motion.div>
));

CompanyHistory.displayName = "CompanyHistory";
CompanyHistorySection.displayName = "CompanyHistorySection";
CompanyContent.displayName = "CompanyContent";
CompanyImage.displayName = "CompanyImage";

export default CompanyHistory;
