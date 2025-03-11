"use client";
import React, { useState, useMemo, useCallback } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { getServicesData } from "@/data/servicesData";
import {
  containerVariants,
  headingVariants,
  useInView,
  motion,
} from "@/utils/animations";
import { Description, Header, Heading, SubHeading } from "./Headings";

const Services = () => {
  const t = useTranslations("Services");
  const services = useMemo(() => getServicesData(t), [t]); // Fetch data once

  const [selectedCategory, setSelectedCategory] = useState(t("categories.all"));
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Memoized filtered services
  const filteredServices = useMemo(() => {
    if (selectedCategory === t("categories.all")) {
      return services.flatMap((service) => service.items);
    }
    return (
      services.find((service) => service.category === selectedCategory)
        ?.items || []
    );
  }, [selectedCategory, services, t]);

  // Handle category change
  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  return (
    <motion.div
      className="py-16 bg-light"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-2 md:px-4 lg:px-8 space-y-10">
        <Header>
          <SubHeading>{t("heading")}</SubHeading>
          <Heading className="!text-primary">{t("subheading")}</Heading>
          <Description className="!text-textcolor">
            {t("description")}
          </Description>
        </Header>

        <div className="mb-8 flex flex-wrap justify-center">
          <ul className="flex space-x-4">
            {[t("categories.all"), ...services.map((s) => s.category)].map(
              (category, index) => (
                <li
                  key={index}
                  className={`px-4 py-2 rounded cursor-pointer ${
                    selectedCategory === category
                      ? "bg-secondary text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </li>
              )
            )}
          </ul>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-3"
          variants={containerVariants}
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden mx-auto max-w-sm text-center group"
              variants={headingVariants}
            >
              <div className="overflow-hidden rounded-3xl relative">
                <Link href={service.link} className="block relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={400}
                    className="w-full rounded-2xl aspect-[1/1.2] object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={index < 4}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/70 rounded-lg"></div>
                </Link>
              </div>
              <div className="absolute bottom-10 left-6 right-6 text-left transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-xl font-bold text-white capitalize mb-6">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg text-white mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="text-secondary font-semibold capitalize text-lg hover:text-white"
                >
                  {t("view_more_btn")}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
