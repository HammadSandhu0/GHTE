"use client";
import React from "react";
import CompanyBTn from "./CustomButtonGroup";
import { useTranslations } from "next-intl";
import {
  containerVariants,
  motion,
  headingVariants,
  buttonVariants,
} from "@/utils/animations";
import { Description, Header, Heading, SubHeading } from "./Headings";

const CompanyHistory = () => {
  const t = useTranslations("CompanyHistory");
  return (
    <motion.div
      className="container mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Content Section */}
        <div>
          <Header className="text-start">
            <SubHeading>{t("title")}</SubHeading>
            <Heading className="!text-primary">{t("maintitle")}</Heading>
            <Description>{t("description")}</Description>
            <Description>{t("description2")}</Description>
            <Description>{t("description3")}</Description>
          </Header>

          {/* Buttons & Support */}
          <motion.div
            className="flex flex-wrap items-center gap-6"
            variants={buttonVariants}
          >
            <CompanyBTn />
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div className="relative" variants={containerVariants}>
          <div className="relative overflow-hidden rounded-3xl shadow-lg">
            <motion.img
              src="/about3.png"
              alt="Company History"
              className="w-full h-auto object-cover rounded-3xl"
              variants={headingVariants}
            />
          </div>

          {/* Experience Box */}
          <div className="absolute bottom-0 left-0 bg-primary text-white px-6 py-4 rounded-tr-lg rounded-bl-3xl">
            <h3 className="text-3xl lg:text-5xl font-bold">
              <span className="counter">{t("years")}</span>+
            </h3>
            <p className="text-base md:text-lg">{t("yearofexperience")}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CompanyHistory;
