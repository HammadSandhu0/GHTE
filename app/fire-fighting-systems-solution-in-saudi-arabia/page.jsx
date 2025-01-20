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
    absolute: "Fire Fighting Systems Solution in Saudi Arabia",
  },
  description:
    "Explore Gulf Horizon Telecom Est expert fire fighting systems solution, including alarms, sprinklers, and extinguishers, customized for safety and Compliance in Saudi Arabia.",
};

const page = () => {
  const pageHeader = {
    title: "Fire Fighting Systems",
    titleKey: "title_fire_extinguishing",
    backto: "Home",
    backtokey: "home",
    breadcrumbs: [
      {
        name: "Fire Fighting Systems",
        titlekey: "title_fire_extinguishing",
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/firebanner.png",
  };
  const Sidebarcategories = {
    heading: "Other Security Products",
    titleKey: "other_security_products",
    details: [
      {
        name: "CCTV",
        titleKey: "CCTV",
        link: "/cctv-systems-services",
      },
      {
        name: "Access Control",
        titleKey: "Access_Control",
        link: "/access-control-systems-in-saudi-arabia",
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
    images: ["/fire1.png", "/fire2.png", "/fire3.png"],
    heading: "Fire Fighting Systems Solution by Gulf Horizon Telecom Est.",
    datatranslatekeytitle: "fire_fighting_systems_title",
    description:
      "At Gulf Horizon Telecom Est, we provide modern fire fighting systems to save lives and properties in Saudi Arabia. Our solutions are monitored in the residential, commercial, and industrial environments, and we are committed to complying with the level of security standards. With a skilled team of experts and modern technology, we provide everything from fire alarm systems to digital fire suppression solutions..",
    datatranslatekeydescription: "fire_fighting_systems_description",

    products: {
      productTitle: "Our Fire Fighting Solutions",
      datatranslatekey: "OurFireFightingSolutions",
      details: [
        {
          name: "Fire Alarm Systems",
          titleKey: "fire_alarm_systems_title",
          descriptionKey: "fire_alarm_systems_description",
          description:
            "Our modern fire alarm systems guarantee you immediate detection, enabling you to receive speedy responses to protect you from damage. We offer, Addressable and conventional fire alarm systems Parts like smoke detectors, heat sensors, and other control panels Take Solutions from trusted brands such as Gent fire alarm systems",
        },
        {
          name: "Sprinkler Systems",
          titleKey: "sprinkler_systems_title",
          descriptionKey: "sprinkler_systems_description",
          description:
            "We are particular in making and fitting fire fighting sprinkler systems that provide real-time fire suppression. Best for, Warehouses Factories Office buildings Our systems contain calculation-based designs for favorable efficiency.",
        },
        {
          name: "Fire Extinguishers",
          titleKey: "fire_extinguishers_title",
          descriptionKey: "fire_extinguishers_description",
          description:
            "We deliver the largest range of extinguishers monitor to your particular requirements, CO2, dry chemical, and foam extinguishers Movable and fixed models Fire extinguisher prices in KSA that is according to all types of budget",
        },
        {
          name: "Fire Suppression Systems",
          titleKey: "fire_suppression_systems_title",
          descriptionKey: "fire_suppression_systems_description",
          description:
            "Our particular suppression systems are best for controlling high-risk environments like, Server rooms Kitchens Chemical storage areas We provide solutions like as:FM200 fire suppression systemsWater mist fire fighting systemsAerosol fire suppression systems",
        },
        {
          name: "Firefighting Systems offered (Co2)",
          titleKey: "co2_fire_suppression_title",
          descriptionKey: "co2_fire_suppression_description",
          description:
            "The Carbon Dioxide (CO2) Fire Suppression System is made for the use of CO2, an engineered set nozzle agent at the separation network, a pipe reel or a combination. The CO2 System is mainly designed to fix the amount of CO2 that can be passed through pipes and nozzles.CO2 Systems is particularly set by removing oxygen from the room. The Carbon Dioxide system is most powerful when it is used in risk where an electrically non-conductive extinguishing medium is used or preferred, where the cleaning of other materials becomes a problematic condition, or where the dangerous barriers are required for the use of a gaseous agent.",
        },
        {
          name: "Fire suppression System",
          titleKey: "fire_suppression_system_general_title",
          descriptionKey: "fire_suppression_system_general_description",
          description:
            "A fire suppression system is a productive fire protection method that emits rays within 10 seconds and extinguishes fire immediately. A suppression system is a chemical fire suppression gas that extinguishes fire by detaching one side of the fire chain, which contains Oxygen, Heat and Fuel. One of the largest advantages of Firefighting systems is that a relatively minimum quantity of this chemical is used to extinguish a fire. A fire suppression system attains extinguishing levels in only ten seconds, protecting common combustible, electrical and burnable liquid fire from destroying any property. It means that some cylinders and some storage space required for FM200 cylinders are necessary features of this system.",
        },
        {
          name: "Novec Fire Suppression System",
          titleKey: "novec_fire_suppression_title",
          descriptionKey: "novec_fire_suppression_description",
          description:
            "The novec1230 fire suppression system is also called a cleaning agent fire extinguisher that was introduced into the market as a halon exchanger and HFC replacement. Novec fire suppression system includes Novec1230 fluid that has the largest margin of security for human occupation within the clean agents containing inert gas.Total flooding systems commonly have the elements in cylinders of liquid which is pressurized by nitrogen gas. Automatic detection sensors deliver when the fire is at its minimum developing stage, and it keeps out the fire in a few seconds.",
        },
      ],
    },
  };

  const benefitItems = {
    heading: "Ensuring Safety with Expert Fire Fighting Services",
    titleKey: "Ensuring_Safety_title",
    descriptionKey: "Ensuring_Safety_description",
    description:
      "Our additional services provide complete support for fire fighting systems, from regular maintenance to expert design and testing. With professional training and commissioning services, we ensure that your systems are always prepared to protect lives and property effectively and reliably.",
    details: [
      {
        icon: "/icon-service-benefit-1.svg",
        heading: "System Maintenance and Reliability",
        titleKey: "system_maintenance_title",
        descriptionKey: "system_maintenance_description",
        description:
          "Regular inspections and preventive maintenance ensure your fire fighting systems deliver consistent and optimal performance.",
      },
      {
        icon: "/icon-service-benefit-2.svg",
        heading: "Expert Design and Testing",
        titleKey: "expert_design_title",
        descriptionKey: "expert_design_description",
        description:
          "Tailored system designs for high-rise buildings and industrial setups, combined with thorough testing and commissioning for guaranteed reliability.",
      },
      {
        icon: "/icon-service-benefit-3.svg",
        heading: "Training and Preparedness",
        titleKey: "training_title",
        descriptionKey: "training_description",
        description:
          "Professional training programs by experienced teams ensure effective use of fire safety equipment in critical situations.",
      },
    ],
  };

  const whychooseus = [
    {
      heading: "Top Fire Safety Solutions",
      titleKey:
        "fire_safety_solutions_why_choose_for_fire_safety_solutions_title",
      descriptionKey:
        "fire_safety_solutions_why_choose_for_fire_safety_solutions_content",
      description:
        "Gulf Horizon Tele Est offers advanced fire safety systems, including sprinklers, alarms, extinguishers, and smoke detectors, to guarantee maximum safety for your building or industrial system.",
    },
    {
      heading: "Complete  Solutions",
      titleKey: "load_bank_solutions_complete_load_bank_solutions_title",
      descriptionKey:
        "load_bank_solutions_complete_load_bank_solutions_content",
      description:
        "From custom system design to professional installation and reliable maintenance, we provide a large variety of services to monitor productive and systematic load testing for backup energy systems and generators.",
    },
    {
      heading: "Nationwide Fire Safety Services",
      titleKey: "fire_safety_solutions_nationwide_services_title",
      descriptionKey: "fire_safety_solutions_nationwide_services_content",
      description:
        "We provide services across Saudi Arabia, ensuring full implementation and compliance with fire safety regulations. From consultations to systems installation and maintenance in Riyadh, Jeddah, Dammam, and Makkah, we are committed to your safety.",
    },
  ];

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.gulfhorizontele.com/fire-fighting-systems-solution-in-saudi-arabia"
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
