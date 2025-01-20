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
    absolute: "UPS Saudi Arabia - Reliable Systems & Services",
  },
  description:
    "Explore Gulf Horizon Telecom Est UPS systems in Saudi Arabia, including outdoor, modular, and industrial solutions. Authorized dealers for Schneider Electric and RPS.",
};

const page = () => {
  const pageHeader = {
    title: "UPS System",
    titleKey: "ups_system_title",
    backto: "Home",
    backtokey: "home",
    breadcrumbs: [
      {
        name: "UPS System",
        titlekey: "ups_system_title",
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/upsbanner.jpg",
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
        name: "Load Banks",
        titleKey: "Load_Banks",
        link: "/load-bank-rental-saudi-arabia",
      },
      {
        name: "Generators",
        titleKey: "Generators",
        link: "/generators-saudi-arabia",
      },
      {
        name: "AVR's",
        titleKey: "AVR",
        link: "/automatic-voltage-regulator-services-Saudi-Arabia",
      },
    ],
  };

  const mainPageContent = {
    images: ["/ups1.png", "/ups2.png", "/ups3.png"],
    heading: "UPS System",
    datatranslatekeytitle: "ups_system_title",
    description:
      "At Gulf HorizonTelecom, we consider the important role Uninterruptible Power Supply (UPS) systems play in the safety of your operations. We committed that each system is unique and designed by proper personal planning. Our considerable portfolio of UPS systems ensures uninterrupted power for a large range of applications. Preservation of loss of data and business quality mainly depends on UPS solutions. As authorized dealers for Schneider Electric and the single distributors for RELIABILITY POWER SYSTEMS in the MENA region, we guarantee to deliver high-quality products and exceptional support. With almost 20+ years of experience, a hard-working team of factory-trained engineers, and more than 500 satisfied clients, we provide dependable and customized power protection solutions to fulfil your basic requirements. During voltage fluctuations or power outages, UPS provides a huge power source that delivers electricity to various vital equipment.",
    datatranslatekeydescription: "ups_system_intro",

    products: {
      productTitle: "Our UPS Solutions Categories",
      datatranslatekey: "ups_solutions_title",
      details: [
        {
          name: "Outdoor UPS Systems",
          titleKey: "outdoor_ups_title",
          descriptionKey: "outdoor_ups_description",
          description:
            "Outdoor UPS systems are committed to remarkable power systems in severe conditions. These solutions are best for remote locations and challenging climates, providing outdoor power protection systems that take the experiment of time. Ups provide stable and clear power supply in various types of equipment.in case of power failure, it has its own stored backup data.",
        },
        {
          name: "Industrial UPS Solutions",
          titleKey: "industrial_ups_title",
          descriptionKey: "industrial_ups_description",
          description:
            "Our industrial-grade UPS systems are mainly designed for heavy-duty applications, providing robust power protection for factories, manufacturing plants, and other preferable environments. With industrial UPS solutions, your operations can always remain uninterrupted, even during power outages.",
        },
        {
          name: "Modular UPS Solutions",
          titleKey: "modular_ups_title",
          descriptionKey: "modular_ups_description",
          description:
            "Scalability is basic for businesses with developing power demands. Our modular UPS systems are manufactured to modify according to your requirements. These solutions offer moderate configurations, making them best for data centres, corporate facilities, and many more.",
        },
        {
          name: "Data Center UPS Systems",
          titleKey: "data_center_ups_title",
          descriptionKey: "data_center_ups_description",
          description:
            "Our data centre UPS solutions are designed for harsh environments within capacities that range between 600VA to 2 MVA. These high-power capacity systems guarantee your IT system to operate smoothly and safely for your vital data.",
        },
      ],
    },
  };

  const benefitItems = {
    heading: "Advantages of UPS Systems",
    titleKey: "advantages_of_ups_title",
    descriptionKey: "advantages_of_ups_description",
    description:
      "Protect your operations with the perfect UPS systems and services in Saudi Arabia. Even if you want an industrial UPS, a data centre UPS, or temporary UPS rentals, Gulf Horizon Telecom Est has you modified. Contact us today to fulfil your requirements and explain why we are the trusted choice for power protection solutions throughout the region.",
    details: [
      {
        icon: "/icon-service-benefit-1.svg",
        heading: "Data Protection",
        titleKey: "data_protection_title",
        descriptionKey: "data_protection_description",
        description:
          "it prevents data loss and also complete consumption against the powerful system.",
      },
      {
        icon: "/icon-service-benefit-2.svg",
        heading: "Equipment Protection",
        titleKey: "equipment_protection_title",
        descriptionKey: "equipment_protection_description",
        description:
          "your equipment protection is our top priority. It provides your system with power skips and surgeries.",
      },
      {
        icon: "/icon-service-benefit-3.svg",
        heading: "Compliance",
        titleKey: "compliance_title",
        descriptionKey: "compliance_description",
        description:
          "it supports companies in fulfilment of regulatory requirements and data safety.",
      },
    ],
  };

  const whychooseus = [
    {
      heading: "Comprehensive UPS Solutions",
      titleKey: "ups_solutions_why_choose_for_ups_title",
      descriptionKey: "ups_solutions_why_choose_for_ups_content",
      description:
        "Gulf Horizon Tele Est provides the highest range of services, containing custom UPS design, installation, and maintenance for data centers, industrial systems, and outdoor environments, committed to remarkable energy backup that fulfills your requirements.",
    },
    {
      heading: "Trusted Expertise and Partnerships",
      titleKey: "ups_solutions_trusted_expertise_and_partnerships_title",
      descriptionKey:
        "ups_solutions_trusted_expertise_and_partnerships_content",
      description:
        "As an authorized dealer of top brands like Schneider Electric and a distributor of Reliability Power Systems in the MENA region, we offer high-quality, basic parts of UPS systems for the highest efficiency and long-lasting use.",
    },
    {
      heading: "Nationwide Service and Flexibility",
      titleKey: "ups_solutions_nationwide_service_and_flexibility_title",
      descriptionKey:
        "ups_solutions_nationwide_service_and_flexibility_content",
      description:
        "Even if you want UPS rentals for events, industrial-grade systems, or maintenance services in Riyadh, Jeddah, Dammam, or Makkah, Gulf Horizon Tele Est is committed to fast, professional, and measuring solutions throughout Saudi Arabia.",
    },
  ];

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.gulfhorizontele.com/ups-saudi-arabia"
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
