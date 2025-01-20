"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  const services = [
    {
      category: "Power",
      items: [
        {
          title: "Saudia Technic",
          description:
            "Saudia Technic specializes in power systems supply, installation, testing, and commissioning, ensuring seamless and efficient operations.",
          image: "saudiatechnic.png",
          link: "#",
        },
        {
          title: "Royal Commission of AlUla",
          description:
            "The AlUla UPS Systems project guarantees continuous power supply through reliable installation, testing, and commissioning services.",
          image: "/AlUla.png",
          link: "#",
        },
        {
          title: "National Water Company Jeddah",
          description:
            "National Water Company relies on Load Banks to provide dependable backup power during unexpected outages.",
          image: "/natonalwatercompany.png",
          link: "#",
        },
        {
          title: "King Abdulaziz Endowment",
          description:
            "The AVR System installed for the King Abdulaziz Endowment ensures stable voltage, delivering uninterrupted and reliable power.",
          image: "/endowment.png",
          link: "#",
        },
        {
          title: "King Salman Air Base",
          description:
            "Outdoor UPS Systems at King Salman Air Base are meticulously installed to maintain reliable backup power during critical situations.",
          image: "/kingsalmanairbase.jpg",
          link: "#",
        },
      ],
    },
    {
      category: "Security",
      items: [
        {
          title: "Al Kofeia Restaurant",
          description:
            "A robust CCTV solution was implemented at Al Kofeia Restaurant to enhance security and ensure comprehensive surveillance.",
          image: "/alkofia.png",
          link: "#",
        },
        {
          title: "Al Falah Bukhari Restaurant Jeddah",
          description:
            "CCTV systems installed at Al Falah Bukhari Restaurant deliver continuous and efficient security monitoring for all operations.",
          image: "/alfalah.png",
          link: "#",
        },
        {
          title: "ASIC",
          description:
            "ASIC projects encompass testing, commissioning, and advanced security solutions to ensure reliable system performance.",
          image: "/asic.png",
          link: "#",
        },
      ],
    },
    {
      category: "IT",
      items: [
        {
          title: "The Ritz-Carlton Hotel",
          description:
            "Ritz-Carlton Hotel projects include state-of-the-art power and security solutions, ensuring smooth and secure operations.",
          image: "/Ritzhotel.png",
          link: "#",
        },
      ],
    },
    {
      category: "Testing & Comissioning",
      items: [
        {
          title: "STC Headquarters",
          description:
            "At STC Headquarters, UPTIME GHTE conducted comprehensive data center testing using engineers and load banks for optimal performance.",
          image: "/stc.png",
          link: "#",
        },
        {
          title: "King Faisal Air Academy",
          description:
            "King Faisal Air Academy projects combine power systems and security solutions, providing reliable and efficient operations.",
          image: "/KingFaisalAirAccadmy.png",
          link: "#",
        },
        {
          title: "King Abdulaziz International Airport",
          description:
            "King Abdulaziz Airport's projects included installing and testing advanced power and security systems to ensure reliable functionality.",
          image: "/KingAbdulazizinternationaairport.jpg",
          link: "#",
        },
        {
          title: "Riyadh Metro",
          description:
            "Riyadh Metro's UPS Testing guarantees smooth operations by maintaining uninterrupted power during outages.",
          image: "/riyadhmetro.png",
          link: "#",
        },
        {
          title: "Ma’aden",
          description:
            "Ma’aden's projects involve comprehensive power systems supply, installation, testing, and commissioning for dependable functionality.",
          image: "/Ma’aden.png",
          link: "#",
        },
        {
          title: "NEOM",
          description:
            "NEOM’s Generator Testing ensures uninterrupted and reliable backup power for its state-of-the-art facilities.",
          image: "/neom.png",
          link: "#",
        },
        {
          title: "Aramco",
          description:
            "Aramco's projects include supplying, installing, and testing power and security systems to meet their rigorous operational standards.",
          image: "/Aramco.jpg",
          link: "#",
        },
        {
          title: "Mecca Haram",
          description:
            "Projects at Makkah Haram involved the installation and testing of reliable power and security systems for efficient operations.",
          image: "/MakkahHaram.png",
          link: "/servercomputer",
        },
        {
          title: "National CyberCrime Agency",
          description:
            "The CyberCrime Agency's Data Center Testing ensures efficient operations for high-demand and critical systems.",
          image: "/cybercrime.png",
          link: "#",
        },
      ],
    },
    {
      category: "Enggineering",
      items: [
        {
          title: "King Salman Hospital Madinah",
          description:
            "King Salman Hospital’s project delivers reliable power, data, and infrastructure systems to support critical healthcare services.",
          image: "/samanhospita.png",
          link: "/servercomputer",
        },
        {
          title: "⁠Batterjee Medical College",
          description:
            "Batterjee Medical College’s projects include testing data center and power systems to guarantee consistent and reliable performance.",
          image: "/batterjee.png",
          link: "#",
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices =
    selectedCategory === "All"
      ? services.flatMap((service) => service.items)
      : services.find((service) => service.category === selectedCategory)
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
      transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
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
            Our projects
          </motion.h3>
          <motion.h2 className="text-3xl sm:text-5xl font-bold mb-4 text-primary">
            OUR SELECTED PROJECTS
          </motion.h2>
          <motion.p className="lg:w-2/3 mx-auto text-base sm:text-lg text-textcolor mt-4">
            We have successfully completed a variety of projects, including
            testing and commissioning services for major sites like STC
            Headquarters and Riyadh Metro. Our expertise also extends to
            engineering services for healthcare facilities. Additionally, we
            specialize in power systems with reliable UPS installations and
            provide advanced CCTV security solutions for different sectors.
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
                  View more
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
