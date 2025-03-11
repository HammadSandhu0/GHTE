import React from "react";
import { motion, buttonVariants } from "@/utils/animations";

const CustomButtonGroup = ({ children, className = "" }) => {
  return (
    <div
      className={`flex items-center justify-center mt-10  flex-col sm:flex-row gap-4 ${className}`}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={buttonVariants}>
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default CustomButtonGroup;
