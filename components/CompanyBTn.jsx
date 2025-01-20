"use client";
import React from "react";
import SecondaryBtn from "./SecondaryBtn";
import { motion } from "framer-motion";

const CompanyBTn = () => {
  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };
  return (
    <div className="flex items-center justify-center mt-6 lg:justify-start flex-col sm:flex-row gap-y-4">
      <motion.div variants={buttonVariants}>
        <SecondaryBtn
          href=""
          text="Company Profile"
          datatranslatekey="Company_Profile"
        />
      </motion.div>
      <motion.div
        variants={buttonVariants}
        className="about-contact-support flex items-center gap-4 sm:ml-4"
      >
        <div className="icon-box">
          <img src="icon-phone.svg" alt="Phone Icon" className="w-8 h-8" />
        </div>
        <div className="about-support-content">
          <p
            className="text-[16px] font-semibold text-textcolor"
            data-translate-key="callorsupport"
          >
            24/7 Support
          </p>
          <h3
            className="text-xl font-semibold text-primary"
            data-translate-key="company_phone"
          >
            +966 122 873 071
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyBTn;
