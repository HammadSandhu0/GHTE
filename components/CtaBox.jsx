"use client";
import React, { useMemo, memo } from "react";
import { useTranslations } from "next-intl";
import { Description, Heading } from "./Headings";
import Button from "./Button";
import Image from "next/image";

const CtaBox = memo(() => {
  const t = useTranslations("CTA");

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
      translatedText={translatedText}
    />
  );
});

const CtaBoxContent = memo(({ inViewRef, isInView, translatedText }) => {
  return (
    <div
      className="bg-primary relative"
    >
      <div className="container mx-auto flex flex-row items-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-0 space-y-4 lg:space-y-6">
        <CtaTextSection translatedText={translatedText} />
        <CtaImageSection />
      </div>
    </div>
  );
});

const CtaTextSection = memo(({ translatedText }) => (
  <div className="lg:w-1/2 sm:w-2/3 w-full lg:text-left flex flex-col items-start space-y-6">
    <Heading className="!text-white">{translatedText.title}</Heading>
    <Description className="!text-white">
      {translatedText.description}
    </Description>
    <Button href="/contact" type="primary" className="w-fit">
      {translatedText.freeQuoteBtn}
    </Button>
  </div>
));

const CtaImageSection = memo(() => (
  <div
    className="absolute sm:static w-40 right-0 bottom-0 lg:w-1/2 sm:w-2/6 mt-8 lg:mt-0 sm:flex justify-end"
  >
    <Image
      src="/main/manphone.webp"
      alt="Man with Phone"
      className="lg:max-w-full h-auto sm:full sm:h-auto"
      width={500}
      height={500}
      priority
    />
  </div>
));

// Add display names for better debugging
CtaBox.displayName = "CtaBox";
CtaBoxContent.displayName = "CtaBoxContent";
CtaTextSection.displayName = "CtaTextSection";
CtaImageSection.displayName = "CtaImageSection";

export default CtaBox;
