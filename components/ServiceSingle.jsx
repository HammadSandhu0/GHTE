"use client";
import Link from "next/link";
import React, { useState, useEffect, memo } from "react";
import { motion, slideVariants } from "@/utils/animations";
import {
  CardHeading,
  Description,
  Header,
  Heading,
  SubHeading,
} from "./Headings";

const ServiceSingle = memo(({ Sidebarcategories = [], mainPageContent }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-4">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SidebarSection categories={Sidebarcategories} />
          </div>
          <MainContentSection content={mainPageContent} />
        </div>
      </div>
    </section>
  );
});

const SidebarSection = memo(({ categories }) => (
  <div className="space-y-8 lg:w-[90%] mx-auto">
    <CategoriesList heading={categories.heading} details={categories.details} />
    <SidebarCTA />
  </div>
));

const CategoriesList = memo(({ heading, details }) => (
  <div className="border-2 rounded-3xl py-8 px-4">
    <CardHeading className="!text-primary !font-semibold">
      {heading}
    </CardHeading>
    <ul className="space-y-4">
      {details.map((category, index) => (
        <li key={index} className="flex items-center border-b">
          <img src="/icons/readmore-arrow.svg" alt="svg" className="mr-2" />
          <Link
            href={category.link}
            className="text-primary flex items-center text-lg font-normal py-4 hover:text-secondary transition-all"
          >
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
));

const SidebarCTA = memo(() => (
  <div className="bg-primary text-white rounded-3xl p-4 py-8 lg:px-6 lg:py-16 text-center">
    <Header>
      <CardHeading className="text-white">
        You Still have a Question
      </CardHeading>
      <Description className="text-white">
        If you cannot find an answer to your question in our FAQ, you can always
        contact us
      </Description>
    </Header>
    <div className="space-y-4 flex flex-col items-center justify-center">
      <div className="flex items-center bg-white text-primary rounded-full px-4 py-2">
        <span className="bg-secondary p-2 rounded-full flex items-center justify-center mr-2">
          <img
            src="/icons/icon-white-mail.svg"
            alt="icon-white"
            className="h-4 w-4"
          />
        </span>
        <button className="hover:text-accent transition">
          Info@gulfhorizontele.com
        </button>
      </div>
      <div className="flex items-center bg-white text-primary rounded-full px-4 py-2">
        <span className="bg-secondary p-2 rounded-full flex items-center justify-center mr-2">
          <img
            src="/icons/icon-white-phone.svg"
            alt="icon-white"
            className="h-4 w-4"
          />
        </span>
        <button className="hover:text-accent transition">
          +966 122 873 071
        </button>
      </div>
    </div>
  </div>
));

const MainContentSection = memo(({ content }) => (
  <div className="col-span-2 space-y-8">
    <EnhancedImageSlider images={content.images} />
    <ServiceContent content={content} />
  </div>
));

const EnhancedImageSlider = memo(({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden rounded-3xl shadow-lg">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="absolute w-full h-full object-cover"
          custom={direction}
          variants={slideVariants}
          initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
        />
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? "right" : "left");
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
      <motion.button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-3 rounded-full z-10 flex items-center justify-center"
        onClick={prevSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 19L8 12L15 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
      <motion.button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-3 rounded-full z-10 flex items-center justify-center"
        onClick={nextSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 5L16 12L9 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
    </div>
  );
});

const ServiceContent = memo(({ content }) => (
  <div className="space-y-8">
    <Header alignment="left">
      <Heading className="font-semibold !text-primary">
        {content.heading}
      </Heading>
      <Description>{content.description}</Description>
      <CardHeading className="text-primary">
        {content.products.productTitle}
      </CardHeading>
    </Header>
    <div className="space-y-4">
      {content.products.details.map((product, index) => (
        <div key={index}>
          <Header alignment="left">
            <SubHeading className="!text-primary">{product.name}</SubHeading>
            <Description>{product.description}</Description>
          </Header>
        </div>
      ))}
    </div>
  </div>
));

ServiceSingle.displayName = "ServiceSingle";
SidebarSection.displayName = "SidebarSection";
CategoriesList.displayName = "CategoriesList";
SidebarCTA.displayName = "SidebarCTA";
MainContentSection.displayName = "MainContentSection";
EnhancedImageSlider.displayName = "EnhancedImageSlider";
ServiceContent.displayName = "ServiceContent";

export default ServiceSingle;
