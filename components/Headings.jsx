import { headingVariants, paragraphVariants, motion } from "@/utils/animations";

export const Heading = ({ className = "", children }) => (
  <motion.div
    className={`text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold my-4 text-secondary ${className}`}
    variants={headingVariants}
  >
    {children}
  </motion.div>
);
export const CardHeading = ({ className = "", children }) => (
  <motion.div
    className={`text-xl lg:text-2xl font-medium mt-10 mb-5 text-primary ${className}`}
    variants={headingVariants}
  >
    {children}
  </motion.div>
);

export const SubHeading = ({ className = "", children }) => (
  <motion.div
    className={`text-secondary sm:text-lg md:text-xl font-semibold mb-2 ${className}`}
    variants={headingVariants}
  >
    {children}
  </motion.div>
);

export const Description = ({ className = "", children }) => (
  <motion.div
    className={`text-textcolor text-sm sm:text-base md:text-lg xl:text-xl ${className}`}
    variants={paragraphVariants}
  >
    {children}
  </motion.div>
);

export const Header = ({ children, className = "" }) => {
  return (
    <div
      className={`max-w-5xl mx-auto text-center flex flex-col space-y-4 ${className}`}
    >
      {children}
    </div>
  );
};
