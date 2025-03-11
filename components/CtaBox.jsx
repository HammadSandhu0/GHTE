"use client";
import React, { useMemo } from "react";
import { useTranslations } from "next-intl";
import { containerVariants, buttonVariants, motion } from "@/utils/animations";
import { Description, Heading } from "./Headings";
import Button from "./Button";
import Image from "next/image"; // Optimized Image import

const CtaBox = () => {
  const t = useTranslations("CTA");

  // Memoize the text to avoid re-calculating during re-renders
  const translatedText = useMemo(
    () => ({
      title: t("title"),
      description: t("description"),
      freeQuoteBtn: t("free-quote-btn"),
    }),
    [t]
  );

  return (
    <motion.div
      className="bg-primary p-8 sm:p-4 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className="container mx-auto flex flex-row items-center">
        {/* Content Section */}
        <motion.div className="lg:w-1/2 sm:w-2/3 w-full lg:text-left flex flex-col items-start space-y-6">
          <Heading className="!text-white">{translatedText.title}</Heading>
          <Description className="!text-white">
            {translatedText.description}
          </Description>
          <Button
            href="/contact"
            text={translatedText.freeQuoteBtn}
            type="secondary"
            className="w-fit"
          />
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="absolute sm:static w-40 right-0 bottom-0 lg:w-1/2 sm:w-2/6 mt-8 lg:mt-0 sm:flex justify-end"
          variants={buttonVariants}
        >
          <Image
            src="/manphone.png"
            alt="Man with Phone"
            className="lg:max-w-full h-auto sm:full sm:h-auto"
            width={500} // Set an explicit width for image
            height={500} // Set an explicit height for image
            priority // Consider adding priority if the image is above the fold
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CtaBox;
