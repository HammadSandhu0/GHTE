"use client";
import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import { useTranslations } from "next-intl";
import { containerVariants, sectionVariants, motion } from "@/utils/animations";

const Footer = memo(() => {
  const t = useTranslations("Footer");

  return <FooterContainer t={t} />;
});

const FooterContainer = memo(({ t }) => {
  return (
    <motion.footer
      className="bg-primary pt-4 sm:pt-6 lg:pt-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="pt-12">
        <div className="container mx-auto  px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
            <AboutSection t={t} />
            <ServicesSection t={t} />
            <CompanySection t={t} />
            <ContactSection t={t} />
          </div>
          <CopyrightSection />
        </div>
      </div>
    </motion.footer>
  );
});

const AboutSection = memo(({ t }) => (
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
));

const ServicesSection = memo(({ t }) => {
  const services = [
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
  ];

  return (
    <motion.div variants={sectionVariants}>
      <div className="mb-4 font-bold uppercase tracking-widest text-secondary text-xl">
        {t("OurServicesTitle")}
      </div>
      <NavLinks links={services} />
    </motion.div>
  );
});

const CompanySection = memo(({ t }) => {
  const companyLinks = [
    { href: "/about", label: t("Company.about") },
    { href: "/client-projects", label: t("Company.projects") },
    { href: "/companyprofile.pdf", label: t("Company.companyProfile") },
    { href: "/conatct", label: t("Company.contact") },
  ];

  return (
    <motion.div variants={sectionVariants}>
      <div className="mb-4 font-bold uppercase tracking-widest text-secondary text-xl">
        {t("CompanyTitle")}
      </div>
      <NavLinks links={companyLinks} />
    </motion.div>
  );
});

const ContactSection = memo(({ t }) => {
  const contactLinks = [
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
  ];

  return (
    <motion.div variants={sectionVariants}>
      <div className="mb-4 font-bold uppercase tracking-widest text-secondary text-xl">
        {t("ContactUsTitle")}
      </div>
      <NavLinks links={contactLinks} useCustomIcon={true} />
    </motion.div>
  );
});

const NavLinks = memo(({ links, useCustomIcon = false }) => (
  <nav className="flex flex-col gap-4">
    {links.map((link, index) => (
      <Link
        key={index}
        href={link.href}
        className="text-white flex items-center justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
      >
        <Image
          src={useCustomIcon ? link.icon : "/arrow.svg"}
          alt=""
          width={useCustomIcon ? 24 : 16}
          height={useCustomIcon ? 24 : 16}
        />
        {link.label}
      </Link>
    ))}
  </nav>
));

const CopyrightSection = memo(() => (
  <motion.div
    className="border-t py-8 text-center text-[16px] text-white"
    variants={sectionVariants}
  >
    Copyright © 2024 GHTE. All Rights Reserved.
  </motion.div>
));

// Add display names for better debugging
Footer.displayName = "Footer";
FooterContainer.displayName = "FooterContainer";
AboutSection.displayName = "AboutSection";
ServicesSection.displayName = "ServicesSection";
CompanySection.displayName = "CompanySection";
ContactSection.displayName = "ContactSection";
NavLinks.displayName = "NavLinks";
CopyrightSection.displayName = "CopyrightSection";

export default Footer;
