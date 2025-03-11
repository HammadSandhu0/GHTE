"use client";
import React, { memo } from "react";
import Navbar from "./Navbar";
import { useTranslations } from "next-intl";
import Video from "./Video";
import CustomButtonGroup from "./CustomButtonGroup";
import Button from "./Button";
import { Description, Header, Heading, SubHeading } from "./Headings";
import { containerVariants, motion } from "@/utils/animations";

const Main = memo(() => {
  const t = useTranslations("HomePage");
  return (
    <div className="relative overflow-hidden bg-cover bg-center bg-no-repeat ">
      <Navbar />
      <Video />
      <motion.div
        className="relative mx-auto  py-[100px] px-4 sm:px-10 md:py-[235px] text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <Header>
          <SubHeading>{t("title")}</SubHeading>
          <Heading>{t("maintitle")}</Heading>
          <Description className="!text-white">{t("description")}</Description>
        </Header>

        <CustomButtonGroup>
          <Button href="/contact" text={t("getstarted")} type="primary" />
          <Button
            href="/client-projects"
            text={t("viewprojects")}
            type="transparent"
          />
        </CustomButtonGroup>
      </motion.div>
    </div>
  );
});

export default Main;
