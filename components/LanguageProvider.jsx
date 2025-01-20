"use client";
import React, { useState, useEffect, createContext, useContext } from "react";

// Create Language Context
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language is English
  const [translations, setTranslations] = useState({});

  // Load translations dynamically
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        // Dynamically import the JSON file based on selectedLanguage
        const langFile = await import(`../locales/${selectedLanguage}.json`);
        setTranslations(langFile);
      } catch (error) {
        console.error(
          `Error loading translations for ${selectedLanguage}:`,
          error
        );
      }
    };

    loadTranslations();
  }, [selectedLanguage]);

  // Update translated elements dynamically
  useEffect(() => {
    document.querySelectorAll("[data-translate-key]").forEach((element) => {
      const key = element.getAttribute("data-translate-key");
      if (translations[key]) {
        element.innerText = translations[key];
      }
    });
  }, [translations]);

  const value = {
    language: selectedLanguage,
    setLanguage: setSelectedLanguage, // Update the selected language
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use Language Context
export const useLanguage = () => useContext(LanguageContext);
