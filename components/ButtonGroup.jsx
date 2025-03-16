import React, { memo } from "react";
import { motion, containerVariants } from "@/utils/animations";

const ButtonGroup = memo(
  ({
    children,
    className = "",
    direction = "responsive",
    spacing = "default",
    alignment = "responsive",
  }) => {
    // Direction classes
    const directionClass =
      {
        row: "flex-row",
        col: "flex-col",
        responsive: "flex-col sm:flex-row",
      }[direction] || "flex-col sm:flex-row";

    // Spacing classes
    const spacingClass =
      {
        tight: "gap-2 sm:gap-3",
        default: "gap-3 sm:gap-4",
        wide: "gap-4 sm:gap-6",
      }[spacing] || "gap-3 sm:gap-4";

    // Alignment classes
    const alignmentClass =
      {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        responsive: "justify-center sm:justify-start",
      }[alignment] || "justify-center sm:justify-start";

    return (
      <motion.div
        className={`flex items-center ${directionClass} ${spacingClass} ${alignmentClass} mt-6 sm:mt-8 md:mt-10 ${className}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {React.Children.map(children, (child, index) => (
          <motion.div
            key={index}
            variants={containerVariants}
            className={direction === "responsive" ? "w-full sm:w-auto" : ""}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }
);

ButtonGroup.displayName = "ButtonGroup";

export default ButtonGroup;
