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
      "Sound System Services in Saudi Arabia | Gulf Horizon Telecom Est",
  },
  description:
    "Premium sound system services in Saudi Arabia by Gulf Horizon Telecom Est. From home theatres to car audio systems, we offer top brands like Sony, Bose, and JBL. Professional installation and affordable Pricing are guaranteed.",
};

const page = () => {
  const pageHeader = {
    title: "Sound System Services",
    titleKey: "title_sound_system",
    backto: "Home",
    backtokey: "home",
    breadcrumbs: [
      {
        name: "Sound System Services",
        titlekey: "title_sound_system",
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/soundbanner.png",
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
        name: "Cyber Security",
        titleKey: "Cyber_Security",
        link: "/cyber-security-services-in-saudi-arabia",
      },
      {
        name: "Fire Fighting System",
        titleKey: "title_fire_extinguishing",
        link: "/fire-fighting-systems-solution-in-saudi-arabia",
      },
    ],
  };

  const mainPageContent = {
    images: ["/sound1.png", "/sound2.png", "/sound3.png"],
    heading: "Sound System Services in Saudi Arabia",
    datatranslatekeytitle: "sound_system_services_title",
    description:
      "At Gulf Horizon Telecom Est, we are perfect for delivering the highest quality sound system solutions throughout Saudi Arabia. So, if you want to modernize your home entertainment system, furnish a mosque, or increase your car’s audio, our complete range of services is a guide to fulfilling your requirements. With a commitment to excellence, we guarantee you to achieve the perfect sound experience at any time.",
    datatranslatekeydescription: "sound_system_intro",

    products: {
      productTitle: "Our Sound System Services",
      datatranslatekey: "our_sound_system_services_title",
      details: [
        {
          name: "Home Sound Systems",
          titleKey: "home_sound_systems_title",
          home_sound_systems_description:
            "Change your living room into a cinema-by experience with our home theatre sound systems. Even if you want a Sony 5.1 surround sound system, a Bose sound system, or even an LG home theatre, we’ve received you to cover.",
          descriptionKey: "home_sound_systems_description",
          description:
            "Change your living room into a cinema-by experience with our home theatre sound systems. Even if you want a Sony 5.1 surround sound system, a Bose sound system, or even an LG home theatre, we’ve received you to cover. Popular Brands: Sony, Bose, JBL, LG, Panasonic. Integrated Solutions: We are specialized in providing an integrated home sound system for a smooth audio experience. Smart Features: have a command of your audio system with mobile applications such as the Sony Sound System App.",
        },
        {
          name: "Car Sound Systems",
          titleKey: "car_sound_systems_title",
          descriptionKey: "car_sound_systems_description",
          description:
            "Increase your driving practice with transparent, clear audio from the highest-level car sound systems. We also offer and install systems for all types of vehicles, such as Lexus LX 570 sound systems and Toyota Avalon sound systems. Premium Brands: Alpine, Rockford, Bose. Customized Installations: monitor system that will be perfect for your car’s interior. High-Performance Packages: various choices such as Bose car sound system packages and top 10 car sound systems.",
        },
        {
          name: "Public Address and Mosque Sound Systems",
          titleKey: "public_address_and_mosque_sound_systems_title",
          descriptionKey: "public_address_and_mosque_sound_systems_description",
          description:
            "We are perfect for making and installing sound systems for public places and mosques, with a commitment to clear communication and top-quality sound systems.",
        },
        {
          name: "Multi-Room and Business Audio Solutions",
          titleKey: "multi_room_and_business_audio_solutions_title",
          descriptionKey: "multi_room_and_business_audio_solutions_description",
          description:
            "Hosting an event? Rent high-buffer sound systems from our service for any occasion.Event Solutions: specialize for Weddings, conferences, and private parties.Affordable Rentals: changeable plans that are set according to your budget.Quick Setup: Professional installation and disassembling.",
        },
        {
          name: "Sound System Rentals",
          titleKey: "sound_system_rentals_title",
          descriptionKey: "sound_system_rentals_description",
          description:
            "Hosting an event? Rent high-buffer sound systems from our service for any occasion.Event Solutions: specialize for Weddings, conferences, and private parties.Affordable Rentals: changeable plans that are set according to your budget.Quick Setup: Professional installation and disassembling.",
        },
      ],
    },
  };

  const benefitItems = {
    heading: "Transforming Audio Experiences with Leading Brands",
    titleKey: "transforming_audio_experiences_title",
    descriptionKey: "transforming_audio_experiences_description",
    description:
      "Explore a diverse range of sound systems from top brands like Sony, Bose, JBL, Rockford, and Bosch. Whether you need immersive home audio, durable outdoor setups, or professional public address solutions, we provide the perfect system to match your requirements and elevate your sound experience.",
    details: [
      {
        icon: "/icon-service-benefit-1.svg",
        heading: "High-Performance Options",
        titleKey: "high_performance_options_title",
        descriptionKey: "high_performance_options_description",
        description:
          "From Sony’s powerful 22000-watt sound systems to Bose’s Solo 5 TV soundbars, we offer advanced audio solutions to enhance your experience.",
      },
      {
        icon: "/icon-service-benefit-2.svg",
        heading: "Durable and Versatile Systems",
        titleKey: "durable_and_versatile_systems_title",
        descriptionKey: "durable_and_versatile_systems_description",
        description:
          "JBL provides long-lasting, high-potency sound, while Rockford delivers exceptional audio for cars and outdoor setups.",
      },
      {
        icon: "/icon-service-benefit-3.svg",
        heading: "Industry-Leading Public Address Systems",
        titleKey: "industry_leading_public_address_systems_title",
        descriptionKey: "industry_leading_public_address_systems_description",
        description:
          "Bosch stands as a leader in delivering reliable and high-quality public address systems for various environments.",
      },
    ],
  };

  const whychooseus = [
    {
      heading: "Proven Excellence in Load Bank Services",
      titleKey: "load_bank_solutions_why_choose_for_load_bank_solutions_title",
      descriptionKey:
        "load_bank_solutions_why_choose_for_load_bank_solutions_content",
      description:
        "Gulf Horizon Tele Est particularly in AC and DC load bank testing, sales, and rentals, delivering high-working solutions for industrial, commercial, and data center applications throughout Saudi Arabia.",
    },
    {
      heading: "Complete Load Bank Solutions",
      titleKey: "load_bank_solutions_complete_load_bank_solutions_title",
      descriptionKey:
        "load_bank_solutions_complete_load_bank_solutions_content",
      description:
        "From custom system design to professional installation and reliable maintenance, we provide a large variety of services to monitor productive and systematic load testing for backup energy systems and generators.",
    },
    {
      heading: "Nationwide Coverage and Expertise",
      titleKey: "load_bank_solutions_nationwide_coverage_and_expertise_title",
      descriptionKey:
        "load_bank_solutions_nationwide_coverage_and_expertise_content",
      description:
        "With services that will be accessible in Riyadh, Jeddah, Dammam, and Makkah, Gulf Horizon Tele Est provides temporary rental options, durable load banks for sale, and real-world load testing solutions to fulfill your particular requirements.",
    },
  ];

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.gulfhorizontele.com/sound-system-services-in-saudi-arabia"
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
