import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"; // Ensure you are using framer-motion

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.4,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

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

const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "STC Headquarters",
      titleKey: "stc_headquarters_title",
      description:
        "At STC Headquarters, UPTIME GHTE conducted comprehensive data center testing using engineers and load banks for optimal performance.",
      descriptionKey: "stc_headquarters_description",
      image: "/stc.png",
      link: "#",
    },
    {
      title: "Riyadh Metro",
      titleKey: "riyadh_metro_title",
      description:
        "Riyadh Metro's UPS Testing guarantees smooth operations by maintaining uninterrupted power during outages.",
      descriptionKey: "riyadh_metro_description",
      image: "/riyadhmetro.png",
      link: "#",
    },
    {
      title: "National CyberCrime Agency",
      titleKey: "national_cybercrime_agency_title",
      description:
        "The CyberCrime Agency's Data Center Testing ensures efficient operations for high-demand and critical systems.",
      descriptionKey: "national_cybercrime_agency_description",
      image: "/cybercrime.png",
      link: "#",
    },
    {
      title: "Batterjee Medical College",
      titleKey: "batterjee_medical_college_title",
      description:
        "Batterjee Medical College’s projects include testing data center and power systems to guarantee consistent and reliable performance.",
      descriptionKey: "batterjee_medical_college_description",
      image: "/batterjee.png",
      link: "#",
    },
  ];
  return (
    <motion.div
      className="py-16 px-4 lg:px-20 flex flex-col items-center justify-between bg-light"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the section is in view
    >
      {/* Header Section */}
      <motion.div className="text-center mb-12">
        <motion.h3
          className="text-secondary sm:text-lg md:text-xl font-semibold"
          data-translate-key="projects_section_title"
          variants={headingVariants}
        >
          Our Projects
        </motion.h3>
        <motion.h2
          className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-2"
          data-translate-key="featured_projects_title"
          variants={headingVariants}
        >
          Our Featured Projects
        </motion.h2>
        <motion.p
          className="text-textcolor text-lg lg:text-xl my-8 max-w-4xl mx-auto"
          data-translate-key="projects_section_overview"
          variants={paragraphVariants}
        >
          Our complete portfolio shows our expertise in power systems, IT
          solutions, and security services throughout various industries.
        </motion.p>
      </motion.div>

      {/* Project Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden mx-auto max-w-sm text-center group"
            variants={headingVariants}
          >
            <div className="overflow-hidden rounded-[30px] relative">
              <Link href={project.link} className="block relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[1/1.5] object-cover transition-transform duration-300 group-hover:scale-105 rounded-[30px]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/70 rounded-lg"></div>
              </Link>
            </div>

            {/* Project Info */}
            <div className="absolute bottom-12 left-6 right-6 bg-opacity-0 text-left transform translate-y-full group-hover:translate-y-0 group-hover:bg-opacity-100 transition-all duration-500">
              <h3
                className="text-xl font-bold text-white capitalize mb-7"
                data-translate-key={project.titleKey}
              >
                {project.title}
              </h3>
              <p
                className="text-lg text-white mb-4 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                data-translate-key={project.descriptionKey}
              >
                {project.description}
              </p>
              <a
                href={project.link}
                className="absolute text-secondary font-semibold capitalize text-lg hover:text-white flex items-center justify-start -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                data-translate-key="view_more"
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
      </motion.div>

      {/* View Projects Button */}
      <motion.div className="text-center mt-12" variants={buttonVariants}>
        <Link
          href="/client-projects"
          className="group relative text-white flex items-center justify-between py-3 sm:py-4 lg:py-4 rounded-xl border-light border-[1px] px-4 sm:px-6 lg:px-8 text-base sm:text-lg lg:text-xl font-semibold bg-secondary overflow-hidden transition-all duration-300"
        >
          {/* Sliding Background */}
          <span className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

          {/* Button Text */}
          <span
            className="relative z-10"
            data-translate-key="View_All_Projects"
          >
            View Projects
          </span>

          {/* Arrow Icon */}
          <img
            src="/arrow.svg"
            alt="svg"
            className="ml-2 relative z-10 transform transition-transform duration-300 group-hover:translate-x-2"
          />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsSection;
