import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { memo } from "react";
import Image from "next/image";
import { motion, buttonVariants } from "@/utils/animations";

const buttonStyles = {
  primary: "bg-primary text-white border-light hover:bg-primary/90",
  secondary: "bg-secondary text-white border-light hover:bg-secondary/90",
  transparent:
    "bg-transparent text-white border border-light hover:bg-white/10",
  outline:
    "bg-transparent text-secondary  border border-primary hover:bg-primary/5",
};

const Button = memo(
  ({
    href,
    text,
    className = "",
    type = "primary",
    size = "md",
    onClick,
    disabled = false,
    fullWidth = false,
  }) => {
    const sizeClasses = {
      sm: "py-2 px-4 text-sm",
      md: "py-2.5 sm:py-3 px-4 sm:px-5 text-sm sm:text-base",
      lg: "py-3 sm:py-4 px-5 sm:px-6 text-base sm:text-lg",
    };

    const buttonClass = buttonStyles[type] || buttonStyles.primary;
    const sizeClass = sizeClasses[size] || sizeClasses.md;
    const widthClass = fullWidth ? "w-full" : "";

    const commonClasses = `
    group relative inline-flex items-center justify-center
    rounded-xl font-medium transition-all duration-300
    ${buttonClass} ${sizeClass} ${widthClass} ${className}
    ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
  `;

    const ButtonContent = () => (
      <>
        <span className="absolute inset-0 bg-secondary/90 rounded-xl transform origin-left w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
        <span className="relative z-10">{text}</span>
        <Image
          src="/arrow.svg"
          alt="arrow"
          width={17}
          height={17}
          className="ml-2 relative z-10 transform transition-transform duration-300 group-hover:translate-x-1"
        />
      </>
    );

    if (onClick) {
      return (
        <motion.button
          onClick={disabled ? undefined : onClick}
          className={commonClasses}
          variants={buttonVariants}
          disabled={disabled}
        >
          <ButtonContent />
        </motion.button>
      );
    }

    return (
      <motion.div variants={buttonVariants}>
        <Link
          href={href}
          className={commonClasses}
          aria-disabled={disabled}
          onClick={(e) => disabled && e.preventDefault()}
        >
          <ButtonContent />
        </Link>
      </motion.div>
    );
  }
);

// CalltoActionBtn component
const CalltoActionBtn = memo(({ className = "" }) => {
  const t = useTranslations("CompanyBtn");

  return (
    <motion.div
      className={`flex items-center gap-2 sm:gap-3 md:gap-4 ${className}`}
      variants={buttonVariants}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex-shrink-0 bg-secondary/15 rounded-full p-2 sm:p-3">
        <Image
          src="/icon-phone.svg"
          alt="Phone Icon"
          width={24}
          height={24}
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
      </div>
      <div>
        <p className="text-xs sm:text-sm font-medium text-textcolor">
          {t("Support")}
        </p>
        <a
          href={`tel:${t("phone")}`}
          className="text-base sm:text-lg md:text-xl font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          {t("phone")}
        </a>
      </div>
    </motion.div>
  );
});

// Add display names for better debugging
Button.displayName = "Button";
CalltoActionBtn.displayName = "CalltoActionBtn";

export default Button;
export { CalltoActionBtn };
