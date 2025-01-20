"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import LanguageTranslator from "./LanguageTranslator";
import { useRouter } from "next/navigation";

const CustomLink = ({
  href,
  title,
  className = "",
  toggle,
  datatranslatekey,
}) => {
  const handleClick = () => {
    if (toggle) toggle();
  };

  return (
    <Link
      href={`${href}`}
      className={`${className} relative group text-[18px] text-light hover:text-secondary`}
      onClick={handleClick}
      data-translate-key={datatranslatekey}
    >
      {title}
      <span
        className={`inline-block w-0 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-linear duration-700`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const dropdownmenus = [
    { menuname: "Power", datatranslatekey: "power" },
    { menuname: "Security", datatranslatekey: "security" },
    { menuname: "IT", datatranslatekey: "IT" },
  ];

  const [open, setOpen] = useState(false); // Mobile menu state
  const [activeDropdown, setActiveDropdown] = useState(null); // Track which dropdown is open

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
    setActiveDropdown(null); // Close all dropdowns when menu closes
  };

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header className="w-full px-4 py-10 font-medium flex items-center justify-between lg:px-16 border-b-2 border-light/20 relative z-20">
      {/* Logo */}
      <div className="text-dark font-bold text-xl">
        <img src="/logo.png" alt="" className="w-36" />
      </div>

      {/* Mobile menu toggle button */}
      <button
        className="flex flex-col justify-center items-center xl:hidden bg-primary p-3 px-2 rounded-md"
        onClick={toggleMenu}
      >
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            open ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            open ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* Desktop Menu */}
      <nav className="hidden xl:flex space-x-8 px-5 items-center">
        <CustomLink href="/" title="Home" datatranslatekey="home" />
        <CustomLink href="/about" title="About" datatranslatekey="about" />

        {/* Desktop Dropdowns */}
        {dropdownmenus.map((category) => (
          <div
            key={category.menuname}
            className="relative group text-light text-[18px] flex items-center"
          >
            <div
              data-translate-key={category.datatranslatekey}
              className="flex items-center gap-x-2 group-hover:font-semibold cursor-pointer"
            >
              {category.menuname}
            </div>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L12 15L17 10"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="absolute hidden group-hover:block bg-primary text-light shadow-lg py-4 rounded-lg w-[200px] -left-1 top-7">
              {/* Dropdown links for categories */}
              {category.menuname === "Power" && (
                <>
                  <Link
                    href="/ups-saudi-arabia"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                    data-translate-key="ups_system"
                  >
                    UPS System
                  </Link>
                  <Link
                    href="/battery-solutions-saudi-arabia"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                    data-translate-key="Batteries"
                  >
                    Batteries
                  </Link>
                  <Link
                    href="/generators-saudi-arabia"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                    data-translate-key="Generators"
                  >
                    Generators
                  </Link>
                  <Link
                    href="/load-bank-rental-saudi-arabia"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                    data-translate-key="Load_Banks"
                  >
                    Load Bank
                  </Link>
                  <Link
                    href="/automatic-voltage-regulator-services-Saudi-Arabia"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                    data-translate-key="AVR"
                  >
                    AVR's
                  </Link>
                </>
              )}
              {category.menuname === "Security" && (
                <>
                  <Link
                    href="/cctv-systems-services"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                    data-translate-key="cctv"
                  >
                    CCTV
                  </Link>
                  <Link
                    href="/access-control-systems-in-saudi-arabia"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                    data-translate-key="access_control"
                  >
                    Access Control
                  </Link>
                  <Link
                    href="/fire-fighting-systems-solution-in-saudi-arabia"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                    data-translate-key="firefighting"
                  >
                    Fire-Fighting
                  </Link>
                  <Link
                    href="/cyber-security-services-in-saudi-arabia"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                    data-translate-key="Cybersecurity"
                  >
                    Cyber Security
                  </Link>
                  <Link
                    href="/sound-system-services-in-saudi-arabia"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                    data-translate-key="soundsystem"
                  >
                    Sound System
                  </Link>
                </>
              )}
              {category.menuname === "IT" && (
                <>
                  <Link
                    href="/racks-and-power-distribution-units-in-saudi-arabia"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                    data-translate-key="racks"
                  >
                    Racks
                  </Link>
                  <Link
                    href="/networking-solutions"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                    data-translate-key="Networkingswitches"
                  >
                    Networking / Switches
                  </Link>
                  <Link
                    href="/server-and-computer-solution-in-saudia-arabia"
                    className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                    data-translate-key="Servercomputer"
                  >
                    Server's / Computer's
                  </Link>
                </>
              )}
            </div>
          </div>
        ))}
        <CustomLink
          href="/client-projects"
          title="Projects"
          datatranslatekey="Projects"
        />
        <CustomLink
          href="/contact"
          title="Contact Us"
          datatranslatekey="contact"
        />
        <LanguageTranslator />
      </nav>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-w-[70vw] flex flex-col justify-between items-center absolute top-96 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 rounded-lg backdrop-blur-md py-20 !transform bg-primary xl:hidden"
        >
          <CustomLink
            href="/"
            title="Home"
            toggle={closeMenu}
            className="mb-4"
            datatranslatekey="home"
          />
          <CustomLink
            href="/about"
            title="About"
            toggle={closeMenu}
            className="mb-4"
            datatranslatekey="about"
          />

          {/* Mobile Dropdowns */}
          {dropdownmenus.map((category) => (
            <div
              key={category.menuname}
              className="w-full flex flex-col items-center mb-4"
            >
              <button
                className="w-full text-center text-light flex items-center justify-center hover:text-secondary transition-all text-[18px]"
                onClick={() => toggleDropdown(category.menuname)}
                data-translate-key={category.datatranslatekey}
              >
                {category.menuname}
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {activeDropdown === category.menuname && (
                <div className="w-full flex flex-col items-center justify-center py-2 rounded-md">
                  {category.menuname === "Power" && (
                    <>
                      <Link
                        href="/ups-saudi-arabia"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                        data-translate-key="ups_system"
                      >
                        UPS System
                      </Link>
                      <Link
                        href="/battery-solutions-saudi-arabia"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                        data-translate-key="Batteries"
                      >
                        Batteries
                      </Link>
                      <Link
                        href="/generators-saudi-arabia"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                        data-translate-key="Generators"
                      >
                        Generators
                      </Link>
                      <Link
                        href="/load-bank-rental-saudi-arabia"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                        data-translate-key="Load_Banks"
                      >
                        Load Bank
                      </Link>
                      <Link
                        href="/automatic-voltage-regulator-services-Saudi-Arabia"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                        data-translate-key="AVR"
                      >
                        AVR's
                      </Link>
                    </>
                  )}
                  {category.menuname === "Security" && (
                    <>
                      <Link
                        href="/cctv-systems-services"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                        data-translate-key="cctv"
                      >
                        CCTV
                      </Link>
                      <Link
                        href="/access-control-systems-in-saudi-arabia"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                        data-translate-key="access_control"
                      >
                        Access Control
                      </Link>
                      <Link
                        href="/fire-fighting-systems-solution-in-saudi-arabia"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                        data-translate-key="firefighting"
                      >
                        Fire-Fighting
                      </Link>
                      <Link
                        href="/cyber-security-services-in-saudi-arabia"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                        data-translate-key="Cybersecurity"
                      >
                        Cyber Security
                      </Link>
                      <Link
                        href="/sound-system-services-in-saudi-arabia"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                        data-translate-key="soundsystem"
                      >
                        Sound System
                      </Link>
                    </>
                  )}
                  {category.menuname === "IT" && (
                    <>
                      <Link
                        href="/racks-and-power-distribution-units-in-saudi-arabia"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                        data-translate-key="racks"
                      >
                        Racks
                      </Link>
                      <Link
                        href="/networking-solutions"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                        data-translate-key="Networkingswitches"
                      >
                        Networking / Switches
                      </Link>
                      <Link
                        href="/server-and-computer-solution-in-saudia-arabia"
                        className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                        onClick={closeMenu}
                        data-translate-key="Servercomputer"
                      >
                        Server's / Computer's
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
          <LanguageTranslator className="bg-secondary mt-8" />
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
