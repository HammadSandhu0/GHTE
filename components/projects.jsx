"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("AllProjects");
  const projects = [
    {
      category: t("categories.power"),
      items: [
        {
          title: t("projects.Saudia_Technic.title"),
          description: t("projects.Saudia_Technic.description"),
          image: "/saudiatechnic.png",
          link: "#",
        },
        {
          title: t("projects.Royal_Commission_of_AlUla.title"),
          description: t("projects.Royal_Commission_of_AlUla.description"),
          image: "/AlUla.png",
          link: "#",
        },
        {
          title: t("projects.National_Water_Company_Jeddah.title"),
          description: t("projects.National_Water_Company_Jeddah.description"),
          image: "/natonalwatercompany.png",
          link: "#",
        },
        {
          title: t("projects.King_Abdulaziz_Endowment.title"),
          description: t("projects.King_Abdulaziz_Endowment.description"),
          image: "/endowment.png",
          link: "#",
        },
        {
          title: t("projects.King_Salman_Air_Base.title"),
          description: t("projects.King_Salman_Air_Base.description"),
          image: "/kingsalmanairbase.jpg",
          link: "#",
        },
      ],
    },
    {
      category: t("categories.security"),
      items: [
        {
          title: t("projects.Al_Kofeia_Restaurant.title"),
          description: t("projects.Al_Kofeia_Restaurant.description"),
          image: "/alkofia.png",
          link: "#",
        },
        {
          title: t("projects.Al_Falah_Bukhari_Restaurant_Jeddah.title"),
          description: t(
            "projects.Al_Falah_Bukhari_Restaurant_Jeddah.description"
          ),
          image: "/alfalah.png",
          link: "#",
        },
        {
          title: t("projects.ASIC.title"),
          description: t("projects.ASIC.description"),
          image: "/asic.png",
          link: "#",
        },
      ],
    },
    {
      category: t("categories.it"),
      items: [
        {
          title: t("projects.The_Ritz_Carlton_Hotel.title"),
          description: t("projects.The_Ritz_Carlton_Hotel.description"),
          image: "/Ritzhotel.png",
          link: "#",
        },
      ],
    },
    {
      category: t("categories.Testing_Comissioning"),
      items: [
        {
          title: t("projects.STC_Headquarters.title"),
          description: t("projects.STC_Headquarters.description"),
          image: "/stc.png",
          link: "#",
        },
        {
          title: t("projects.King_Faisal_Air_Academy.title"),
          description: t("projects.King_Faisal_Air_Academy.description"),
          image: "/KingFaisalAirAccadmy.png",
          link: "#",
        },
        {
          title: t("projects.King_Abdulaziz_International_Airport.title"),
          description: t(
            "projects.King_Abdulaziz_International_Airport.description"
          ),
          image: "/KingAbdulazizinternationaairport.jpg",
          link: "#",
        },
        {
          title: t("projects.Riyadh_Metro.title"),
          description: t("projects.Riyadh_Metro.description"),
          image: "/riyadhmetro.png",
          link: "#",
        },
        {
          title: t("projects.Ma’aden.title"),
          description: t("projects.Ma’aden.description"),
          image: "/Ma’aden.png",
          link: "#",
        },
        {
          title: t("projects.NEOM.title"),
          description: t("projects.NEOM.description"),
          image: "/neom.png",
          link: "#",
        },
        {
          title: t("projects.Aramco.title"),
          description: t("projects.Aramco.description"),
          image: "/Aramco.jpg",
          link: "#",
        },
        {
          title: t("projects.Mecca_Haram.title"),
          description: t("projects.Mecca_Haram.description"),
          image: "/MakkahHaram.png",
          link: "/servercomputer",
        },
        {
          title: t("projects.National_CyberCrime_Agency.title"),
          description: t("projects.National_CyberCrime_Agency.description"),
          image: "/cybercrime.png",
          link: "#",
        },
      ],
    },
    {
      category: t("categories.Engineering"),
      items: [
        {
          title: t("projects.King_Salman_Hospital_Madinah.title"),
          description: t("projects.King_Salman_Hospital_Madinah.description"),
          image: "/samanhospita.png",
          link: "/servercomputer",
        },
        {
          title: t("projects.Batterjee_Medical_College.title"),
          description: t("projects.Batterjee_Medical_College.description"),
          image: "/batterjee.png",
          link: "#",
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices =
    selectedCategory === "All"
      ? projects.flatMap((service) => service.items)
      : projects.find((service) => service.category === selectedCategory)
          ?.items || [];

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
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 5, ease: [0.25, 0.8, 0.25, 1] },
    },
  };

  return (
    <motion.div
      className="py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-2 md:px-4 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-12" variants={cardVariants}>
          <motion.h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2">
            {t("heading")}
          </motion.h3>
          <motion.h2 className="text-3xl sm:text-5xl font-bold mb-4 text-primary">
            {t("subheading")}
          </motion.h2>
          <motion.p className="lg:w-2/3 mx-auto text-base sm:text-lg text-textcolor mt-4">
            {t("description")}
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap justify-center">
          <ul className="flex flex-wrap space-x-2 space-y-2 items-center justify-center">
            <li
              className={`px-4 py-2 rounded cursor-pointer mt-2 ${
                selectedCategory === "All"
                  ? "bg-secondary text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </li>
            {projects.map((service, index) => (
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

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-3">
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden mx-auto max-w-sm text-center group"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Ensures animation triggers when 20% of the card enters the viewport
            >
              <div className="overflow-hidden rounded-3xl relative">
                <Link href={service.link} className="block relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full rounded-lg aspect-[1/1.2] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/70 rounded-lg"></div>
                </Link>
              </div>

              {/* Project Info */}
              <div className="absolute bottom-12 left-6 right-6 bg-opacity-0 text-left transform translate-y-full group-hover:translate-y-0 group-hover:bg-opacity-100 transition-all duration-500">
                <h3 className="text-xl font-bold text-white capitalize mb-7">
                  {service.title}
                </h3>
                <p className="text-lg text-white mb-4 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="absolute text-secondary font-semibold capitalize text-lg hover:text-white flex items-center justify-start -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                >
                  {t("view_more_btn")}
                  <img
                    src="/arrow.svg"
                    alt="svg"
                    className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-2"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
