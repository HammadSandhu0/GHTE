"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Advantages from "./Advantages";

const ServiceSingle = ({ Sidebarcategories = [], mainPageContent }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === mainPageContent.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mainPageContent.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-4">
          {/* Sidebar */}
          <div className="space-y-8 lg:w-[90%] mx-auto">
            {/* Categories List */}
            <div className="border-2 rounded-3xl py-8 px-4">
              <h3
                className="text-2xl lg:text-3xl mb-6 text-primary font-medium"
                data-translate-key={Sidebarcategories.titleKey}
              >
                {Sidebarcategories.heading}
              </h3>
              <ul className="space-y-4">
                {Sidebarcategories.details.map((category, index) => (
                  <li key={index} className="flex items-center border-b">
                    <img src="/readmore-arrow.svg" alt="svg" className="mr-2" />
                    <Link
                      href={category.link}
                      className="text-primary flex items-center text-xl font-normal  py-4 hover:text-secondary transition-all"
                      data-translate-key={category.titleKey}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar CTA */}
            <div className="bg-primary text-white rounded-3xl p-4 py-8 lg:px-6 lg:py-16 text-center">
              <h3
                className="text-2xl lg:text-3xl font-bold mb-8"
                data-translate-key="sidebar_title"
              >
                You Still have a Question
              </h3>
              <p
                className="mb-6 text-base font-medium lg:text-lg"
                data-translate-key="sidebar_description"
              >
                If you cannot find an answer to your question in our FAQ, you
                can always contact us
              </p>
              <div className="space-y-4 flex flex-col items-center justify-center">
                <div className="flex items-center bg-white text-primary rounded-full px-4 py-2">
                  <span className="bg-secondary p-2 rounded-full flex items-center justify-center mr-2">
                    <img
                      src="/icon-white-mail.svg"
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
                      src="/icon-white-phone.svg"
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
          </div>

          {/* Main Content */}
          <div className="col-span-2 space-y-8">
            {/* Image Slider */}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={mainPageContent.images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 flex justify-between items-center px-4">
                <button
                  onClick={prevSlide}
                  className="p-2 bg-primary text-white rounded-full"
                >
                  &#10094;
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 bg-primary text-white rounded-full"
                >
                  &#10095;
                </button>
              </div>
            </div>

            {/* Service Entry */}
            <div className="space-y-8">
              <h2
                className="text-2xl lg:text-4xl font-bold text-primary"
                data-translate-key={mainPageContent.datatranslatekeytitle}
              >
                {mainPageContent.heading}
              </h2>
              <p
                className="text-textcolor text-base lg:text-lg"
                data-translate-key={mainPageContent.datatranslatekeydescription}
              >
                {mainPageContent.description}
              </p>
              <h3
                className="text-xl lg:text-2xl text-primary font-bold"
                data-translate-key={mainPageContent.products.datatranslatekey}
              >
                {mainPageContent.products.productTitle}
              </h3>
              <div className="space-y-4">
                {mainPageContent.products.details.map((product, index) => (
                  <div key={index}>
                    <h4
                      className="font-medium text-primary text-xl mb-2"
                      data-translate-key={product.titleKey}
                    >
                      {product.name}
                    </h4>
                    <p
                      className="text-textcolor lg:text-lg text-base"
                      data-translate-key={product.descriptionKey}
                    >
                      {product.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* <Advantages /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSingle;
