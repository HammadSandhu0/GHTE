import React, { memo } from "react";

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
        tight: "gap-0 sm:gap-1",
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
      <div
        className={`flex items-center ${directionClass} ${spacingClass} ${alignmentClass} ${className}`}
        initial="hidden"
        whileinview="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={direction === "responsive" ? "w-full sm:w-auto" : ""}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }
);

ButtonGroup.displayName = "ButtonGroup";

export default ButtonGroup;
