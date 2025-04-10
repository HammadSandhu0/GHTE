"use client";
import React, { useState, useMemo, useCallback, memo } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  containerVariants,
  headingVariants,
  useInView,
  motion,
} from "@/utils/animations";
import { Description, Header, Heading, SubHeading } from "./Headings";
import { getProjectsData } from "@/data/allProjectsData";

const Projects = memo(() => {
  const t = useTranslations("AllProjects");
  const projects = useMemo(() => getProjectsData(t), [t]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.01 });

  return (
    <ProjectsSection
      ref={ref}
      inView={inView}
      projects={projects}
      translations={t}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
  );
});

const ProjectsSection = memo(
  ({
    ref,
    inView,
    projects,
    translations: t,
    selectedCategory,
    setSelectedCategory,
  }) => {
    const filteredProjects = useMemo(() => {
      if (selectedCategory === "All") {
        return projects.flatMap((project) => project.items);
      }
      return (
        projects.find((project) => project.category === selectedCategory)
          ?.items || []
      );
    }, [selectedCategory, projects]);

    const handleCategoryChange = useCallback(
      (category) => {
        setSelectedCategory(category);
      },
      [setSelectedCategory]
    );

    return (
      <motion.div
        className="py-16"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-8 md:space-y-12">
          <Header>
            <SubHeading>{t("heading")}</SubHeading>
            <Heading className="!text-primary">{t("subheading")}</Heading>
            <Description className="!text-textcolor max-w-3xl mx-auto">
              {t("description")}
            </Description>
          </Header>

          <CategoryFilter
            categories={["All", ...projects.map((p) => p.category)]}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          <ProjectGrid
            projects={filteredProjects}
            viewMoreText={t("view_more_btn")}
          />
        </div>
      </motion.div>
    );
  }
);

const CategoryFilter = memo(
  ({ categories, selectedCategory, onCategoryChange }) => (
    <div className="mb-8 flex flex-wrap justify-center">
      <ul className="flex flex-wrap space-x-2 space-y-2 items-center justify-center">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`px-4 py-2 rounded cursor-pointer ${
              index === 0 ? "mt-2" : ""
            } ${
              selectedCategory === category
                ? "bg-secondary text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
);

const ProjectGrid = memo(({ projects, viewMoreText }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-3">
    {projects.map((project, index) => (
      <ProjectCard
        key={index}
        project={project}
        index={index}
        viewMoreText={viewMoreText}
      />
    ))}
  </div>
));

const ProjectCard = memo(({ project, index, viewMoreText }) => (
  <motion.div
    className="relative overflow-hidden mx-auto max-w-sm text-center group"
    variants={headingVariants}
  >
    <div className="overflow-hidden rounded-3xl relative">
      <Link href={project.link} className="block relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-lg aspect-[1/1.2] object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/70 rounded-lg"></div>
      </Link>
    </div>

    {/* Project Info */}
    <div className="absolute bottom-12 left-6 right-6 bg-opacity-0 text-left transform translate-y-full group-hover:translate-y-0 group-hover:bg-opacity-100 transition-all duration-500">
      <h3 className="text-xl font-bold text-white capitalize mb-7">
        {project.title}
      </h3>
      <p className="text-lg text-white mb-4 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out">
        {project.description}
      </p>
      <a
        href={project.link}
        className="absolute text-secondary font-semibold capitalize text-lg hover:text-white flex items-center justify-start -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
      >
        {viewMoreText}
        <img
          src="/arrow.svg"
          alt="svg"
          className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-2"
        />
      </a>
    </div>
  </motion.div>
));

// Add display names for better debugging
Projects.displayName = "Projects";
ProjectsSection.displayName = "ProjectsSection";
CategoryFilter.displayName = "CategoryFilter";
ProjectGrid.displayName = "ProjectGrid";
ProjectCard.displayName = "ProjectCard";

export default Projects;
