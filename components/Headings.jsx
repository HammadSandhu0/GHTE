import React, { memo } from "react";

export const Header = memo(
  ({ children, className = "", alignment = "center", spacing = "normal" }) => {
    const alignmentClass =
      {
        center: "text-center mx-auto",
        left: "text-left",
        right: "text-right ml-auto",
        responsive: "text-center mx-auto xl:text-left",
      }[alignment] || "text-center mx-auto";

    const spacingClass =
      {
        tight: "space-y-1 sm:space-y-1 xl:space-y-3",
        normal: "space-y-1 sm:space-y-4 xl:space-y-5",
        wide: "space-y-4 sm:space-y-6",
      }[spacing] || "space-y-3 sm:space-y-4";

    return (
      <header
        className={`max-w-5xl ${alignmentClass} ${spacingClass} ${className}`}
        initial="hidden"
        whileinview="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {children}
      </header>
    );
  }
);
// Heading component
export const Heading = memo(({ className = "", children, as = "h2" }) => {
  const Element = as;

  return (
    <div
      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold m-0 text-secondary ${className}`}
    >
      <Element>{children}</Element>
    </div>
  );
});

// CardHeading component
export const CardHeading = memo(({ className = "", children, as = "h3" }) => {
  const Element = as;

  return (
    <div
      className={`text-lg sm:text-xl lg:text-2xl font-medium m-0 text-primary ${className}`}
    >
      <Element>{children}</Element>
    </div>
  );
});

// SubHeading component
export const SubHeading = memo(({ className = "", children, as = "h4" }) => {
  const Element = as;

  return (
    <div
      className={`text-secondary text-sm sm:text-base md:text-lg font-semibold m-0 ${className}`}
    >
      <Element>{children}</Element>
    </div>
  );
});

// Description component
export const Description = memo(({ className = "", children, lineClamp }) => {
  const lineClampClass = lineClamp ? `line-clamp-${lineClamp}` : "";

  return (
    <div
      className={`text-textcolor text-sm sm:text-base  ${lineClampClass} ${className}`}
    >
      {children}
    </div>
  );
});

Heading.displayName = "Heading";
CardHeading.displayName = "CardHeading";
SubHeading.displayName = "SubHeading";
Description.displayName = "Description";
Header.displayName = "Header";
