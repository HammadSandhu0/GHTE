"use client";
import React, { useState, useMemo, useCallback, memo } from "react";
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

// Reusable CategoryFilter Component
const CategoryFilter = memo(
  ({
    categories,
    selectedCategory,
    onCategoryChange,
    className = "",
    activeClassName = "bg-secondary text-white shadow-md",
    inactiveClassName = "bg-gray-200 text-gray-700 hover:bg-gray-300",
  }) => (
    <div className={`overflow-x-auto -mx-4 px-4 pb-3 ${className}`}>
      <ul className="flex flex-nowrap min-w-max justify-center gap-2 sm:gap-3 md:gap-4">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`px-3 py-2 sm:px-4 md:py-2.5 text-sm sm:text-base rounded-full cursor-pointer transition-all whitespace-nowrap ${
              selectedCategory === category
                ? activeClassName
                : inactiveClassName
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

const ServiceGrid = memo(({ services, viewMoreText }) => (
  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
    variants={containerVariants}
  >
    {services.map((service, index) => (
      <ServiceCard
        key={index}
        service={service}
        index={index}
        viewMoreText={viewMoreText}
      />
    ))}
  </motion.div>
));

const ServiceCard = memo(({ service, index }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement to update tooltip position
  const handleMouseMove = (e) => {
    setTooltipPosition({
      x: e.clientX + 15,
      y: e.clientY - 10,
    });
  };

  return (
    <motion.div
      className="relative overflow-hidden mx-auto w-full text-center group rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
      variants={headingVariants}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="overflow-hidden rounded-3xl relative h-full">
        <Link href={service.link} className="block relative h-full">
          <Image
            src={service.image}
            alt={service.title}
            width={400}
            height={500}
            className="w-full rounded-2xl aspect-[1/1.2] object-cover transition-transform duration-500 group-hover:scale-110"
            priority={index < 4}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70 rounded-2xl opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>

          {/* Content Container - Fixed positioning relative to card */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-left transform translate-y-0 transition-all duration-500 ease-out bg-gradient-to-t from-black/80 to-transparent">
            <SubHeading className="mb-2 sm:mb-3 md:mb-4 text-white">
              {service.title}
            </SubHeading>

            {/* Use max-height transition instead of opacity for better readability */}
            <div className="overflow-hidden transition-all duration-500 ease-out max-h-0 group-hover:max-h-24">
              <Description className="!text-white transition-opacity duration-300 line-clamp-3">
                {service.description}
              </Description>
            </div>
          </div>
        </Link>
      </div>

      {/* Elegant round tooltip */}
      {showTooltip && (
        <div
          className="fixed z-50 bg-secondary text-white text-sm font-medium p-2 rounded-full shadow-lg pointer-events-none flex items-center justify-center transition-opacity duration-200 opacity-90 hover:opacity-100"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
          }}
        >
          View
        </div>
      )}
    </motion.div>
  );
});

const ServicesSection = memo(
  ({
    ref,
    inView,
    services,
    translations: t,
    selectedCategory,
    setSelectedCategory,
  }) => {
    const filteredServices = useMemo(() => {
      if (selectedCategory === t("categories.all")) {
        return services.flatMap((service) => service.items);
      }
      return (
        services.find((service) => service.category === selectedCategory)
          ?.items || []
      );
    }, [selectedCategory, services, t]);

    const handleCategoryChange = useCallback(
      (category) => {
        setSelectedCategory(category);
      },
      [setSelectedCategory]
    );

    return (
      <motion.section
        className="bg-light"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 space-y-4 lg:space-y-6">
          <Header>
            <SubHeading>{t("heading")}</SubHeading>
            <Heading className="!text-primary">{t("subheading")}</Heading>
            <Description className="!text-textcolor max-w-3xl mx-auto">
              {t("description")}
            </Description>
          </Header>

          <CategoryFilter
            categories={[
              t("categories.all"),
              ...services.map((s) => s.category),
            ]}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          <ServiceGrid
            services={filteredServices}
            viewMoreText={t("view_more_btn")}
          />
        </div>
      </motion.section>
    );
  }
);

const Services = memo(() => {
  const t = useTranslations("Services");
  const services = useMemo(() => getServicesData(t), [t]);
  const [selectedCategory, setSelectedCategory] = useState(t("categories.all"));
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.01 });

  return (
    <ServicesSection
      ref={ref}
      inView={inView}
      services={services}
      translations={t}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
  );
});

// Add display names for better debugging
CategoryFilter.displayName = "CategoryFilter";
ServiceGrid.displayName = "ServiceGrid";
ServiceCard.displayName = "ServiceCard";
ServicesSection.displayName = "ServicesSection";
Services.displayName = "Services";

export { CategoryFilter };
export default Services;
