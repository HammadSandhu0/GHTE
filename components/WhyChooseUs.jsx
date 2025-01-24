"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

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

const CountCard = ({ icon, heading, text, count, unit, subtext }) => {
  return (
    <motion.div
      className="relative group border rounded-[50px] shadow-lg p-7 py-10 flex flex-col items-start justify-between overflow-hidden"
      variants={headingVariants}
    >
      <div className="relative z-10 pb-6 mb-6">
        <img src={icon} alt={heading} />
        <h3 className="text-xl lg:text-2xl font-medium mt-10 mb-5 text-primary">
          {heading}
        </h3>
        <p className="text-textcolor text-base sm:text-lg">{text}</p>
      </div>
      <div className="relative z-10 text-start border-t py-5 w-full">
        <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
          {count}
          {unit}
        </h3>
        <p className="text-textcolor mt-3 text-lg font-semibold">{subtext}</p>
      </div>
    </motion.div>
  );
};

const WhyChooseUs = ({ whychooseus }) => {
  const t = useTranslations("Mainwhychoose");
  const [counts, setCounts] = useState([0, 0, 0]);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const startCountAnimation = (index, endValue) => {
    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(endValue / (duration / 16));
    const interval = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(interval);
      }
      setCounts((prev) => {
        const newCounts = [...prev];
        newCounts[index] = start;
        return newCounts;
      });
    }, 16);
  };

  useEffect(() => {
    if (inView) {
      const values = [1000, 500, 99];
      values.forEach((value, index) => startCountAnimation(index, value));
    }
  }, [inView]);

  return (
    <motion.div
      id="why-choose-us"
      className="py-16"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div className="text-center mb-12" variants={headingVariants}>
          <h3 className="text-secondary sm:text-lg md:text-xl font-semibold">
            {t("title")}
          </h3>
          <h2 className="text-3xl sm:text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-primary my-8">
            {t("subtitle")}
          </h2>
          <motion.p
            className="text-textcolor text-base sm:text-lg md:w-1/2 w-full mx-auto"
            variants={paragraphVariants}
          >
            {t("description")}
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {whychooseus.map((item, index) => (
            <CountCard
              key={index}
              icon={`/icon-why-choose-${index + 1}.svg`}
              heading={item.heading}
              text={item.description}
              count={counts[index]}
              unit={index === 2 ? "%" : "+"}
              subtext={
                index === 0
                  ? `${t("numberOfProjectsTitle")}`
                  : index === 1
                  ? `${t("happy_ClientsTitle")}`
                  : `${t("client_SatisfactionTitle")}`
              }
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;
