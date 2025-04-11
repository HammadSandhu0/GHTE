import { useState, useEffect, memo, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { containerVariants, headingVariants, motion } from "@/utils/animations";
import {
  CardHeading,
  Description,
  Header,
  Heading,
  SubHeading,
} from "./Headings";

// Memoized CountCard component
const CountCard = memo(({ icon, heading, text, count, unit, subtext }) => (
  <motion.div
    className="relative group border rounded-[50px] shadow-lg p-7 py-10 flex flex-col items-start justify-between overflow-hidden"
    variants={headingVariants}
  >
    <div className="relative pb-6 mb-6 space-y-6">
      <Image
        src={icon}
        alt={heading}
        width={50}
        height={50}
        loading="lazy"
        quality={75}
      />
      <CardHeading>{heading}</CardHeading>
      <Description>{text}</Description>
    </div>
    <div className="relative z-10 text-start border-t py-5 w-full">
      <Heading className="!text-primary">
        {count}
        {unit}
      </Heading>
      <Description>{subtext}</Description>
    </div>
  </motion.div>
));

const WhyChooseUs = ({ whychooseus }) => {
  const t = useTranslations("Mainwhychoose");
  const [counts, setCounts] = useState([0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const targetValues = [1000, 500, 99];
  const intervalsRef = useRef([]);

  useEffect(() => {
    if (!isVisible) return;

    const animationDuration = 2000;
    const frameRate = 16;
    const totalFrames = animationDuration / frameRate;
    intervalsRef.current = targetValues.map((targetValue, index) => {
      const increment = Math.ceil(targetValue / totalFrames);
      let currentValue = 0;

      return setInterval(() => {
        currentValue = Math.min(currentValue + increment, targetValue);

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = currentValue;
          return newCounts;
        });
        if (currentValue >= targetValue) {
          clearInterval(intervalsRef.current[index]);
        }
      }, frameRate);
    });
    return () => {
      intervalsRef.current.forEach((interval) => clearInterval(interval));
    };
  }, [isVisible]);

  return (
    <motion.section
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      onViewportEnter={() => setIsVisible(true)}
    >
      <div className="container mx-auto py-8 px-4 md:px-6 my-20 space-y-20">
        <Header>
          <SubHeading>{t("title")}</SubHeading>
          <Heading className="!text-primary">{t("subtitle")}</Heading>
          <Description className="!text-textcolor">
            {t("description")}
          </Description>
        </Header>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-3"
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
              subtext={t(
                index === 0
                  ? "numberOfProjectsTitle"
                  : index === 1
                  ? "happy_ClientsTitle"
                  : "client_SatisfactionTitle"
              )}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
CountCard.displayName = "CountCard";

export default memo(WhyChooseUs);
