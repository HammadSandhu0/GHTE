import React, { memo } from "react";
import {
  headingVariants,
  paragraphVariants,
  motion,
  containerVariants,
} from "@/utils/animations";

// Heading component
export const Heading = memo(({ className = "", children, as = "h2" }) => {
  const Element = as;

  return (
    <motion.div
      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold my-3 sm:my-4 text-secondary ${className}`}
      variants={headingVariants}
    >
      <Element>{children}</Element>
    </motion.div>
  );
});

// CardHeading component
export const CardHeading = memo(({ className = "", children, as = "h3" }) => {
  const Element = as;

  return (
    <motion.div
      className={`text-lg sm:text-xl lg:text-2xl font-medium mb-3 sm:mb-2 text-primary ${className}`}
      variants={headingVariants}
    >
      <Element>{children}</Element>
    </motion.div>
  );
});

// SubHeading component
export const SubHeading = memo(({ className = "", children, as = "h4" }) => {
  const Element = as;

  return (
    <motion.div
      className={`text-secondary text-sm sm:text-base md:text-lg font-semibold ${className}`}
      variants={headingVariants}
    >
      <Element>{children}</Element>
    </motion.div>
  );
});

// Description component
export const Description = memo(({ className = "", children, lineClamp }) => {
  const lineClampClass = lineClamp ? `line-clamp-${lineClamp}` : "";

  return (
    <motion.div
      className={`text-textcolor text-sm sm:text-base  ${lineClampClass} ${className}`}
      variants={paragraphVariants}
    >
      {children}
    </motion.div>
  );
});

// Header component
export const Header = memo(
  ({ children, className = "", alignment = "center", spacing = "normal" }) => {
    const alignmentClass =
      {
        center: "text-center mx-auto",
        left: "text-left",
        right: "text-right ml-auto",
        responsive: "text-center mx-auto lg:text-left lg:mx-0",
      }[alignment] || "text-center mx-auto";

    const spacingClass =
      {
        tight: "space-y-1",
        normal: "space-y-3 sm:space-y-4",
        wide: "space-y-4 sm:space-y-6",
      }[spacing] || "space-y-3 sm:space-y-4";

    return (
      <motion.header
        className={`max-w-5xl ${alignmentClass} ${spacingClass} mb-4 ${className}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {children}
      </motion.header>
    );
  }
);
export const MotionDiv = memo(
  ({ children, className = "", alignment = "center", spacing = "normal" }) => {
    const alignmentClass =
      {
        center: "text-center mx-auto",
        left: "text-left",
        right: "text-right ml-auto",
        responsive: "text-center mx-auto lg:text-left lg:mx-0",
      }[alignment] || "text-center mx-auto";

    const spacingClass =
      {
        tight: "space-y-2",
        normal: "space-y-3 sm:space-y-4",
        wide: "space-y-4 sm:space-y-6",
      }[spacing] || "space-y-3 sm:space-y-4";

    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {children}
      </motion.div>
    );
  }
);

// Add display names for better debugging
Heading.displayName = "Heading";
CardHeading.displayName = "CardHeading";
SubHeading.displayName = "SubHeading";
Description.displayName = "Description";
Header.displayName = "Header";
