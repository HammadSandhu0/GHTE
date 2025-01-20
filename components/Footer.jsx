"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import SocialIcons from "./SocialIcons";

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

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-primary pt-4 sm:pt-6 lg:pt-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is in view
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
                Having a prominent position in the Power Electronics market,
                GHTE has partnered with world-renowned leading manufacturers to
                provide our valued customers with quality products and systems
                for long-term service.
              </p>
              <SocialIcons />
            </motion.div>

            {/* Our Services Section */}
            <motion.div variants={sectionVariants}>
              <div className="mb-4 font-bold uppercase tracking-widest text-secondary text-xl">
                Our Services
              </div>
              <nav className="flex flex-col gap-4">
                {[
                  "Load Bank",
                  "Access Control",
                  "Generators",
                  "Cyber Security",
                ].map((service, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="text-white flex items-center justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                    variants={linkVariants}
                  >
                    <img src="/arrow.svg" alt="" />
                    {service}
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Company Section */}
            <motion.div variants={sectionVariants}>
              <div className="mb-4 font-bold uppercase tracking-widest text-secondary text-xl">
                Company
              </div>
              <nav className="flex flex-col gap-4">
                {["About Us", "Projects", "Company Profile", "Contact Us"].map(
                  (item, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="text-white flex items-center justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                      variants={linkVariants}
                    >
                      <img src="/arrow.svg" alt="" />
                      {item}
                    </Link>
                  )
                )}
              </nav>
            </motion.div>

            {/* Contact Us Section */}
            <motion.div variants={sectionVariants}>
              <div className="mb-4 font-bold uppercase tracking-widest text-secondary text-xl">
                Contact Us
              </div>
              <nav className="flex flex-col gap-4">
                <Link
                  href="#"
                  className="text-white flex items-center justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                  variants={linkVariants}
                >
                  <img src="/icon-phone.svg" alt="" className="w-6 h-6" />
                  +966 122 873 071
                </Link>
                <Link
                  href="#"
                  className="text-white flex items-center justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                  variants={linkVariants}
                >
                  <img src="/icon-mail.svg" alt="" className="w-6 h-6" />
                  Info@gulfhorizontele.com
                </Link>
                <Link
                  href="#"
                  className="text-white flex items-start justify-start gap-x-1 transition duration-100 hover:text-secondary text-[16px] font-semibold"
                  variants={linkVariants}
                >
                  <img src="/icon-location.svg" alt="" className="w-6 h-6" />
                  Gulf Horizon Telecom Est, Level 7, Al Murjanah Tower, Prince
                  Sultan St., Jeddah 21433
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
