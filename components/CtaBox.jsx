"use client";
import React, { useMemo, memo } from "react";
import { useTranslations } from "next-intl";
import {
  containerVariants,
  buttonVariants,
  motion,
  useInView,
} from "@/utils/animations";
import { Description, Heading } from "./Headings";
import Button from "./Button";
import Image from "next/image";

const CtaBox = memo(() => {
  const t = useTranslations("CTA");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const translatedText = useMemo(
    () => ({
      title: t("title"),
      description: t("description"),
      freeQuoteBtn: t("free-quote-btn"),
    }),
    [t]
  );

  return (
    <CtaBoxContent
      inViewRef={ref}
      isInView={inView}
      translatedText={translatedText}
    />
  );
});

const CtaBoxContent = memo(({ inViewRef, isInView, translatedText }) => {
  return (
    <motion.div
      className="bg-primary p-8 sm:p-4 relative"
      ref={inViewRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className="container mx-auto flex flex-row items-center px-4">
        <CtaTextSection translatedText={translatedText} />
        <CtaImageSection />
      </motion.div>
    </motion.div>
  );
});

const CtaTextSection = memo(({ translatedText }) => (
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
));

const CtaImageSection = memo(() => (
  <motion.div
    className="absolute sm:static w-40 right-0 bottom-0 lg:w-1/2 sm:w-2/6 mt-8 lg:mt-0 sm:flex justify-end"
    variants={buttonVariants}
  >
    <Image
      src="/main/manphone.webp"
      alt="Man with Phone"
      className="lg:max-w-full h-auto sm:full sm:h-auto"
      width={500}
      height={500}
      priority
    />
  </motion.div>
));

// Add display names for better debugging
CtaBox.displayName = "CtaBox";
CtaBoxContent.displayName = "CtaBoxContent";
CtaTextSection.displayName = "CtaTextSection";
CtaImageSection.displayName = "CtaImageSection";

export default CtaBox;
