"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";
import { useTranslations } from "next-intl";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.4,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <motion.footer
      className="bg-primary pt-4 sm:pt-6 lg:pt-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="pt-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
            {/* About Section */}
            <motion.div
              className="col-span-full lg:col-span-2"
              variants={sectionVariants}
            >
              <div className="mb-4 lg:-mt-2">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl"
                  aria-label="logo"
                >
                  <h1 className="text-5xl text-white">GHTE</h1>
                </a>
              </div>

              <p className="mb-6 text-white sm:pr-8 text-[16px] font-semibold">
                {t("description")}
              </p>
              <SocialIcons />
            </motion.div>

            {/* Our Services Section */}
            <motion.div variants={sectionVariants}>
              <div className="mb-4 font-bold uppercase tracking-widest text-secondary text-xl">
                {t("OurServicesTitle")}
              </div>
              <nav className="flex flex-col gap-4">
                <Link
                  href="/load-bank-rental-saudi-arabia"
                  className="text-white flex items-center justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                >
                  <img src="/arrow.svg" alt="" />
                  {t("OurServices.loadBank")}
                </Link>
                <Link
                  href="/access-control-systems-in-saudi-arabia"
                  className="text-white flex items-center justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                >
                  <img src="/arrow.svg" alt="" />
                  {t("OurServices.accessControl")}
                </Link>
                <Link
                  href="/generators-saudi-arabia"
                  className="text-white flex items-center justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                >
                  <img src="/arrow.svg" alt="" />
                  {t("OurServices.generators")}
                </Link>
                <Link
                  href="/cyber-security-services-in-saudi-arabia"
                  className="text-white flex items-center justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                >
                  <img src="/arrow.svg" alt="" />
                  {t("OurServices.cyberSecurity")}
                </Link>
              </nav>
            </motion.div>

            {/* Company Section */}
            <motion.div variants={sectionVariants}>
              <div className="mb-4 font-bold uppercase tracking-widest text-secondary text-xl">
                {t("CompanyTitle")}
              </div>
              <nav className="flex flex-col gap-4">
                <Link
                  href="/about"
                  className="text-white flex items-center justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                >
                  <img src="/arrow.svg" alt="" />
                  {t("Company.about")}
                </Link>
                <Link
                  href="/client-projects"
                  className="text-white flex items-center justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                >
                  <img src="/arrow.svg" alt="" />
                  {t("Company.projects")}
                </Link>
                <Link
                  href="/companyprofile.pdf"
                  className="text-white flex items-center justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                >
                  <img src="/arrow.svg" alt="" />
                  {t("Company.companyProfile")}
                </Link>
                <Link
                  href="/conatct"
                  className="text-white flex items-center justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                >
                  <img src="/arrow.svg" alt="" />
                  {t("Company.contact")}
                </Link>
              </nav>
            </motion.div>

            {/* Contact Us Section */}
            <motion.div variants={sectionVariants}>
              <div className="mb-4 font-bold uppercase tracking-widest text-secondary text-xl">
                {t("ContactUsTitle")}
              </div>
              <nav className="flex flex-col gap-4">
                <Link
                  href="tel:+966122873071"
                  className="text-white flex items-center justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                >
                  <img src="/icon-phone.svg" alt="" className="w-6 h-6" />
                  {t("ContactUs.phone")}
                </Link>
                <Link
                  href="mailto:Info@gulfhorizontele.com"
                  className="text-white flex items-center justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                >
                  <img src="/icon-mail.svg" alt="" className="w-6 h-6" />
                  {t("ContactUs.email")}
                </Link>
                <Link
                  href="/contact"
                  className="text-white flex items-start justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                >
                  <img src="/icon-location.svg" alt="" className="w-6 h-6" />
                  {t("ContactUs.address")}
                </Link>
              </nav>
            </motion.div>
          </div>

          <motion.div
            className="border-t py-8 text-center text-[16px] text-white"
            variants={sectionVariants}
          >
            Copyright © 2024 GHTE. All Rights Reserved.
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
