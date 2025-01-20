import CtaBox from "@/components/CtaBox";
import TransitionEffect from "@/components/Loader";
import PageHeader from "@/components/PageHeader";
import ServiceBenefit from "@/components/ServiceBenefit";
import ServiceSingle from "@/components/ServiceSingle";
import VendorSlider from "@/components/Vendor";
import WhyChooseUs from "@/components/WhyChooseUs";
import Head from "next/head";
import React from "react";

export const metadata = {
  title: {
    absolute:
      "Automatic Voltage Regulator Services in Saudi Arabia | Gulf Horizon Telecom Est",
  },
  description:
    "Find top-quality AVRs at Gulf Horizon Telecom Est, Saudi Arabia. Choose Automatic Voltage Regulator from 220V, 3-phase, and generator-specific models.",
};

const page = () => {
  const pageHeader = {
    title: "Automatic Voltage Regulator (AVR) Services",
    titleKey: "title_avrs",
    backto: "Home",
    backtokey: "home",
    breadcrumbs: [
      {
        name: "Automatic Voltage Regulator (AVR) Services",
        titlekey: "title_avrs",
        ink: "/automatic-voltage-regulator-services-Saudi-Arabia",
        active: true,
      },
    ],
    backgroundImage: "/avrbanner.png",
  };
  const Sidebarcategories = {
    heading: "Other Power Products",
    titleKey: "other_power_products_title",
    details: [
      {
        name: "Batteries",
        titleKey: "Batteries",
        link: "/battery-solutions-saudi-arabia",
      },
      {
        name: "UPS System",
        titleKey: "ups_system_title",
        link: "/ups-saudi-arabia",
      },
      {
        name: "Generators",
        titleKey: "Generators",
        link: "/generators-saudi-arabia",
      },
      {
        name: "Load Bank",
        titleKey: "Load_Banks",
        link: "/load-bank-rental-saudi-arabia",
      },
    ],
  };

  const mainPageContent = {
    images: ["/avr1.png", "/avr2.png", "/avr3.png"],
    heading: "Automatic Voltage Regulator (AVR) Services in Saudi Arabia",
    datatranslatekeytitle: "avr_services_title",
    description:
      "Welcome to Gulf Horizon Telecom Est, your believable partner delivering high-quality Automatic Voltage Regulators (AVRs) in Saudi Arabia. We are particular in providing remarkable voltage rule solutions to save your precious electrical devices and commit to their favourable performance. With complete distributorship of RELIABILITY POWER SYSTEMS in the MENA area, we are your business partner for trustworthy voltage regulation solutions.Suppose you’re searching for a 3-phase automatic voltage regulator, an AVR for generators, or particular models like the automatic voltage regulator Vmark. In that case, we have the expertise and products to fulfil your requirements.",
    datatranslatekeydescription: "avr_services_description",

    products: {
      productTitle: "Our Products and Services",
      datatranslatekey: "avr_products_services_title",
      details: [
        {
          name: "Fully Automatic AC Voltage Regulators",
          titleKey: "ac_voltage_regulators_title",
          descriptionKey: "ac_voltage_regulators_description",
          description:
            "Perfect for home and office work, our fully automatic AC voltage regulators deliver secure voltage results for tactful equipment. These are especially best for committed, uninterrupted operation of electronic devices like refrigerators, computers, and air conditioners.",
        },
        {
          name: "Automatic Voltage Regulators for Generators",
          titleKey: "generator_avrs_title",
          descriptionKey: "generator_avrs_description",
          description:
            "We provide AVRs planned for generators containing brands like Caterpillar and Kubota. These units secure stable voltage levels in power generation, committing the security of connected appliances and equipment.",
        },
        {
          name: "3-Phase Automatic Voltage Regulators",
          titleKey: "three_phase_avrs_title",
          descriptionKey: "three_phase_avrs_description",
          description:
            "For industrial and commercial applications, our 3-phase automatic voltage regulators provide remarkable solutions to control high voltage loads to a maximum level.",
        },
        {
          name: "Custom Solutions",
          titleKey: "custom_solutions_title",
          descriptionKey: "custom_solutions_description",
          description:
            "Require a versatile voltage regulation solution? We also offer, Automatic voltage regulator circuit schematics for houses.Particularly in AVRs for transformers and other custom applications.",
        },
      ],
    },
  };

  const benefitItems = {
    heading: "Engineering Services",
    titleKey: "engineering_services_title",
    descriptionKey: "engineering_services_description",
    description:
      "In addition to our products, we provide expert engineering services to support the design and implementation of effective voltage regulation solutions.",
    details: [
      {
        icon: "/icon-service-benefit-1.svg",
        heading: "System Design",
        titleKey: "system_design_title",
        descriptionKey: "system_design_description",
        description:
          "Optimize designs to integrate AVRs seamlessly into your existing systems.",
      },
      {
        icon: "/icon-service-benefit-2.svg",
        heading: "Installation Support",
        titleKey: "installation_support_title",
        descriptionKey: "installation_support_description",
        description:
          "Professional installation services are available to ensure your AVRs are efficiently incorporated into your system.",
      },
      {
        icon: "/icon-service-benefit-3.svg",
        heading: "Maintenance and Support",
        titleKey: "maintenance_support_title",
        descriptionKey: "maintenance_support_description",
        description:
          "Ongoing support and maintenance services to keep your systems operating efficiently.",
      },
    ],
  };

  const whychooseus = [
    {
      heading: "Monitor AVR Solutions for Every Need",
      titleKey: "avr_solutions_why_choose_for_avr_solutions_title",
      descriptionKey: "avr_solutions_why_choose_for_avr_solutions_content",
      description:
        "Gulf Horizon Tele Est provides custom-designed AVR systems and professional installation services, committed to dependable voltage regulation for the highest range of industrial, commercial, and residential applications.",
    },
    {
      heading: "State-of-the-Art AVR Technology",
      titleKey: "avr_solutions_state_of_the_art_avr_technology_title",
      descriptionKey: "avr_solutions_state_of_the_art_avr_technology_content",
      description:
        "We offer high-performance AVRs equipped with digital energy-efficient technology to provide fixed voltage and increase the trust of electrical equipment.",
    },
    {
      heading: "Trusted Expertise Across Saudi Arabia",
      titleKey: "avr_solutions_trusted_expertise_across_saudi_arabia_title",
      descriptionKey:
        "avr_solutions_trusted_expertise_across_saudi_arabia_content",
      description:
        "With the highest experience in Riyadh, Jeddah, Dammam, and Makkah, Gulf Horizon Tele Est provides expert AVR design, integration services, and continuous support as an authorized Reliability Power Systems distributor in the MENA area.",
    },
  ];

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.gulfhorizontele.com/automatic-voltage-regulator-services-Saudi-Arabia"
        />
      </Head>
      <TransitionEffect />

      <PageHeader pageHeader={pageHeader} />
      <ServiceSingle
        mainPageContent={mainPageContent}
        Sidebarcategories={Sidebarcategories}
      />

      <ServiceBenefit items={benefitItems} />
      <WhyChooseUs whychooseus={whychooseus} />
      <CtaBox />
      <VendorSlider />
    </>
  );
};

export default page;
