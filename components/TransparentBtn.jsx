import Link from "next/link";
import React from "react";

const TransparentBtn = ({ href, text, className = "", datatranslatekey }) => {
  return (
    <Link
      href={href}
      className={`group relative text-white flex items-center justify-between py-3 sm:py-4 lg:py-4 rounded-xl border-light border-[1px] px-4 sm:px-6 lg:px-8 text-base sm:text-lg lg:text-xl font-semibold bg-transparent overflow-hidden transition-all duration-300 ${className}`}
      data-key="project_btn"
    >
      {/* Sliding Background */}
      <span className="absolute inset-0 bg-secondary -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

      {/* Button Text */}
      <span className="relative z-10" data-translate-key={datatranslatekey}>
        {text}
      </span>

      {/* Arrow Icon */}
      <img
        src="/arrow.svg"
        alt="svg"
        className="ml-2 relative z-10 transform transition-transform duration-300 group-hover:translate-x-2"
      />
    </Link>
  );
};

export default TransparentBtn;
