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
    absolute: "Networking Solutions and Switches | Gulf Horizon Tele EST",
  },
  description:
    "Discover Gulf Horizon Tele’s highest working networking solutions. We offer switches, cables, patch panels, and many more to guarantee you for safe and trusted connection for your business.",
};

const page = () => {
  const pageHeader = {
    title: "Networking / Switches",
    titleKey: "title_networking_switches",
    backto: "Home",
    backtokey: "home",
    breadcrumbs: [
      {
        name: "Networking / Switches",
        titlekey: "title_networking_switches",
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/networkbanner.png",
  };
  const Sidebarcategories = {
    heading: "Other IT Products",
    titleKey: "other_IT_products",
    details: [
      {
        name: "Server's and  Computer's solutions",
        titleKey: "title_servers_computers",
        link: "/server-and-computer-solution-in-saudia-arabia",
      },
      {
        name: "Racks and Power Distribution Units (PDUs)",
        titleKey: "title_racks",
        link: "/racks-and-power-distribution-units-in-saudi-arabia",
      },
    ],
  };

  const mainPageContent = {
    images: ["/network1.png", "/network2.png", "/network3.png"],
    heading: "Networking and Switches Solutions",
    datatranslatekeytitle: "networking_and_switches_solutions_title",
    description:
      "At Gulf Horizon Tele (Gulf Horizon Tele EST), we are proudly delivering you complete networking and switch solutions guidance that will meet your business’s basic needs. We aim to assist you in assembling and managing a high-production, changeable, and safe network infrastructure. From small businesses to large enterprises, we provide industry-supreme products and services to manage connectivity and guarantee to provide you with uninterrupted operations.",
    datatranslatekeydescription: "networking_and_switches_solutions_intro",

    products: {
      productTitle: "Our Networking Products and Solutions",
      datatranslatekey: "our_networking_products_and_solutions_title",
      details: [
        {
          name: "High-Performance Network Switches",
          titleKey: "high_performance_network_switches_title",
          descriptionKey: "high_performance_network_switches_description",
          description:
            "Even if you need an organized network system or a purely modern infrastructure, our network switches provide you with a smooth data transmitter. Our portfolio consists on:Managed and Unmanaged Switches,24-Port PoE Network Switches,Gigabit and Fiber Optic Switches,Industrial-Grade Switches,These products assist you with serious functions like VLANs, network monitoring, and stackable configurations committed to scalability and organization.",
        },
        {
          name: "Cabling Solutions (CAT 6 and Fiber Optics)",
          titleKey: "cabling_solutions_title",
          descriptionKey: "cabling_solutions_description",
          description:
            "Strong and trusted cabling is the backbone of any robust network. We offer:CAT 6 Ethernet Cables: speedily, interference-free data transmission necessary for your business requirements.Fiber Optic Cables: best for high-frequencies applications needed for long-distance and tight communication skills.",
        },
        {
          name: "Patch Cords and Patch Panels",
          titleKey: "patch_cords_and_patch_panels_title",
          descriptionKey: "patch_cords_and_patch_panels_description",
          description:
            "Manage and smoothness your network with our:Patch Cords: Flexible and long-lasting solutions with connecting devices well organized.Patch Panels: clearly enable management and increase performance with our top-quality panels.",
        },
        {
          name: "Network Security Products",
          titleKey: "network_security_products_title",
          descriptionKey: "network_security_products_description",
          description:
            "Safe your business against cyber fear with our state-of-the-art safety solutions, containing:Firewalls,Network Access Control Products,Intrusion Detection",
        },
        {
          name: "Software Defined Networking",
          titleKey: "software_defined_networking_title",
          descriptionKey: "software_defined_networking_description",
          description:
            "Transform your network management with SDN solutions, allow centralized control, enhance speed, and slow down operational costs.",
        },
        {
          name: "Customized Networking for Unique Needs",
          titleKey: "customized_networking_for_unique_needs_title",
          descriptionKey: "customized_networking_for_unique_needs_description",
          description:
            "We also meet particular industries needs, like as Production Networks: we provide perfect Solutions for factories and industrial systems.Network Monitoring: equipment that is used for real-time perception of network performance.Wireless Networking Solutions: Smooth connection with digital work area.",
        },
      ],
    },
  };

  const benefitItems = {
    heading: "Empowering Connectivity with Advanced Networking Solutions",
    titleKey: "empowering_connectivity_title",
    descriptionKey: "empowering_connectivity_intro",
    description:
      "We provide a wide range of premium networking products, trusted partnerships with global leaders, and customized solutions tailored to your needs. Our expert support ensures your network operates efficiently and reliably, delivering seamless connectivity for your business.",
    details: [
      {
        icon: "/icon-service-benefit-1.svg",
        heading: "Diverse Product Range",
        titleKey: "diverse_product_range_title",
        descriptionKey: "diverse_product_range_description",
        description:
          "Offering a wide selection of high-quality networking products, including switches, cables, patch panels, and more, to meet all your connectivity needs.",
      },
      {
        icon: "/icon-service-benefit-2.svg",
        heading: "Global Partnerships and Technology",
        titleKey: "global_partnerships_and_technology_title",
        descriptionKey: "global_partnerships_and_technology_description",
        description:
          "Collaborating with industry leaders like Cisco, Huawei, TP-Link, and Legrand to provide access to the latest and most reliable networking technologies.",
      },
      {
        icon: "/icon-service-benefit-3.svg",
        heading: "Tailored Solutions and Expert Support",
        titleKey: "tailored_solutions_and_expert_support_title",
        descriptionKey: "tailored_solutions_and_expert_support_description",
        description:
          "Designing customized networking systems to align with your goals, backed by exceptional technical guidance to ensure smooth and reliable performance.",
      },
    ],
  };

  const whychooseus = [
    {
      heading: "High-Performance Networking Products",
      titleKey: "why_networking_high_performance_title",
      descriptionKey: "why_networking_high_performance_description",
      description:
        "Gulf Horizon Tele Est offers high-performance switches, CAT 6 cables, and fiber optics for seamless data transmission and robust network performance. Whether you need managed switches for network optimization or fiber optic cables for high-bandwidth applications, we deliver network infrastructure solutions tailored to your business needs.",
    },
    {
      heading: "Expert Network Design and Installation Services",
      titleKey: "why_networking_design_title",
      descriptionKey: "why_networking_design_description",
      description:
        "Our team specializes in custom network design services and networking switch installation to ensure your network infrastructure is organized and scalable. We offer reliable network switches and provide patch cords and patch panel solutions to streamline and organize your network effectively.",
    },
    {
      heading: "Scalable and Reliable Networking Solutions",
      titleKey: "why_networking_scalable_title",
      descriptionKey: "why_networking_scalable_description",
      description:
        "Whether you need Layer 2 and Layer 3 switches for advanced network management or PoE switches for power delivery, Gulf Horizon Tele Est provides scalable networking solutions for businesses of all sizes. Our customized solutions ensure long-term reliability and optimal performance.",
    },
  ];

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.gulfhorizontele.com/networking-solutions"
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
