"use client";
import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const PageHeader = ({ pageHeader }) => {
  const router = useRouter();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeInOut" },
  };

  const breadcrumbVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { delay: 0.3, duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="relative bg-black bg-opacity-40 md:rounded-3xl md:m-10 m-0">
      <div className="absolute inset-0">
        <Image
          src={pageHeader.backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={80} // Optimize image quality
          priority // Load this image first
          className="md:rounded-3xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 md:rounded-3xl"></div>
      </div>

      <Navbar />
      <div className="container mx-auto px-4 py-40">
        <motion.div
          className="text-center relative z-10"
          initial="initial"
          animate="animate"
          {...fadeIn}
        >
          {/* Page Header Box Start */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight"
            data-translate-key={pageHeader.titleKey}
          >
            {pageHeader.title}
          </motion.h1>
          <nav>
            <motion.ol
              className="flex justify-center space-x-4 text-sm md:text-lg font-semibold"
              {...breadcrumbVariants}
            >
              {pageHeader.breadcrumbs.map((breadcrumb, index) => (
                <li
                  key={index}
                  className={`capitalize ${
                    breadcrumb.active
                      ? "text-secondary font-bold text-2xl"
                      : "text-white"
                  }`}
                >
                  <button
                    onClick={() => {
                      router.push(breadcrumb.link);
                    }}
                    className="text-white"
                    data-translate-key={pageHeader.backtokey}
                  >
                    {pageHeader.backto}
                  </button>{" "}
                  /{" "}
                  <span data-translate-key={pageHeader.titleKey}>
                    {breadcrumb.name}
                  </span>
                </li>
              ))}
            </motion.ol>
          </nav>
          {/* Page Header Box End */}
        </motion.div>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string,
      active: PropTypes.bool,
    })
  ),
  backgroundImage: PropTypes.string.isRequired,
};

PageHeader.defaultProps = {
  title: "About Us",
  breadcrumbs: [
    { name: "home", link: "", active: false },
    { name: "about us", link: "", active: true },
  ],
  backgroundImage: "https://via.placeholder.com/1920x1080", // Placeholder image
};

export default PageHeader;
