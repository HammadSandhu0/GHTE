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

const Home = () => {
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
      heading: "Complete Power, Security, and IT Solutions",
      titleKey: "main_page_why_choose_title",
      descriptionKey: "main_page_why_choose_content",
      description:
        "At Gulf Horizon Telecom Est, we provide a large variety of services, containing uninterrupted power supply (UPS) systems, cybersecurity solutions, CCTV systems, and the highest working IT and networking equipment. We have a commitment to smooth operations for businesses in Saudi Arabia with assisting, trusted solutions for each requirement.",
    },
    {
      heading: "Expertise and Experience You Can Trust",
      titleKey: "main_page_expertise_and_experience_title",
      descriptionKey: "main_page_expertise_and_experience_content",
      description:
        "With more than 17 years of experience, we have fully more than 1,000 projects, earning the belief of 400+ long-term clients. Our team provides high-quality, customized solutions using digital technologies, guaranteeing that your power, security, and IT infrastructure work smoothly and safely.",
    },
    {
      heading: "End-to-End Services and Support",
      titleKey: "main_page_end_to_end_services_title",
      descriptionKey: "main_page_end_to_end_services_content",
      description:
        "From installation to post-sales support, Gulf Horizon Telecom Est provides 24/7 customer service and expert assistance in every step of your project. We partner with guiding brands such as Schneider Electric, HikVision, and Sony to offer top-class products and guarantee your structure's longevity and trust.",
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
              data-translate-key="welcome"
              variants={headingVariants}
            >
              Welcome to Gulf Horizon Telecom Est
            </motion.h3>
            <motion.h2
              className="text-3xl sm:text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-secondary mt-2"
              data-translate-key="welcome_heading"
              variants={headingVariants}
            >
              Explore how Gulf Horizon Telecom Est can help you achieve your
              goals.
            </motion.h2>
            <motion.p
              className="text-white text-lg lg:text-xl mt-4"
              data-translate-key="welcome_description"
              variants={paragraphVariants}
            >
              Your One-Stop Engineering Solution for Power, Security & IT Across
              the Kingdom. At Gulf Horizon Telecom Est, we are best at providing
              perfect and reliable solutions for power security systems, IT
              infrastructure, and advanced security technologies.
            </motion.p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <motion.div variants={buttonVariants}>
                <PrimaryBtn
                  href=""
                  text="Get Started"
                  datatranslatekey="primary_btn_text1"
                />
              </motion.div>
              <motion.div variants={buttonVariants}>
                <TransparentBtn
                  href=""
                  text="View Projects"
                  datatranslatekey="primary_btn_text2"
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
