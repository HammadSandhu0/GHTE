"use client";
import React, { useState, useCallback, memo } from "react";
import axios from "axios";
import { useTranslations } from "next-intl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import {
  containerVariants,
  headingVariants,
  paragraphVariants,
  buttonVariants,
  motion,
} from "@/utils/animations";
import { Description, Heading, SubHeading } from "./Headings";

// Memoized Sidebar component
const ContactSidebar = memo(({ t }) => (
  <motion.div
    className="bg-primary text-center rounded-3xl p-0 pb-0"
    variants={containerVariants}
  >
    <div className="p-8 pb-0">
      <motion.div className="my-8" variants={containerVariants}>
        <Image
          src="/icon-phone.svg"
          alt="Phone Icon"
          width={48}
          height={48}
          className="mx-auto mb-4"
        />
        <Description className="text-white">{t("Support")}</Description>
        <SubHeading>{t("phone")}</SubHeading>
      </motion.div>

      {/* Email Info */}
      <motion.div
        className="my-8 flex flex-col items-center justify-center"
        variants={containerVariants}
      >
        <Image
          src="/icon-mail.svg"
          alt="Mail Icon"
          width={48}
          height={48}
          className="mx-auto mb-4"
        />
        <Description className="text-white">{t("write-to-us")}</Description>
        <SubHeading>{t("email")}</SubHeading>
      </motion.div>

      {/* Robot Image */}
      <motion.div className="mx-auto w-32 md:w-48" variants={containerVariants}>
        <Image
          src="/main/robotphone.webp"
          alt="Robot Phone"
          width={192}
          height={192}
          className="grayscale hover:grayscale-0 transition"
        />
      </motion.div>
    </div>
  </motion.div>
));

// Form Input component
const FormInput = memo(
  ({ type, name, value, onChange, placeholder, required = true }) => (
    <motion.input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-primary"
      placeholder={placeholder}
      required={required}
      variants={paragraphVariants}
    />
  )
);

// Form component
const ContactForm = memo(
  ({ t, formData, handleInputChange, handleSubmit, loading }) => (
    <motion.div
      className="lg:col-span-2 bg-white rounded-3xl p-8 lg:p-14"
      variants={containerVariants}
    >
      <motion.div className="mb-8" variants={containerVariants}>
        <SubHeading>{t("title")}</SubHeading>
        <Heading className="!text-primary">{t("maintitle")}</Heading>
      </motion.div>

      <motion.form
        id="inquiry-form"
        className="space-y-6"
        onSubmit={handleSubmit}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={t("placeHolder-name")}
          />
          <FormInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={t("placeHolder-email")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder={t("placeHolder-phone")}
          />
          <FormInput
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder={t("placeHolder-subject")}
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
            disabled={loading}
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
              <Image
                src="/arrow.svg"
                alt="arrow"
                width={20}
                height={20}
                className="ml-2 relative z-10 transform transition-transform duration-300 group-hover:translate-x-2"
              />
            )}
          </motion.button>
        </div>
      </motion.form>
    </motion.div>
  )
);

const ContactUs = () => {
  const t = useTranslations("Contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
        const response = await axios.post(
          `https://ghtebackend.vercel.app/api/send-email`,
          formData
        );

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
        setLoading(false);
      }
    },
    [formData, t]
  );

  return (
    <motion.section
      className="bg-light bg-center bg-cover py-8 sm:py-12 md:py-16"
      initial="hidden"
      whileinview="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container mx-auto  px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <ContactSidebar t={t} />
          <ContactForm
            t={t}
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            loading={loading}
          />
        </div>
      </div>
      <ToastContainer limit={3} />
    </motion.section>
  );
};

// Add display names for better debugging
ContactSidebar.displayName = "ContactSidebar";
FormInput.displayName = "FormInput";
ContactForm.displayName = "ContactForm";

export default memo(ContactUs);
