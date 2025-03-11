"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import Image from "next/image";
import {
  containerVariants,
  headingVariants,
  useInView,
  motion,
} from "@/utils/animations";
import {
  CardHeading,
  Description,
  Header,
  Heading,
  SubHeading,
} from "./Headings";
import Button from "./Button"; // Import the separated project data

const ProjectsSection = () => {
  const t = useTranslations("FeaturedProjects");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const projects = useMemo(() => [
    {
      title: t("STC_Headquarters.title"),
      description: t("STC_Headquarters.description"),
      image: "/stc.png",
      link: "#",
    },
    {
      title: t("Riyadh_Metro.title"),
      description: t("Riyadh_Metro.description"),
      image: "/riyadhmetro.png",
      link: "#",
    },
    {
      title: t("National_CyberCrime_Agency.title"),
      description: t("National_CyberCrime_Agency.description"),
      image: "/cybercrime.png",
      link: "#",
    },
    {
      title: t("Batterjee_Medical_College.title"),
      description: t("Batterjee_Medical_College.description"),
      image: "/batterjee.png",
      link: "#",
    },
  ]);
  return (
    <motion.div
      className="py-16 px-4 lg:px-20 flex flex-col items-center justify-between bg-light"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-2 md:px-4 lg:px-8 space-y-8 flex flex-col items-center justify-center ">
        <Header>
          <SubHeading>{t("heading")}</SubHeading>
          <Heading className="!text-primary">{t("subheading")}</Heading>
          <Description className="!text-textcolor">
            {t("description")}
          </Description>
        </Header>

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
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={750}
                    className="w-full aspect-[1/1.5] object-cover transition-transform duration-300 group-hover:scale-105 rounded-[30px]"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/70 rounded-lg"></div>
                </Link>
              </div>

              {/* Project Info */}
              <div className="absolute bottom-12 left-6 right-6 bg-opacity-0 text-left transform translate-y-full group-hover:translate-y-0 group-hover:bg-opacity-100 transition-all duration-500">
                <CardHeading className="!text-white">
                  {project.title}
                </CardHeading>
                <Description className="text-lg text-white mb-4 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out">
                  {project.description}
                </Description>
                <Link
                  href={project.link}
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
        </motion.div>
        <Button
          href="/client-projects"
          text={t("view_projects")}
          type="secondary"
          className="w-fit"
        />
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
