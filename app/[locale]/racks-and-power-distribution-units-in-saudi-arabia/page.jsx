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
      "Best Racks and Power Distribution Units (PDUs) in Saudi Arabia | Gulf Horizon Telecom Est",
  },
  description:
    "Racks and power distribution units (PDUs) from IT systems, data centers, and businesses in Saudi Arabia. Gulf Horizon Telecom Est provides modified server racks, intelligent PDUs, and smooth and easy installation services.",
};

const page = () => {
  const pageHeader = {
    title: "Racks and Power Distribution Units (PDUs)",
    titleKey: "title_racks",
    backto: "Home",
    backtokey: "home",
    breadcrumbs: [
      {
        name: "Racks and Power Distribution Units (PDUs)",
        titlekey: "title_racks",
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/rackbanner.png",
  };
  const Sidebarcategories = {
    heading: "Other IT Products",
    titleKey: "other_IT_products",
    details: [
      {
        name: "Networking / switches",
        titleKey: "title_networking_switches",
        link: "/networking-solutions",
      },
      {
        name: "Server's and  Computer's solutions",
        titleKey: "title_servers_computers",
        link: "/server-and-computer-solution-in-saudia-arabia",
      },
    ],
  };

  const mainPageContent = {
    images: ["/rack1.png", "/rack2.png", "/rack3.png"],
    heading: "Racks and Power Distribution Units (PDUs) in Saudi Arabia",
    datatranslatekeytitle: "racks_and_pdu_title",
    description:
      "At Gulf Horizon Telecom Est, we provide top quality racks and Power Distribution Units (PDUs) made to assist data centers, IT infrastructure, and networking atmosphere. Our solutions are committed to the modified organization, relaxing and smooth, powerful management, and remarkable guidance for your business requirements throughout Saudi Arabia, which contains Riyadh, Jeddah, and Dammam",
    datatranslatekeydescription: "racks_and_pdu_intro",

    products: {
      productTitle: "Our Comprehensive Racks and PDU Solutions",
      datatranslatekey: "our_racks_and_pdu_solutions_title",
      details: [
        {
          name: "Server Racks",
          titleKey: "server_racks_title",
          descriptionKey: "server_racks_description",
          description:
            "Our server racks are perfect for housing schemes and safe from sensitive  IT equipment. Even for small offices or enterprise-level data centers, Gulf Horizon Telecom Est provides long-lasting, trusted, and managed storage solutions.",
        },
        {
          name: "Network Racks",
          titleKey: "network_racks_title",
          descriptionKey: "network_racks_description",
          description:
            "Gulf Horizon Telecom Est offers you particular network racks for routers, switches, and patch panels. Our solutions are engineered to guarantee optimal organization and are easy to use and easy to access.",
        },
        {
          name: "Power Distribution Units (PDUs)",
          titleKey: "pdu_title",
          descriptionKey: "pdu_description",
          description:
            "Our PDUs offer intelligent and trusted power distribution throughout Saudi Arabia. We are committed to uninterrupted operations for IT systems and networks.",
        },
        {
          name: "Customized Solutions for Businesses in Saudi Arabia",
          titleKey: "customized_solutions_for_businesses_title",
          descriptionKey: "customized_solutions_for_businesses_description",
          description:
            "We offer and monitor racks and PDU solutions for businesses in Riyadh, Jeddah, Dammam, and behind areas. From server rack installation to modern power distribution solutions, Gulf Horizon Telecom Est guarantees to provide your IT infrastructure work easily, smoothly and efficiently.",
        },
        {
          name: "Gulf Horizon Telecom Est - Your Partner in Racks and Power Management",
          titleKey: "gulf_horizon_partner_title",
          descriptionKey: "gulf_horizon_partner_description",
          description:
            "We provide cost-effective and reliable racks and PDUs for smooth IT infrastructure and power management throughout Saudi Arabia. Manage your data center and also networking systems with Gulf Horizon Telecom Est tailored solutions.",
        },
      ],
    },
  };

  const benefitItems = {
    heading:
      "Maximizing Efficiency and Protection with Gulf Horizon Telecom Est Racks and PDUs",
    titleKey: "maximizing_efficiency_and_protection_title",
    descriptionKey: "maximizing_efficiency_and_protection_description",
    description:
      "Our racks and PDUs offer efficient power management, robust protection for your equipment, and seamless installation services. With optimized cooling and continuous power supply, our solutions ensure your IT infrastructure runs smoothly with minimal downtime.",
    details: [
      {
        icon: "/icon-service-benefit-1.svg",
        heading: "Optimized Power and Equipment Protection",
        titleKey: "optimized_power_and_equipment_protection_title",
        descriptionKey: "optimized_power_and_equipment_protection_description",
        description:
          "Efficient power distribution for IT infrastructure, combined with durable racks that protect sensitive hardware from damage.",
      },
      {
        icon: "/icon-service-benefit-2.svg",
        heading: "Seamless Installation and Enhanced Cooling",
        titleKey: "seamless_installation_and_enhanced_cooling_title",
        descriptionKey:
          "seamless_installation_and_enhanced_cooling_description",
        description:
          "Professional installation services for server racks and PDUs, ensuring perfect airflow and optimal working conditions for your equipment.",
      },
      {
        icon: "/icon-service-benefit-3.svg",
        heading: "Minimized Downtime and Continuous Power Supply",
        titleKey: "minimized_downtime_and_continuous_power_title",
        descriptionKey: "minimized_downtime_and_continuous_power_description",
        description:
          "Trusted PDUs that ensure uninterrupted power, reducing system downtime and enhancing overall reliability.",
      },
    ],
  };

  const whychooseus = [
    {
      heading: "Tailored Racks and Power Distribution Solutions",
      titleKey: "why_racks_pdus_custom_title",
      descriptionKey: "why_racks_pdus_custom_description",
      description:
        "At Gulf Horizon Tele Est, we excel in providing customized server racks and PDUs designed to meet the specific needs of your business. Whether it's networking racks for data centers or efficient power distribution, we deliver solutions that optimize your IT infrastructure.",
    },
    {
      heading: "Reliable Installation and Maintenance Services",
      titleKey: "why_racks_pdus_reliable_title",
      descriptionKey: "why_racks_pdus_reliable_description",
      description:
        "We offer professional server rack installation and PDU setup to ensure your data center or office is fully equipped with the best storage and power management solutions. Our expert team guarantees smooth installation and long-lasting support.",
    },
    {
      heading: "High-Performance and Scalable Solutions",
      titleKey: "why_racks_pdus_high_performance_title",
      descriptionKey: "why_racks_pdus_high_performance_description",
      description:
        "We provide high-performance PDUs and durable server racks that ensure your IT systems are efficiently powered and managed. From network rack storage solutions to intelligent PDUs, Gulf Horizon Tele Est is dedicated to maximizing efficiency for your infrastructure, supported by reliable post-installation services.",
    },
  ];

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.gulfhorizontele.com/racks-and-power-distribution-units-in-saudi-arabia"
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
