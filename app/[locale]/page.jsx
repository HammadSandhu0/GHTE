"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import PrimaryBtn from "@/components/PrimaryBtn";
import TransparentBtn from "@/components/TransparentBtn";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectsSection from "@/components/ProjectSection";
import CtaBox from "@/components/CtaBox";
import VendorSlider from "@/components/Vendor";
import ContactUs from "@/components/ContactUs";
import TransitionEffect from "@/components/Loader";
import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations("HomePage");
  const t2 = useTranslations("MainPageWhyChoose");
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Increased duration for smoother animation
        staggerChildren: 0.4, // Slower stagger
        ease: [0.25, 0.8, 0.25, 1], // Smoother cubic bezier easing
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
      transition: {
        duration: 0.8,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };

  const whychooseus = [
    {
      heading: `${t2("main_page_why_choose_title")}`,
      description: `${t2("main_page_why_choose_content")}`,
    },
    {
      heading: `${t2("main_page_expertise_and_experience_title")}`,
      description: `${t2("main_page_expertise_and_experience_content")}`,
    },
    {
      heading: `${t2("main_page_end_to_end_services_title")}`,
      description: `${t2("main_page_end_to_end_services_content")}`,
    },
  ];

  return (
    <>
      <TransitionEffect />
      <div className="relative overflow-hidden bg-cover bg-center bg-no-repeat md:mt-10 md:mx-10 md:rounded-[40px] px-4">
        <Navbar />
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            id="myVideo"
            loading="lazy"
          >
            <source src="/herogb.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative mx-auto sm:px-6 lg:px-8 py-[150px] sm:py-[150px] md:py-[240px] text-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          <div className="max-w-5xl mx-auto">
            <motion.h3
              className="text-secondary sm:text-lg md:text-xl font-semibold"
              variants={headingVariants}
            >
              {t("title")}
            </motion.h3>
            <motion.h2
              className="text-3xl sm:text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-secondary mt-2"
              variants={headingVariants}
            >
              {t("maintitle")}
            </motion.h2>
            <motion.p
              className="text-white text-lg lg:text-xl mt-4"
              variants={paragraphVariants}
            >
              {t("description")}
            </motion.p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <motion.div variants={buttonVariants}>
                <PrimaryBtn
                  href="/contact"
                  text={t("getstarted")}
                  datatranslatekey="primary_btn_text1"
                />
              </motion.div>
              <motion.div variants={buttonVariants}>
                <TransparentBtn
                  href="/client-projects"
                  text={t("viewprojects")}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <About />
      <Portfolio />
      <WhyChooseUs whychooseus={whychooseus} />
      <ProjectsSection />
      <CtaBox />
      <VendorSlider />
      <ContactUs />
    </>
  );
};

export default Home;
