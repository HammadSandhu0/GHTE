import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const FeatureCard = ({ title, link }) => (
  <div className="p-2 w-full">
    <div className="bg-light hover:bg-light/50 transition-all rounded flex p-4 h-full items-center cursor-pointer">
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        className="text-primary w-6 h-6 flex-shrink-0 mr-4"
        viewBox="0 0 24 24"
      >
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        <path d="M22 4L12 14.01l-3-3"></path>
      </svg>
      <Link href={`${link}`} className="title-font font-medium">
        {title}
      </Link>
    </div>
  </div>
);

const FeaturedLinks = () => {
  const t = useTranslations("Services");
  const features = [
    {
      title: t("services.ups_system.title"),
      link: "/ups-saudi-arabia",
    },
    {
      title: t("services.load_bank.title"),
      link: "/load-bank-rental-saudi-arabia",
    },
    {
      title: t("services.Battery_Solutions.title"),
      link: "/battery-solutions-saudi-arabia",
    },
    {
      title: t("services.AVR.title"),
      link: "/automatic-voltage-regulator-services-Saudi-Arabia",
    },
    {
      title: t("services.Generator.title"),
      link: "/generators-saudi-arabia",
    },
    {
      title: t("services.CCTV.title"),
      link: "/cctv-systems-services",
    },
    {
      title: t("services.Access_Control.title"),
      link: "/access-control-systems-in-saudi-arabia",
    },
    {
      title: t("services.Fire_Fighting.title"),
      link: "/fire-fighting-systems-solution-in-saudi-arabia",
    },
    {
      title: t("services.Sound_System.title"),
      link: "/sound-system-services-in-saudi-arabia",
    },
    {
      title: t("services.Cyber_Security.title"),
      link: "/cyber-security-services-in-saudi-arabia",
    },
    {
      title: t("services.Server_Computer.title"),
      link: "/server-and-computer-solution-in-saudia-arabia",
    },
    {
      title: t("services.Networking_Switches.title"),
      link: "/networking-solutions",
    },
    {
      title: t("services.Racks_Power.title"),
      link: "/racks-and-power-distribution-units-in-saudi-arabia",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            {t("heading")}
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLinks;
