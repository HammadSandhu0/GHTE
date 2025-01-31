"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const ContactUs = () => {
  const t = useTranslations("Contact");

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  // State for button loading
  const [loading, setLoading] = useState(false);
  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
    try {
      // Post data to your API endpoint
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}`,
        formData
      );
      console.log(response.data);
      toast.success(t("form.success"), {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      // Clear the form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error(t("form.error"), {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <motion.div
      className="bg-light bg-center bg-cover py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Contact Sidebar */}
          <motion.div
            className="bg-primary text-center rounded-3xl p-0 pb-0 "
            variants={containerVariants}
          >
            {/* Sidebar content */}
            <motion.div
              className="bg-primary text-center rounded-3xl p-8 pb-0"
              variants={containerVariants}
            >
              {/* Phone Info */}
              <motion.div className="my-8" variants={containerVariants}>
                <img
                  src="/icon-phone.svg"
                  alt="Phone Icon"
                  className="mx-auto w-12 mb-4"
                />
                <p className="text-white opacity-75 font-semibold text-lg">
                  {t("Support")}
                </p>
                <h3 className="text-white text-2xl font-semibold mt-2">
                  {t("phone")}
                </h3>
              </motion.div>

              {/* Email Info */}
              <motion.div
                className="my-8 flex flex-col items-center justify-center"
                variants={containerVariants}
              >
                <img
                  src="/icon-mail.svg"
                  alt="Mail Icon"
                  className="mx-auto w-12 mb-4"
                />
                <p className="text-white opacity-75 font-semibold text-lg">
                  {t("write-to-us")}
                </p>
                <h3 className="text-white text-xl xl:text-2xl font-semibold mt-2">
                  {t("email")}
                </h3>
              </motion.div>

              {/* Robot Image */}
              <motion.div
                className="mx-auto w-32 md:w-48"
                variants={containerVariants}
              >
                <img
                  src="/robotphone.png"
                  alt="Robot Phone"
                  className="grayscale hover:grayscale-0 transition"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2 bg-white rounded-3xl p-8 lg:p-14"
            variants={containerVariants}
          >
            <motion.div className="mb-8" variants={containerVariants}>
              <h3 className="text-secondary sm:text-lg md:text-xl font-semibold">
                {t("title")}
              </h3>
              <motion.h2
                className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary"
                variants={headingVariants}
              >
                {t("maintitle")}
              </motion.h2>
            </motion.div>

            <motion.form
              id="inquiry-form"
              className="space-y-6"
              onSubmit={handleSubmit}
              variants={containerVariants}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-primary"
                  placeholder={t("placeHolder-name")}
                  required
                  variants={paragraphVariants}
                />
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-primary"
                  placeholder={t("placeHolder-email")}
                  required
                  variants={paragraphVariants}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-primary"
                  placeholder={t("placeHolder-phone")}
                  required
                  variants={paragraphVariants}
                />
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-primary"
                  placeholder={t("placeHolder-subject")}
                  required
                  variants={paragraphVariants}
                />
              </div>

              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-primary"
                placeholder={t("placeHolder-message")}
                required
                variants={paragraphVariants}
              ></motion.textarea>

              <div className="flex justify-start">
                <motion.button
                  type="submit"
                  disabled={loading} // Disable button when loading
                  className={`group relative text-white flex items-center justify-between py-3 px-8 rounded-xl border-light border-[1px] ${
                    loading ? "bg-gray-400" : "bg-secondary"
                  } overflow-hidden transition-all duration-300`}
                  variants={buttonVariants}
                >
                  <span className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                  <span className="relative z-10">
                    {loading ? "Sending..." : t("submit-btn")}
                  </span>
                  {!loading && (
                    <img
                      src="/arrow.svg"
                      alt="svg"
                      className="ml-2 relative z-10 transform transition-transform duration-300 group-hover:translate-x-2"
                    />
                  )}
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
      {/* React Toastify container */}
      <ToastContainer />
    </motion.div>
  );
};

export default ContactUs;
