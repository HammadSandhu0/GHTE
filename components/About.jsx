"use client";
import React, { memo } from "react";
import Image from "next/image";
import Reach from "./Reach";
import { useTranslations } from "next-intl";
import { containerVariants, useInView, motion } from "@/utils/animations";
import { Description, Heading, SubHeading } from "./Headings";
import CustomButtonGroup from "./CustomButtonGroup";
import Button, { CalltoActionBtn } from "./Button";

const About = memo(() => {
  const t = useTranslations("AboutPage");
  const t2 = useTranslations("CompanyBtn");
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="container mx-auto py-16 lg:py-32 px-4 sm:px-0"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <motion.div
          className="w-full flex justify-center lg:justify-start"
          variants={containerVariants}
        >
          <Image
            src="/about.png"
            alt="Illustration about Gulf Horizon Telecom Est."
            width={800}
            height={600}
            className="w-full rounded-3xl xl:w-[80%]"
            quality={90}
            loading="lazy"
            placeholder="blur"
            blurDataURL="/about.png"
          />
        </motion.div>

        {/* Text Content Section */}
        <div className="text-center lg:text-start space-y-3">
          <SubHeading>{t("title")}</SubHeading>
          <Heading className="!text-primary">{t("maintitle")}</Heading>
          <Description>{t("description")}</Description>
          <Reach />
          <CustomButtonGroup className="lg:justify-start">
            <Button
              href="/contact"
              text={t2("CompanyProfile")}
              type="secondary"
            />
            <CalltoActionBtn />
          </CustomButtonGroup>
        </div>
      </div>
    </motion.div>
  );
});

export default About;
