"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
  },
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2, // Small delay between child animations
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 5, ease: [0.25, 0.8, 0.25, 1] },
  },
};
const Portfolio = () => {
  const t = useTranslations("Services");
  const services = [
    {
      category: t("categories.power"),
      items: [
        {
          title: t("services.ups_system.title"),
          description: t("services.ups_system.description"),
          image: "/ups.png",
          link: "/ups-saudi-arabia",
        },
        {
          title: t("services.load_bank.title"),
          description: t("services.load_bank.description"),
          image: "/loadbank.png",
          link: "/load-bank-rental-saudi-arabia",
        },
        {
          title: t("services.Battery_Solutions.title"),
          description: t("services.Battery_Solutions.description"),
          image: "/batteries.png",
          link: "/battery-solutions-saudi-arabia",
        },
        {
          title: t("services.AVR.title"),
          description: t("services.AVR.description"),
          image: "/avr.png",
          link: "/automatic-voltage-regulator-services-Saudi-Arabia",
        },
        {
          title: t("services.Generator.title"),
          description: t("services.Generator.description"),
          image: "/genraters.png",
          link: "/generators-saudi-arabia",
        },
      ],
    },
    {
      category: t("categories.security"),
      items: [
        {
          title: t("services.CCTV.title"),
          description: t("services.CCTV.description"),
          image: "/cctv.png",
          link: "/cctv-systems-services",
        },
        {
          title: t("services.Access_Control.title"),
          description: t("services.Access_Control.description"),
          image: "/accesscontroll.png",
          link: "/access-control-systems-in-saudi-arabia",
        },
        {
          title: t("services.Fire_Fighting.title"),
          description: t("services.Fire_Fighting.description"),
          image: "/fire.png",
          link: "/fire-fighting-systems-solution-in-saudi-arabia",
        },
        {
          title: t("services.Sound_System.title"),
          description: t("services.Sound_System.description"),
          image: "/sound.png",
          link: "/sound-system-services-in-saudi-arabia",
        },
        {
          title: t("services.Cyber_Security.title"),
          description: t("services.Cyber_Security.description"),
          image: "/cybersecurity.png",
          link: "/cyber-security-services-in-saudi-arabia",
        },
      ],
    },
    {
      category: t("categories.it"),
      items: [
        {
          title: t("services.Server_Computer.title"),
          description: t("services.Server_Computer.description"),
          image: "/server.png",
          link: "/server-and-computer-solution-in-saudia-arabia",
        },
        {
          title: t("services.Networking_Switches.title"),
          description: t("services.Networking_Switches.description"),
          image: "/networking.png",
          link: "/",
        },
        {
          title: t("services.Racks_Power.title"),
          description: t("services.Racks_Power.description"),
          image: "/racks.png",
          link: "/racks-and-power-distribution-units-in-saudi-arabia",
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(
    `${t("categories.all")}` || "All"
  );

  const filteredServices =
    selectedCategory == `${t("categories.all")}`
      ? services.flatMap((service) => service.items)
      : services.find((service) => service.category === selectedCategory)
          ?.items || [];

  return (
    <div className="py-16 bg-light">
      <motion.div
        className="container mx-auto px-4 sm:px-2 md:px-4 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Heading Section */}
        <div className="text-center mb-12">
          <motion.h3
            className="text-secondary sm:text-lg md:text-xl font-semibold mb-2"
            variants={headingVariants}
          >
            {t("heading")}
          </motion.h3>
          <motion.h2
            className="text-3xl sm:text-3xl px-4 md:text-4xl lg:text-5xl font-bold my-4 text-primary"
            variants={headingVariants}
          >
            {t("subheading")}
          </motion.h2>
          <motion.p
            className="lg:w-2/3 mx-auto text-textcolor text-lg lg:text-xl mt-4"
            variants={paragraphVariants}
          >
            {t("description")}
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap justify-center">
          <ul className="flex space-x-4">
            <li
              className={`px-4 py-2 rounded cursor-pointer ${
                selectedCategory == `${t("categories.all")}`
                  ? "bg-secondary text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setSelectedCategory(`${t("categories.all")}`)}
            >
              {t("categories.all")}
            </li>
            {services.map((service, index) => (
              <li
                key={index}
                className={`px-4 py-2 rounded cursor-pointer ${
                  selectedCategory === service.category
                    ? "bg-secondary text-white"
                    : "bg-gray-200 text-textcolor font-semibold"
                }`}
                onClick={() => setSelectedCategory(service.category)}
              >
                {service.category}
              </li>
            ))}
          </ul>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-3">
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden mx-auto max-w-sm text-center group"
              variants={cardVariants}
            >
              <div className="overflow-hidden rounded-3xl relative">
                <a href={service.link} className="block relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full rounded-2xl aspect-[1/1.2] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/70 rounded-lg"></div>
                </a>
              </div>
              <div className="absolute bottom-10 left-6 right-6 bg-opacity-0 text-left transform translate-y-full group-hover:translate-y-0 group-hover:bg-opacity-100 transition-all duration-500">
                <h3 className="text-xl font-bold text-white capitalize mb-6">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg text-white mb-4 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="absolute text-secondary font-semibold capitalize text-lg hover:text-white flex items-center justify-start -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                >
                  {t("view_more_btn")}
                  <img
                    src="/arrow.svg"
                    alt="svg"
                    className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-2"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
