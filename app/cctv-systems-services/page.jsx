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
    absolute: "CCTV Systems Services | Installation, Maintenance & Solutions",
  },
  description:
    "Top-class CCTV systems services by Gulf Horizon Telecom Est: Custom observation systems, installation, maintenance, monitoring, and modern designs for homes and businesses. Secure your space today!",
};

const page = () => {
  const pageHeader = {
    title: "CCTV Systems Services",
    titleKey: "title_cctv",
    backto: "Home",
    backtokey: "home",
    breadcrumbs: [
      {
        name: "CCTV Systems Services",
        titlekey: "title_cctv",
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/cctvbanner.png",
  };
  const Sidebarcategories = {
    heading: "Other Security Products",
    titleKey: "other_security_products_title",
    details: [
      {
        name: "Access Control",
        titleKey: "Access_Control",
        link: "/access-control-systems-in-saudi-arabia",
      },
      {
        name: "Fire Fighting System",
        titleKey: "title_fire_extinguishing",
        link: "/fire-fighting-systems-solution-in-saudi-arabia",
      },
      {
        name: "Sound System",
        titleKey: "Sound_System",
        link: "/sound-system-services-in-saudi-arabia",
      },
      {
        name: "Cyber Security",
        titleKey: "Cyber_Security",
        link: "/cyber-security-services-in-saudi-arabia",
      },
    ],
  };

  const mainPageContent = {
    images: ["/cctv1.png", "/cctv2.png", "/cctv3.png"],
    heading:
      "Secure Your World with Gulf Horizon Telecom Est Advanced CCTV Systems Services",
    datatranslatekeytitle: "cctv_services_title",
    description:
      "At Gulf Horizon Telecom Est, we are particular in offering trustworthy CCTV systems that fulfill the safety requirements of homes, businesses, and industries throughout Saudi Arabia. From HikVision CCTV cameras to custom surveillance solutions, we guarantee your property is fully secure with cutting-edge technology.",
    datatranslatekeydescription: "cctv_services_description",

    products: {
      productTitle: "Our CCTV System Services",
      datatranslatekey: "our_cctv_system_services",
      details: [
        {
          name: "Installation Services",
          titleKey: "cctv_services_installation_services_title",
          descriptionKey: "cctv_services_installation_services_description",
          description:
            "Professional installation is done for indoor and outdoor CCTV systems for homes, offices, and industrial sites.Expertise in wireless CCTV system installation for advanced and stress-free systems.Particular solutions like motion detection CCTV systems and solar-powered CCTV systems.",
        },
        {
          name: "System Design & Customization",
          titleKey: "cctv_services_system_design_customization_title",
          descriptionKey:
            "cctv_services_system_design_customization_description",
          description:
            "Specialized in tailored designs for small businesses, enterprises, and residential properties.Complete planning with CCTV system requirements to guarantee your successful coverage.Expertise in IP CCTV system components and combination with some other security systems.",
        },
        {
          name: "Maintenance & Support",
          titleKey: "cctv_services_maintenance_support_title",
          descriptionKey: "cctv_services_maintenance_support_description",
          description:
            "Annual and on-requirements maintenance will be delivered for CCTV security systems to be committed for best performance.Solving problems and repairing systems for HikVision, Honeywell, and other famous brands.24-hour support for settling technical issues rapidly.",
        },
        {
          name: "Smart Surveillance Solutions",
          titleKey: "cctv_services_smart_surveillance_solutions_title",
          descriptionKey:
            "cctv_services_smart_surveillance_solutions_description",
          description:
            "Facial recognition CCTV cameras and smart analytics specially for advanced tailoring.Cloud-based CCTV systems are available for remote Access and digital rapid control.Combination of CCTV and alarm systems for increasing security.",
        },
      ],
    },
  };

  const benefitItems = {
    heading: "Comprehensive CCTV Systems for Every Environment",
    titleKey: "comprehensive_cctv_title",
    descriptionKey: "comprehensive_cctv_description",
    description:
      "Our specialized CCTV solutions are designed to meet the unique security needs of residential, commercial, and institutional spaces. From protecting homes and monitoring business operations to enhancing security in schools and healthcare facilities, we provide tailored systems to ensure safety and reliability across all environments.",
    details: [
      {
        icon: "/icon-service-benefit-1.svg",
        heading: "Residential Security",
        titleKey: "residential_security_title",
        descriptionKey: "residential_security_description",
        description:
          "Safeguard your home with advanced CCTV camera systems designed for optimal safety and peace of mind.",
      },
      {
        icon: "/icon-service-benefit-2.svg",
        heading: "Commercial Monitoring",
        titleKey: "commercial_monitoring_title",
        descriptionKey: "commercial_monitoring_description",
        description:
          "Comprehensive surveillance solutions for offices, retail stores, and factories, ensuring secure and efficient operations.",
      },
      {
        icon: "/icon-service-benefit-3.svg",
        heading: "Specialized Industry Applications",
        titleKey: "specialized_industry_applications_title",
        descriptionKey: "specialized_industry_applications_description",
        description:
          "Customized CCTV systems for schools, campuses, hospitals, and clinics, enhancing safety and monitoring in educational and healthcare environments.",
      },
    ],
  };

  const whychooseus = [
    {
      heading: "Complete CCTV Services and Solutions",
      titleKey: "cctv_solutions_why_choose_for_cctv_solutions_title",
      descriptionKey: "cctv_solutions_why_choose_for_cctv_solutions_content",
      description:
        "Gulf Horizon Tele Est offers a complete range of services, from professional CCTV system design and installation to ongoing maintenance. We provide customized solutions for both businesses and homes, ensuring comprehensive surveillance coverage.",
    },
    {
      heading: "Cutting-Edge Technology",
      titleKey: "cctv_solutions_cutting_edge_technology_title",
      descriptionKey: "cctv_solutions_cutting_edge_technology_content",
      description:
        "As an authorized trader of HikVision CCTV systems, Gulf Horizon Tele Est offer high-definition cameras, motion detection, and facial recognition capacity. Our smart surveillance systems combine digital analytics to increase safety and operational organization.",
    },
    {
      heading: "Expert Installation and Support Nationwide",
      titleKey:
        "cctv_solutions_expert_installation_and_support_nationwide_title",
      descriptionKey:
        "cctv_solutions_expert_installation_and_support_nationwide_content",
      description:
        "Gulf Horizon Tele Est provides reliable CCTV installations around Riyadh, Jeddah, Dammam, and Makkah, with expert system troubleshooting and annual maintenance services committed to the best performance throughout the year.",
    },
  ];

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.gulfhorizontele.com/cctv-systems-services"
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
