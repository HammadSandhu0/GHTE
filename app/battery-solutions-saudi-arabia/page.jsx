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
    absolute: "Battery Solutions - Reliable Energy Systems & Services",
  },
  description:
    "Premium battery solutions, including Lithium-ion, VRLA, and industrial batteries. Expert system design, maintenance, and custom energy-efficient options.",
};

const page = () => {
  const pageHeader = {
    title: "Reliable Battery Solutions",
    titleKey: "title_batteries",
    backto: "Home",
    backtokey: "home",
    breadcrumbs: [
      {
        name: "Reliable Battery Solutions",
        titlekey: "title_batteries",
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/batterybanner.png",
  };
  const Sidebarcategories = {
    heading: "Other Power Products",
    titleKey: "other_power_products_title",
    details: [
      {
        name: "Load Bank",
        titleKey: "Load_Banks",
        link: "/load-bank-rental-saudi-arabia",
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
        name: "AVR's",
        titleKey: "AVR",
        link: "/automatic-voltage-regulator-services-Saudi-Arabia",
      },
    ],
  };

  const mainPageContent = {
    images: ["/battery.png", "/battery2.png", "/battery3.png"],
    heading: "Battery Solutions by Gulf Horizon Telecom Est.",
    datatranslatekeytitle: "battery_solutions_title",
    description:
      "At Gulf Horizon Telecom Est, we are perfect in offering top-class battery solutions to fulfil the wide energy requirements at small-scale and also large-scale applications. Even if you require power for industrial systems, commercial systems, or any personal devices, our high-production batteries guarantee reliable energy storage and acting power supply.",
    datatranslatekeydescription: "battery_solutions_description",

    products: {
      productTitle: "Our Comprehensive Battery Solutions",
      datatranslatekey: "comprehensive_battery_solutions_title",
      details: [
        {
          name: "Valve-Regulated Sealed Lead Acid (VRLA) Batteries",
          titleKey: "vrla_batteries_title",
          descriptionKey: "vrla_batteries_description",
          description:
            "Our VRLA batteries are perfect for maintenance-free power solutions, plan for long term service life and are also trustworthy. These batteries are perfect for many backup systems, industrial setups, and complicated organizational systems.",
        },
        {
          name: "Lithium-Ion Batteries",
          titleKey: "lithium_ion_batteries_title",
          descriptionKey: "lithium_ion_batteries_description",
          description:
            "With top class energy density and fast-charging qualities, lithium-ion batteries are best for modern applications requiring high power and normal size.",
        },
        {
          name: "Traction Batteries",
          titleKey: "traction_batteries_title",
          descriptionKey: "traction_batteries_description",
          description:
            "Our resistance batteries provide sustainable energy resources for forklifts, also for electric vehicles, and industrial machinery, guaranteeing continuous performance in required environments.",
        },
        {
          name: "Central Battery Systems",
          titleKey: "central_battery_systems_title",
          descriptionKey: "central_battery_systems_description",
          description:
            "Our central battery systems deliver smooth backup power for commercial and industrial system installation, providing energy-efficient and affordable solutions.",
        },
        {
          name: "Battery System Design and Installation",
          titleKey: "battery_design_installation_title",
          descriptionKey: "battery_design_installation_description",
          description:
            "Our experts build traditional battery systems to monitor your energy requirements, committed efficiency and capacity for long-time usage.",
        },
        {
          name: "Battery Testing and Commissioning",
          titleKey: "battery_testing_commissioning_title",
          descriptionKey: "battery_testing_commissioning_description",
          description:
            "We plan diligent testing and commissioning to guarantee your battery systems by fulfilling all performance and security levels.",
        },
        {
          name: "Health Checks and Maintenance",
          titleKey: "health_checks_maintenance_title",
          descriptionKey: "health_checks_maintenance_description",
          description:
            "Timely battery health checks and maintenance services help expand the lifetime of your batteries, committing consistent and uninterrupted powerful systems.",
        },
        {
          name: "Troubleshooting and Engineering",
          titleKey: "troubleshooting_engineering_title",
          descriptionKey: "troubleshooting_engineering_description",
          description:
            "Our factory-trained engineers offer complete guidance in problematic and engineering services to settle any technical issues and continue favourable performance.",
        },
      ],
    },
  };

  const benefitItems = {
    heading: "Powering Industries with Advanced Battery Solutions",
    titleKey: "Powering_Industries_title",
    descriptionKey: "Powering_Industries_description",
    description:
      "Our battery solutions are designed to meet diverse energy needs with cutting-edge technology and reliability. From maintenance-free VRLA and high-energy lithium-ion batteries to heavy-duty traction and forklift batteries, we deliver power for various applications. With customized energy-efficient systems, we ensure seamless operations for both domestic and industrial use.",
    details: [
      {
        icon: "/icon-service-benefit-1.svg",
        heading: "VRLA and Lithium-Ion Batteries",
        titleKey: "vrla_and_lithium_ion_title",
        descriptionKey: "vrla_and_lithium_ion_description",
        description:
          "Maintenance-free VRLA batteries and high-energy lithium-ion batteries designed to support modern energy systems and wide-ranging applications.",
      },
      {
        icon: "/icon-service-benefit-2.svg",
        heading: "Traction and Forklift Batteries",
        titleKey: "traction_and_forklift_title",
        descriptionKey: "traction_and_forklift_description",
        description:
          "Heavy-duty traction batteries for industrial equipment and electric vehicles, along with forklift batteries for seamless operational efficiency.",
      },
      {
        icon: "/icon-service-benefit-3.svg",
        heading: "Customized Energy-Efficient Systems",
        titleKey: "customized_energy_efficient_title",
        descriptionKey: "customized_energy_efficient_description",
        description:
          "Tailored battery solutions for domestic and industrial use, ensuring optimal energy efficiency and performance.",
      },
    ],
  };

  const whychooseus = [
    {
      heading: "End-to-End Battery Solutions",
      titleKey:
        "battery_solutions_why_is_your_trusted_partner_for_battery_solutions_title",
      descriptionKey:
        "battery_solutions_why_is_your_trusted_partner_for_battery_solutions_content",
      description:
        "Gulf Horizon Tele Est delivers customized battery design, installation, and maintenance for different industries, particularly lithium-ion batteries, VRLA batteries, and industrial energy storage solutions, to meet your particular requirements.",
    },
    {
      heading: "Exclusive Distributorship and Expert Team",
      titleKey:
        "battery_solutions_exclusive_distributorship_and_expert_team_title",
      descriptionKey:
        "battery_solutions_exclusive_distributorship_and_expert_team_content",
      description:
        "With Reliability Power Systems battery distributor in MENA and an authorized battery dealer in Saudi Arabia, we provide top-class products assisted by our factory-trained engineers to guarantee management performance and reliability.",
    },
    {
      heading: "Nationwide Coverage and Complete Support",
      titleKey:
        "battery_solutions_nationwide_coverage_and_complete_support_title",
      descriptionKey:
        "battery_solutions_nationwide_coverage_and_complete_support_content",
      description:
        "With services spanning battery solutions in Riyadh, VRLA battery supply in Jeddah, industrial battery maintenance in Dammam, and lithium-ion distribution in Makkah, Gulf Horizon Tele Est is committed to smooth, high-class guidance around Saudi Arabia.",
    },
  ];

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.gulfhorizontele.com/battery-solutions-saudi-arabia"
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
