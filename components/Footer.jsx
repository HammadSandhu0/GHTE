"use client";
import Link from "next/link";
import React, { memo } from "react";
import Image from "next/image"; // Import next/image for optimized image loading
import SocialIcons from "./SocialIcons";
import { useTranslations } from "next-intl";
import { containerVariants, sectionVariants, motion } from "@/utils/animations";

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
                {[
                  {
                    href: "/load-bank-rental-saudi-arabia",
                    label: t("OurServices.loadBank"),
                  },
                  {
                    href: "/access-control-systems-in-saudi-arabia",
                    label: t("OurServices.accessControl"),
                  },
                  {
                    href: "/generators-saudi-arabia",
                    label: t("OurServices.generators"),
                  },
                  {
                    href: "/cyber-security-services-in-saudi-arabia",
                    label: t("OurServices.cyberSecurity"),
                  },
                ].map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="text-white flex items-center justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                  >
                    <Image src="/arrow.svg" alt="" width={16} height={16} />
                    {service.label}
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Company Section */}
            <motion.div variants={sectionVariants}>
              <div className="mb-4 font-bold uppercase tracking-widest text-secondary text-xl">
                {t("CompanyTitle")}
              </div>
              <nav className="flex flex-col gap-4">
                {[
                  { href: "/about", label: t("Company.about") },
                  { href: "/client-projects", label: t("Company.projects") },
                  {
                    href: "/companyprofile.pdf",
                    label: t("Company.companyProfile"),
                  },
                  { href: "/conatct", label: t("Company.contact") },
                ].map((company, index) => (
                  <Link
                    key={index}
                    href={company.href}
                    className="text-white flex items-center justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                  >
                    <Image src="/arrow.svg" alt="" width={16} height={16} />
                    {company.label}
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Contact Us Section */}
            <motion.div variants={sectionVariants}>
              <div className="mb-4 font-bold uppercase tracking-widest text-secondary text-xl">
                {t("ContactUsTitle")}
              </div>
              <nav className="flex flex-col gap-4">
                {[
                  {
                    href: "tel:+966122873071",
                    icon: "/icon-phone.svg",
                    label: t("ContactUs.phone"),
                  },
                  {
                    href: "mailto:Info@gulfhorizontele.com",
                    icon: "/icon-mail.svg",
                    label: t("ContactUs.email"),
                  },
                  {
                    href: "/contact",
                    icon: "/icon-location.svg",
                    label: t("ContactUs.address"),
                  },
                ].map((contact, index) => (
                  <Link
                    key={index}
                    href={contact.href}
                    className="text-white flex items-center justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                  >
                    <Image src={contact.icon} alt="" width={24} height={24} />
                    {contact.label}
                  </Link>
                ))}
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

// Wrap the Footer component in React.memo to prevent unnecessary re-renders
export default memo(Footer);
