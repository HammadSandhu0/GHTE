import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Button = ({
  href,
  text,
  className = "",
  type = "primary",
  datatranslatekey,
}) => {
  // Define default button styles based on the `type`
  const buttonStyles = {
    primary: "bg-primary text-white border-light",
    secondary: "bg-secondary text-white border-light",
    transparent: "bg-transparent text-white border-[1px] border-light",
  };

  const buttonClass = buttonStyles[type] || buttonStyles.primary; // Default to primary if type is invalid

  return (
    <Link
      href={href}
      className={`group relative flex items-center justify-between py-3 sm:py-4 lg:py-4 rounded-xl px-4 sm:px-6 lg:px-8 text-base sm:text-lg lg:text-xl font-semibold overflow-hidden transition-all duration-300 ${buttonClass} ${className}`}
    >
      {/* Sliding Background */}
      <span className="absolute inset-0 bg-secondary -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

      {/* Button Text */}
      <span className="relative z-10">{text}</span>

      {/* Arrow Icon */}
      <img
        src="/arrow.svg"
        alt="svg"
        className="ml-2 relative z-10 transform transition-transform duration-300 group-hover:translate-x-2"
      />
    </Link>
  );
};

export default Button;

export const CalltoActionBtn = () => {
  const t = useTranslations("CompanyBtn");
  return (
    <div className="flex items-center gap-4 sm:ml-4">
      <div className="icon-box">
        <img src="/icon-phone.svg" alt="Phone Icon" className="w-8 h-8" />
      </div>
      <div>
        <p className="text-[16px] font-semibold text-textcolor">
          {t("Support")}
        </p>
        <h3 className="text-xl font-semibold text-primary">{t("phone")}</h3>
      </div>
    </div>
  );
};
