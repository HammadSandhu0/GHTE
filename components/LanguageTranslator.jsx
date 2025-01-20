"use client";
import React, { useState } from "react";
import { useLanguage } from "./LanguageProvider"; // Import the context hook

const LanguageTranslator = ({ className = "" }) => {
  const { setLanguage } = useLanguage(); // Get the function to update the global language
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    flag: "https://flagcdn.com/w40/gb.png",
    label: "English",
    code: "en", // Language code to sync with context
  });

  const handleLanguageChange = (e, lang, flag, label) => {
    e.stopPropagation(); // Prevent click event propagation
    setSelectedLanguage({ flag, label, code: lang }); // Update local state
    setLanguage(lang); // Update global context for language
    setShowDropdown(false); // Close dropdown
  };

  return (
    <div
      className="relative inline-block cursor-pointer mx-2 min-w-[115px]"
      onClick={() => setShowDropdown((prev) => !prev)}
    >
      {/* Selected Language */}
      <div
        className={`flex items-center gap-1 p-2 bg-primary text-white rounded-md ${className}`}
      >
        <img
          src={selectedLanguage.flag}
          alt={selectedLanguage.label}
          className="w-6 h-6 rounded-full"
        />
        <span>{selectedLanguage.label}</span>
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <ul
          className={`absolute top-full left-0 bg-primary text-white rounded-md list-none p-0 mt-1 min-w-[115px] z-10 ${className} !mt-1`}
        >
          {/* Arabic Option */}
          <li
            onClick={(e) =>
              handleLanguageChange(
                e,
                "ar",
                "https://flagcdn.com/w40/sa.png",
                "العربية"
              )
            }
            className="flex items-center px-2 py-2 cursor-pointer hover:bg-accent hover:text-white rounded-md transition-all"
          >
            <img
              src="https://flagcdn.com/w40/sa.png"
              alt="Arabic"
              className="w-5 h-5 mr-2"
            />
            <span>العربية</span>
          </li>

          {/* English Option */}
          <li
            onClick={(e) =>
              handleLanguageChange(
                e,
                "en",
                "https://flagcdn.com/w40/gb.png",
                "English"
              )
            }
            className="flex items-center px-2 py-2 cursor-pointer hover:bg-accent hover:text-white rounded-md transition-all"
          >
            <img
              src="https://flagcdn.com/w40/gb.png"
              alt="English"
              className="w-5 h-5 mr-2"
            />
            <span>English</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageTranslator;
