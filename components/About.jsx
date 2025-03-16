"use client";
import React, { memo } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  containerVariants,
  useInView,
  itemVariants,
  motion,
} from "@/utils/animations";
import { Description, Heading, SubHeading } from "./Headings";
import Button, { CalltoActionBtn } from "./Button";
import ButtonGroup from "./ButtonGroup";

const About = memo(() => {
  const t = useTranslations("AboutPage");
  const t2 = useTranslations("CompanyBtn");
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <AboutSection
      ref={ref}
      inView={inView}
      translations={{ about: t, btn: t2 }}
    />
  );
});
const ReachItem = ({ icon, label }) => {
  return (
    <motion.li className="flex items-start" variants={itemVariants}>
      <p className="mr-3">{icon}</p>
      <p className="text-white text-base md:text-lg font-semibold">{label}</p>
    </motion.li>
  );
};
const Reach = () => {
  const t = useTranslations("AboutReach");
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 1186"
      className="w-6 h-6 md:w-7 md:h-7"
      fill="#ffb703"
    >
      <g transform="translate(0,1186) scale(0.1,-0.1)" stroke="none">
        <path
          d="M12530 11806 c-30 -18 -145 -86 -255 -151 -1135 -671 -2368 -1603 
            -3585 -2709 -647 -589 -1403 -1342 -2030 -2021 -1085 -1176 -2180 -2523 -3113 
            -3829 l-48 -67 -32 19 c-18 11 -758 430 -1646 932 -1309 739 -1616 909 -1626 
            898 -62 -68 -156 -191 -153 -200 2 -6 908 -1061 2014 -2344 l2009 -2333 75 0 
            76 -1 153 308 c1743 3506 3579 6261 5840 8767 660 731 1624 1701 2381 2394 85 
            78 154 148 154 156 -2 15 -145 214 -154 214 -3 0 -30 -14 -60 -33z"
        />
      </g>
    </svg>
  );

  return (
    <motion.div
      className="bg-primary py-6 px-5 rounded-xl"
      variants={containerVariants}
    >
      <ul className="flex flex-col gap-y-4 text-start text-[14px] md:text-[16px] lg:text-[18px] text-light">
        <ReachItem icon={icon} label={t("Respect")} />
        <ReachItem icon={icon} label={t("Ownership")} />
        <ReachItem icon={icon} label={t("Fairness")} />
        <ReachItem icon={icon} label={t("Quality")} />
      </ul>
    </motion.div>
  );
};
const AboutSection = memo(({ ref, inView, translations }) => {
  const { about, btn } = translations;

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full py-8 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-8 md:space-y-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <AboutImage variants={containerVariants} />
          <AboutContent
            title={about("title")}
            mainTitle={about("maintitle")}
            description={about("description")}
            btnText={btn("CompanyProfile")}
          />
        </div>
      </div>
    </motion.section>
  );
});
const AboutImage = memo(({ variants }) => (
  <motion.div
    className="w-full order-1 xl:order-1 flex justify-center xl:justify-start"
    variants={variants}
  >
    <div className="relative w-full max-w-md xl:max-w-none overflow-hidden rounded-2xl md:rounded-3xl shadow-md">
      <Image
        src="/about/about-1.webp"
        alt="Illustration about Gulf Horizon Telecom Est."
        width={800}
        height={600}
        className="w-full h-auto object-cover object-center rounded-2xl md:rounded-3xl"
        quality={90}
        loading="lazy"
        placeholder="blur"
        blurDataURL="/about/about-1.webp"
      />
    </div>
  </motion.div>
));
const AboutContent = memo(({ title, mainTitle, description, btnText }) => (
  <div className="order-2 xl:order-2 text-center xl:text-start space-y-3 md:space-y-4 lg:space-y-5 px-4 sm:px-6 md:px-0">
    <SubHeading>{title}</SubHeading>
    <Heading className="!text-primary">{mainTitle}</Heading>
    <Description className="text-base sm:text-lg md:text-xl w-full mx-auto xl:mx-0">
      {description}
    </Description>
    <div className="py-2 md:py-4">
      <Reach />
    </div>
    <ButtonGroup className="sm:justify-center xl:justify-start">
      <Button href="/contact" text={btnText} type="secondary" />
      <CalltoActionBtn className="w-fit mx-auto" />
    </ButtonGroup>
  </div>
));
About.displayName = "About";
AboutSection.displayName = "AboutSection";
AboutImage.displayName = "AboutImage";
AboutContent.displayName = "AboutContent";

export default About;
