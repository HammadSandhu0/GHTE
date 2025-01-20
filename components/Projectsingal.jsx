"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ServiceSingle = ({
  images = [],
  categories = [],
  contact = { message: "", details: [] },
  products = [],
  features = [],
  name = "",
  description = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Automatically change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 500); // Transition duration
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="col-span-2 space-y-8">
            {/* Image Slider */}
            <div className="space-y-4">
              <div className="relative">
                <div
                  className={`rounded-3xl overflow-hidden transition-opacity duration-500 ease-in-out ${
                    isAnimating ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Service Entry */}
            <div className="space-y-8">
              <h2 className="text-2xl lg:text-4xl font-bold text-primary">
                {name}
              </h2>
              <p className="text-textcolor text-base lg:text-lg">
                {description}
              </p>
              <h3 className="text-xl lg:text-2xl text-primary font-bold">
                Our Products
              </h3>
              <div className="space-y-4">
                {/* Product List */}
                {products.map((product, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-primary text-xl mb-2">
                      {product.name}
                    </h4>
                    <p className="text-textcolor lg:text-lg text-base">
                      {product.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-primary font-semibold text-xl"
                  >
                    <img src="/readmore-arrow.svg" alt="svg" className="mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Sidebar */}
          <div className="space-y-8 lg:w-[90%] mx-auto">
            {/* Categories List */}
            <div className="border-2 rounded-3xl py-8 px-4">
              <h3 className="text-2xl lg:text-3xl mb-6 text-primary font-medium">
                Other Power Products
              </h3>
              <ul className="space-y-4">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      href={category.link}
                      className="text-primary flex items-center text-xl font-normal border-b py-4 hover:text-secondary transition-all"
                    >
                      <img
                        src="/readmore-arrow.svg"
                        alt="svg"
                        className="mr-2"
                      />
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar CTA */}
            <div className="bg-primary text-white rounded-3xl p-4 py-8 lg:px-6 lg:py-16 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-8">
                You still have a question
              </h3>
              <p className="mb-6 text-base font-medium lg:text-lg">
                {contact.message}
              </p>
              <div className="space-y-4 flex flex-col items-center justify-center">
                {contact.details.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white text-primary rounded-full px-4 py-2"
                  >
                    <span className="bg-secondary p-2 rounded-full flex items-center justify-center mr-2">
                      <img
                        src={detail.icon}
                        alt={detail.alt}
                        className="h-4 w-4"
                      />
                    </span>
                    <a
                      href={detail.link}
                      className="hover:text-accent transition"
                    >
                      {detail.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSingle;
