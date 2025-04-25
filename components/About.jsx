"use client";
import React, { memo } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Description, Header, Heading, SubHeading } from "./Headings";
import Button, { CalltoActionBtn } from "./Button";
import ButtonGroup from "./ButtonGroup";
import { ArrowCircleIcon } from "./Icons";

const About = memo(() => {
  const t = useTranslations("AboutPage");
  const t2 = useTranslations("CompanyBtn");

  return <AboutSection translations={{ about: t, btn: t2 }} />;
});

export const ReachItem = ({ icon, label }) => {
  return (
    <li className="flex items-start">
      <p className="mr-3">{icon}</p>
      <p className="text-white text-base md:text-lg font-semibold">{label}</p>
    </li>
  );
};

const Reach = () => {
  const t = useTranslations("AboutReach");
  const icon = <ArrowCircleIcon />;
  return (
    <div className="bg-primary py-6 px-5 rounded-xl">
      <ul className="flex flex-col gap-y-4 text-start text-[14px] md:text-[16px] lg:text-[18px] text-light">
        <ReachItem icon={icon} label={t("Respect")} />
        <ReachItem icon={icon} label={t("Ownership")} />
        <ReachItem icon={icon} label={t("Fairness")} />
        <ReachItem icon={icon} label={t("Quality")} />
      </ul>
    </div>
  );
};

const AboutSection = memo(({ ref, inView, translations }) => {
  const { about, btn } = translations;

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <AboutImage />
          <AboutContent
            title={about("title")}
            mainTitle={about("maintitle")}
            description={about("description")}
            btnText={btn("CompanyProfile")}
          />
        </div>
      </div>
    </section>
  );
});

const AboutImage = memo(({ variants }) => (
  <div className="order-1 xl:order-1 flex justify-center xl:justify-start relative">
    {/* <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/40 rounded-lg z-0"></div>
    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/40 rounded-lg z-0"></div> */}
    <div className="relative w-full max-w-md xl:max-w-none overflow-hidden rounded-2xl md:rounded-3xl shadow-lg z-10">
      <Image
        src="/about/about-1.webp"
        alt="About Power Solutions Saudi Arabia - Our team and facilities"
        width={800}
        height={600}
        className="w-full h-auto object-cover object-center rounded-2xl md:rounded-3xl"
        quality={90}
        loading="eager"
        priority
      />
    </div>
  </div>
));

const AboutContent = memo(({ title, mainTitle, description, btnText }) => (
  <div className="order-2 xl:order-2 flex flex-col items-center xl:items-start justify-center xl:justify-start space-y-4 xl:space-y-6">
    <Header alignment="responsive" spacing="tight">
      <SubHeading>{title}</SubHeading>
      <Heading className="!text-primary">{mainTitle}</Heading>
      <Description className="text-lg text-gray-700 w-full mx-auto xl:mx-0">
        {description}
      </Description>
    </Header>
    <Reach />
    <ButtonGroup>
      <Button href="/about" type="primary" size="lg" className="w-fit">
        {btnText}
      </Button>
      <CalltoActionBtn className="w-fit" />
    </ButtonGroup>
  </div>
));

About.displayName = "About";
AboutSection.displayName = "AboutSection";
AboutImage.displayName = "AboutImage";
AboutContent.displayName = "AboutContent";

export default About;
