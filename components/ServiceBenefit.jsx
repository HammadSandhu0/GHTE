import React from "react";
import {
  containerVariants,
  buttonVariants,
  motion,
  useInView,
  headingVariants,
} from "@/utils/animations";
import { CardHeading, Description, Header, Heading } from "./Headings";

const ServiceBenefit = ({ items }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Define icons that can be used by index
  const icons = [
    "/icons/icon-service-benefit-1.svg",
    "/icons/icon-service-benefit-2.svg",
    "/icons/icon-service-benefit-3.svg",
  ];

  // Use a hardcoded banner URL - this is now a static string
  const bannerUrl = items.banner || "/upsbanner.jpg";

  return (
    <motion.div
      className="service-benefit relative py-36 bg-fixed bg-cover"
      style={{ backgroundImage: `url(${bannerUrl})` }}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <Header>
          <Heading>{items.heading}</Heading>
          <Description className="text-white">{items.description}</Description>
        </Header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.details.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 py-10 flex flex-col items-start cursor-pointer"
              variants={headingVariants}
            >
              <div className="mb-2">
                {/* Use either the item's icon if provided, or fall back to the icons array */}
                <img
                  src={item.icon || icons[index % icons.length]}
                  alt={item.heading}
                  className="mx-auto"
                />
              </div>
              <div>
                <CardHeading>{item.heading}</CardHeading>
                <Description>{item.description}</Description>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceBenefit;
