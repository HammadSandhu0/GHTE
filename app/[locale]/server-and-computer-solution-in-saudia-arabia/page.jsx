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
    absolute: "Load Bank Rental Saudi Arabia | Sale AC & DC Load Banks",
  },
  description:
    "Load Bank Rental Saudi Arabia for AC & DC applications. Ideal for generator testing, industrial use, and more. Get tailored rental solutions and expert services.",
};

const page = () => {
  const pageHeader = {
    title: "Server and Computer Solutions",
    titleKey: "title_servers_computers",
    backto: "Home",
    backtokey: "home",
    breadcrumbs: [
      {
        name: "Server and Computer Solutions",
        titlekey: "title_servers_computers",
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/serverbanner.png",
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
        name: "Racks and Power Distribution Units (PDUs)",
        titleKey: "title_racks",
        link: "/racks-and-power-distribution-units-in-saudi-arabia",
      },
    ],
  };

  const mainPageContent = {
    images: ["/server1.png", "/server2.png", "/server3.png"],
    heading: "High-Performance Server and Computer Solutions",
    datatranslatekeytitle: "high_performance_server_title",
    description:
      "At Gulf Horizon Telecom Est, we are proud to offer you top-class server and computer solutions that monitor the versatile requirements of businesses in Saudi Arabia. With the guidance of many experts in providing the highest working servers, robust firewalls, and top-class desktop computers and laptops, we are committed to ensuring your business works smoothly by increasing quality and safety.",
    datatranslatekeydescription: "high_performance_server_intro",

    products: {
      productTitle: "Our Services",
      datatranslatekey: "our_services_title",
      details: [
        {
          name: "High-Performance Servers",
          titleKey: "high_performance_servers_title",
          descriptionKey: "high_performance_servers_description",
          description:
            "Allow your business with many latest server solutions that are made for reliability, measurability and regulation. Enterprise-Grade Servers: best for modifying and managing the sensitive issues of business operations with safe data storage and increasing the working power.Rack-Mounted Servers: perfect for businesses with space limitations that provide optimized performance for different applications.Blade Servers: A close-packed solution for undertaking needed maximum efficiency and assisting power.Server Installation and Setup: Expert services with commitment to the smooth movement of servers monitor to your business requirements. Custom Server Design: construct servers that range excellently with your business purposes.",
        },
        {
          name: "Robust Firewall Solutions",
          titleKey: "robust_firewall_solutions_title",
          descriptionKey: "robust_firewall_solutions_description",
          description:
            "Save your business with digital firewall security systems constructed to secure your networks against cyber threats.Next-Gen Firewalls: Complete security for advanced businesses, containing  AI-driven threat perception.Enterprise-Grade Firewalls: make for broad scale networks, guarantee to provide you safe data exchange and uninterrupted operations.Small Business Firewall Solutions: Customized and trusted for protection for lower-level businesses.",
        },
        {
          name: "Desktop Computers and Laptops",
          titleKey: "desktop_computers_and_laptops_title",
          descriptionKey: "desktop_computers_and_laptops_description",
          description:
            "Explore your team's productivity with desktop computers and laptops to guide your operational requirements.Business Desktop Computers: High-potency and trusted systems best for office work.Portable Laptops: Low-weight and powerful laptops for professionals at work.Custom Hardware Solutions: Desktops and laptops put in to manage your particular workloads.Reliable Support: guide with hardware selection, system, and Maintenance and arrangement.",
        },
        {
          name: "Server Integration and Maintenance",
          titleKey: "server_integration_and_maintenance_title",
          descriptionKey: "server_integration_and_maintenance_description",
          description:
            "Commitment to smooth operations with our complete server perception and maintenance services:Server and Computer Systems Integration: manage your infrastructure with a merged solution.Ongoing Maintenance: frequently updates and guides systems to ensure your systems work smoothly.Troubleshooting and Repairs: fast solutions with any technical challenges",
        },
        {
          name: "Industries We Serve",
          titleKey: "server_industries_we_serve_title",
          descriptionKey: "server_industries_we_serve_description",
          description:
            "Gulf Horizon Telecom Est pleasure serves to introduce a complete range of industries within Saudi Arabia:Corporate Offices: The highest working servers are available for smooth business operations.Educational Institutions: Provide remarkable and trusted desktops and laptops for students and staff.Retail Businesses: Firewall solutions for safe and preventive transactions.Healthcare Organizations: traditional systems for maintaining critical data safely.",
        },
      ],
    },
  };

  const benefitItems = {
    heading:
      "Empowering Your Business with Local Expertise and Advanced Technology",
    titleKey: "empowering_business_title",
    descriptionKey: "empowering_business_description",
    description:
      "We bring localized knowledge and cutting-edge technology to businesses across Saudi Arabia and the MENA region, offering comprehensive solutions from consultation to continuous support. With partnerships with top industry brands, we provide systems that guarantee the highest performance and security for your business.",
    details: [
      {
        icon: "/icon-service-benefit-1.svg",
        heading: "Localized Expertise",
        titleKey: "localized_expertise_title",
        descriptionKey: "localized_expertise_description",
        description:
          "Our team understands the technological challenges businesses face across Saudi Arabia and the MENA region, providing customized solutions for local requirements.",
      },
      {
        icon: "/icon-service-benefit-2.svg",
        heading: "Cutting-Edge Technology",
        titleKey: "cutting_edge_technology_title",
        descriptionKey: "cutting_edge_technology_description",
        description:
          "Partnering with industry leaders like HP and Dell to deliver state-of-the-art systems, ensuring superior performance, security, and reliability for your business.",
      },
      {
        icon: "/icon-service-benefit-3.svg",
        heading: "Comprehensive End-to-End Support",
        titleKey: "comprehensive_end_to_end_support_title",
        descriptionKey: "comprehensive_end_to_end_support_description",
        description:
          "Offering a complete package of services, from initial consultation and system setup to ongoing support and continuous improvements, ensuring long-term success.",
      },
    ],
  };

  const whychooseus = [
    {
      heading: "High-Performance Servers for Your Business Needs",
      titleKey: "server_high_performance_title",
      descriptionKey: "why_server_high_performance_description",
      description:
        "Gulf Horizon Tele Est offers high-performance servers, including rack-mounted and blade servers designed for enterprise infrastructure. Whether you need scalable solutions for growing businesses or reliable systems, we provide customized server solutions for smooth operations.",
    },
    {
      heading: "Complete Business Desktop and Laptop Solutions",
      titleKey: "why_desktop_laptop_title",
      descriptionKey: "why_desktop_laptop_description",
      description:
        "We provide desktops for productivity and laptops for business professionals, ensuring your team has the right tools to excel. Our high-speed desktops for enterprises and portable laptops for remote work enhance productivity and efficiency.",
    },
    {
      heading: "Advanced Firewall Security for Network Protection",
      titleKey: "why_firewall_security_title",
      descriptionKey: "why_firewall_security_description",
      description:
        "With increasing cyber risks, Gulf Horizon Tele Est offers next-gen firewalls and enterprise-grade firewalls for secure networks. Our firewall systems protect your network and ensure the safety of your sensitive data and resources.",
    },
  ];

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.gulfhorizontele.com/server-and-computer-solution-in-saudia-arabia"
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
