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
      "Premium Generator Solutions in Saudi Arabia – Sales, Rentals, and Maintenance",
  },
  description:
    "Premium generator solutions in Saudi Arabia with Gulf Horizon Telecom Est. We offer portable, diesel generator sales, rentals, maintenance, and spare parts for uninterrupted power.",
};

const page = () => {
  const pageHeader = {
    title: "Reliable Generator Solutions",
    titleKey: "title_generators",
    backto: "Home",
    backtokey: "home",
    breadcrumbs: [
      {
        name: "Reliable Generator Solutions",
        titlekey: "title_generators",
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/genratorbanner.png",
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
        name: "Load Bank",
        titleKey: "Load_Banks",
        link: "/load-bank-rental-saudi-arabia",
      },
      {
        name: "AVR's",
        titleKey: "AVR",
        link: "/automatic-voltage-regulator-services-Saudi-Arabia",
      },
    ],
  };

  const mainPageContent = {
    images: ["/genrator4.png", "/genrator2.png", "/genrator3.png"],
    heading: "Reliable Generator Solutions in Saudi Arabia",
    datatranslatekeytitle: "generator_solutions_title",
    description:
      "At Gulf Horizon Telecom Est, we feel pleasure in developing your trusted partner for all types of generator solutions in Saudi Arabia. Even if you want diesel generators for industrial use, power generator rentals, or any casual maintenance, we offer unbeatable quality, trustworthy and strong support.Our team contains expert engineers and technicians guaranteeing your power systems to stand systematic, durable, and monitor to your versatile requirements.",
    datatranslatekeydescription: "generator_solutions_description",

    products: {
      productTitle: "Our Generator Solutions",
      datatranslatekey: "our_generator_solutions_title",
      details: [
        {
          name: "Generator Sales",
          titleKey: "generator_sales_title",
          descriptionKey: "generator_sales_description",
          description:
            "We provide huge ranges of generators in Saudi Arabia to fulfil your various power requirements. Diesel generators are specialized for industrial and commercial applications.Portable generators for domestic use and various events. Remarkably used generators for sale in Saudi Arabia observed and certified for quality.Our genius and awarded team guide you to select the best power generator for your requirements, ensuring you provide excellent performance and quality.",
        },
        {
          name: "Generator Rentals",
          titleKey: "generator_rentals_title",
          descriptionKey: "generator_rentals_description",
          description:
            "When you want temporary power, our generator rental services in Saudi Arabia provide customised and flexible choices, Power generator rentals range from 10 kVA to 1250 kVA.Mobile generator rental and standby generator rental solutions are specialized for events, construction, and any emergency conditions.Flexible plans containing fixed monthly packages or data usage-based billing.We offer 24/7 breakdown guidance, protective maintenance, and on-site guidance to ensure uninterrupted power supply.",
        },
        {
          name: "Maintenance Services",
          titleKey: "maintenance_services_title",
          descriptionKey: "maintenance_services_description",
          description:
            "Regular maintenance is necessary to increase the lifespan of your generator. Our generator maintenance services include the following , Diagnostics and maintained by qualified technicians.Scheduled preventive maintenance programs to minimize downtime.Complete observation ,Fluid ranges, battery condition, and time overtire systems and air inlet piping.Voltage, frequency, and pressure are also checked as per manufacturer time specifications.Our Power Care Program is committed to operating your generator at high-level performance throughout the year.",
        },
        {
          name: "Spare Parts",
          titleKey: "spare_parts_title",
          descriptionKey: "spare_parts_description",
          description:
            "We commodities original spare parts for industrial generators to decrease downtime and ensure reliability. Our listing contains elements for all famous brands, providing punctuality to your location.",
        },
        {
          name: "Why Generators Are Essential in Saudi Arabia?",
          titleKey: "generators_essential_title",
          descriptionKey: "generators_essential_description",
          description:
            "Generators take an important role in securing power disruptions in homes, businesses, and also in industrial operations. From committing smooth and reliable business operations to offering a remarkable backup plan to take part in power during emergencies, our diesel generators and power generators are essential.",
        },
      ],
    },
  };

  const benefitItems = {
    heading: "Empowering You with Specialized Generator Services",
    titleKey: "specialized_generator_services_title",
    descriptionKey: "specialized_generator_services_description",
    description:
      "Our generator services are tailored to provide reliable power solutions for diverse needs. From custom generator systems designed for domestic and industrial use to robust light tower rentals for outdoor projects, we ensure excellence in every solution. ",
    details: [
      {
        icon: "/icon-service-benefit-1.svg",
        heading: "Custom Generator Systems",
        titleKey: "custom_generator_systems_title",
        descriptionKey: "custom_generator_systems_description",
        description:
          "Our engineers plan, install, and commission customized generator systems to monitor your power needs.",
      },
      {
        icon: "/icon-service-benefit-2.svg",
        heading: "Light Tower Rentals",
        titleKey: "light_tower_rentals_title",
        descriptionKey: "light_tower_rentals_description",
        description:
          "For outdoor events and construction sites, our light tower rental services deliver strong and remarkable lighting solutions.",
      },
      {
        icon: "/icon-service-benefit-3.svg",
        heading: "Emergency Standby Generators",
        titleKey: "emergency_standby_generators_title",
        descriptionKey: "emergency_standby_generators_description",
        description:
          "Stay ready for unpredicted supply with our standby generator rental services. We guarantee your business or home stays powered during harsh times.",
      },
    ],
  };

  const whychooseus = [
    {
      heading: "Proven Expertise in Generator Solutions",
      titleKey:
        "generator_solutions_why_choose_for_trusted_generator_solutions_title",
      descriptionKey:
        "generator_solutions_why_choose_for_trusted_generator_solutions_content",
      description:
        "With many years of experience and a developing portfolio of the happiest clients, Gulf Horizon Tele Est has accepted itself as a guide in providing trusted and systematic generator solutions around Saudi Arabia.",
    },
    {
      heading: "Comprehensive Generator Services",
      titleKey: "generator_solutions_comprehensive_generator_services_title",
      descriptionKey:
        "generator_solutions_comprehensive_generator_services_content",
      description:
        "From custom system design and installation to maintenance and genuine spare parts supply, we deliver a complete variety of services that manage to fulfill your industrial and commercial energy requirements.",
    },
    {
      heading: "Dedicated Support and Maintenance",
      titleKey: "generator_solutions_dedicated_support_and_maintenance_title",
      descriptionKey:
        "generator_solutions_dedicated_support_and_maintenance_content",
      description:
        "Our relationship isn't finished with project fulfillment. Gulf Horizon Tele Est provides existing maintenance contracts, annual servicing packages, and occasion repair services to commit your generators to operate at the highest performance.",
    },
  ];

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.gulfhorizontele.com/generators-saudi-arabia"
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
