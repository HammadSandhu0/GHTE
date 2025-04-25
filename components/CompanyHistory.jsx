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
import Image from "next/image";

const CompanyHistory = memo(() => {
  const t = useTranslations("CompanyHistory");
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
ref
  return <CompanyHistorySection  translations={t} />;
});

const CompanyHistorySection = memo(({ ref, inView, translations: t }) => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
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
          />
        </div>
      </div>
    </section>
  );
});

const CompanyContent = memo(
  ({ title, mainTitle, description, description2, description3 }) => (
    <div className="order-2 xl:order-2 flex flex-col items-center xl:items-start justify-center xl:justify-start space-y-4 xl:space-y-6">
      <Header alignment="responsive" spacing="normal">
        <SubHeading>{title}</SubHeading>
        <Heading className="!text-primary">{mainTitle}</Heading>
        <Description>{description}</Description>
        <Description>{description2}</Description>
        <Description>{description3}</Description>
      </Header>

      <div className="flex flex-wrap items-center gap-6 sm:justify-center lg:justify-start py-2 md:py-4">
        <CompanyBTn />
      </div>
    </div>
  )
);

const CompanyImage = memo(({ years, yearOfExperience, variants }) => (
  <div className="order-1 xl:order-2 flex justify-center xl:justify-start relative">
    <div className="relative w-full max-w-md xl:max-w-none overflow-hidden rounded-2xl md:rounded-3xl shadow-lg z-10">
            <Image
              src="/about/about-2.webp"
              alt="About Power Solutions Saudi Arabia - Our team and facilities"
              width={800}
              height={600}
              className="w-full h-auto object-cover object-center rounded-2xl md:rounded-3xl"
              quality={90}
              loading="eager"
              priority
            />

      {/* Experience Box */}
      <div className="absolute bottom-0 left-0 bg-primary text-white px-6 py-4 rounded-tr-lg rounded-bl-3xl">
        <h3 className="text-3xl lg:text-5xl font-bold">
          <span className="counter">{years}</span>+
        </h3>
        <p className="text-base md:text-lg">{yearOfExperience}</p>
      </div>
    </div>
  </div>
));


CompanyHistory.displayName = "CompanyHistory";
CompanyHistorySection.displayName = "CompanyHistorySection";
CompanyContent.displayName = "CompanyContent";
CompanyImage.displayName = "CompanyImage";

export default CompanyHistory;
