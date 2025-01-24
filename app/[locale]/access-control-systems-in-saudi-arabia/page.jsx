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
      "Access Control Systems in Saudi Arabia – Gulf Horizon Telecom Est",
  },
  description:
    "Secure your premises with Gulf Horizon Telecom Est advanced access control systems in Saudi Arabia, offering biometric and cloud-based solutions.",
};

const page = () => {
  const pageHeader = {
    title: "Access Control",
    titleKey: "Access_Control",
    backto: "Home",
    backtokey: "home",
    breadcrumbs: [
      {
        name: "Access Control",
        titlekey: "Access_Control",
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/accessbanner.png",
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
    images: ["/access1.png", "/access2.png", "/access3.png"],
    heading: "Access Control Solutions in Saudi Arabia",
    datatranslatekeytitle: "access_control_title",
    description:
      "At Gulf Horizon Telecom Est, we specialize in delivering state-of-the-art access control systems to businesses and resources within Saudi Arabia. Since 2008, we have delivered digital solutions to fulfill the developing security requirements of advanced enterprises. Our expertise ranges from small offices to large-level industrial facilities, providing monitor systems that ensure favorable security and operative regulation.",
    datatranslatekeydescription: "access_control_description",

    products: {
      productTitle: "Our Access Control Offerings",
      datatranslatekey: "",
      details: [
        {
          name: "Biometric Access Control",
          titleKey: "biometric_access_control_title",
          descriptionKey: "biometric_access_control_description",
          description:
            "Commitment to accurate and safe attacks with all of our biometric systems. We specialize in Fingerprint Recognition , Facial Recognition,Iris Scanning , These digital solutions remove the risk of unofficial access with increasing user convenience.",
        },
        {
          name: "Card-Based Systems",
          titleKey: "card_based_systems_title",
          descriptionKey: "card_based_systems_description",
          description:
            "Our span of the based access systems contains smart Cards, RFID Cards, Proximity Cards, These systems are best for systematic and cost-effective access management.",
        },
        {
          name: "Mobile Access Control",
          titleKey: "mobile_access_control_title",
          descriptionKey: "mobile_access_control_description",
          description:
            "We give you Experience with the benefits of smartphones-totally based on an access control system, our qualifying users to enter establishments using their own mobile devices.",
        },
        {
          name: "Integrated Security Solutions",
          titleKey: "integrated_security_solutions_title",
          descriptionKey: "integrated_security_solutions_description",
          description:
            "Gulf Horizon Telecom Est provides access to control systems that can be smoothly interlinked with the following Intrusion Detection Systems, CCTV Camera Systems, It provides a merged platform for complete security systems.",
        },
        {
          name: "Cloud-Based Solutions",
          titleKey: "cloud_based_solutions_title",
          descriptionKey: "cloud_based_solutions_description",
          description:
            "Guide and tailor your access control system remotely with our cloud-based services. Key advantages contain Real-Time Monitoring, Scalability, Enhanced Security",
        },
        {
          name: "Industries We Serve",
          titleKey: "industries_we_serve_title",
          descriptionKey: "industries_we_serve_description",
          description:
            "We provide access control solutions for different sectors containing, Educational Institutions, Healthcare Facilities, Industrial Sites, Residential Complexes, Corporate Offices",
        },
      ],
    },
  };

  const benefitItems = {
    heading:
      "Benefits of Our Advanced Access Control Systems for Optimal Security",
    titleKey: "access_control_benefits_title",
    descriptionKey: "access_control_benefits_description",
    description:
      "Our access control systems deliver top-notch security, operational efficiency, and scalability, making them the ideal choice for businesses seeking reliable and customizable solutions. With cost-effective, long-lasting designs, we ensure that your investment provides ongoing value and protection tailored to your unique requirements.",
    details: [
      {
        icon: "/icon-service-benefit-1.svg",
        heading: "Enhanced Security",
        titleKey: "enhanced_security_title",
        descriptionKey: "enhanced_security_description",
        description:
          "Our access control systems offer high-level security by restricting unauthorized entry and ensuring only authorized personnel have access.",
      },
      {
        icon: "/icon-service-benefit-2.svg",
        heading: "Operational Efficiency",
        titleKey: "operational_efficiency_title",
        descriptionKey: "operational_efficiency_description",
        description:
          "Streamlined entry processes reduce delays, ensuring smooth and quick access without compromising security.",
      },
      {
        icon: "/icon-service-benefit-3.svg",
        heading: "Scalability and Customization",
        titleKey: "scalability_and_customization_title",
        descriptionKey: "scalability_and_customization_description",
        description:
          "Designed to grow with your business, our systems offer tailored solutions that meet specific security needs, providing long-term value and adaptability.",
      },
    ],
  };

  const whychooseus = [
    {
      heading: "Customized Access Control Solutions",
      titleKey:
        "access_control_solutions_why_choose_for_access_control_solutions_title",
      descriptionKey:
        "access_control_solutions_why_choose_for_access_control_solutions_content",
      description:
        "Gulf Horizon Tele Est is particular in delivering monitor access control systems, from biometric and card-based solutions to cloud-based technology, guaranteeing safe entry and increased security for your business or living requirements.",
    },
    {
      heading: "Advanced Access Management Technology",
      titleKey:
        "access_control_solutions_advanced_access_management_technology_title",
      descriptionKey:
        "access_control_solutions_advanced_access_management_technology_content",
      description:
        "We provide mobile access control, fingerprint recognition, facial recognition, and RFID-based systems, offering high-tech security with simple-to-use and remote management choices.",
    },
    {
      heading: "Nationwide Installation and Support",
      titleKey:
        "access_control_solutions_nationwide_installation_and_support_title",
      descriptionKey:
        "access_control_solutions_nationwide_installation_and_support_content",
      description:
        "With professional installation services around Riyadh, Jeddah, Dammam, and Makkah, Gulf Horizon Tele Est gives effective access control solutions along with annual servicing, committed to sustaining your security system's peak performance.",
    },
  ];

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.gulfhorizontele.com/access-control-systems-in-saudi-arabia"
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
