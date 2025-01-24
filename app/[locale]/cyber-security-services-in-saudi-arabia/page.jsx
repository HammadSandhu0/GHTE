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
      "Top Cybersecurity Services Saudi Arabia - Gulf Horizon Telecom Est Solutions",
  },
  description:
    "Secure your business with Gulf Horizon Telecom Est top-rated cybersecurity services in Saudi Arabia, including threat assessment, incident response, and risk management. Contact us today!",
};

const page = () => {
  const pageHeader = {
    title: "Cybersecurity Services",
    titleKey: "title_cyber_security",
    backto: "Home",
    backtokey: "home",
    breadcrumbs: [
      {
        name: "Cybersecurity Services",
        titlekey: "title_cyber_security",
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/cyberbanner.png",
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
        name: "Fire Fighting System",
        titleKey: "title_fire_extinguishing",
        link: "/fire-fighting-systems-solution-in-saudi-arabia",
      },
    ],
  };

  const mainPageContent = {
    images: ["/cyber1.png", "/cyber2.png", "/cyber3.png"],
    heading: "Cybersecurity Services Saudi Arabia",
    datatranslatekeytitle: "cybersecurity_services_title",
    description:
      "Secure Your Business with Gulf Horizon Telecom Est Cybersecurity Solutions In today’s fast-developing modern era, businesses in Saudi Arabia face ever-progressive cyber threats. Here Gulf Horizon Telecom Est is your trusted companion, providing comprehensive cybersecurity services in Saudi Arabia which monitor to provide security to your organization from internal and external ultimatum",
    datatranslatekeydescription: "cybersecurity_intro",

    products: {
      productTitle: "Our Cybersecurity Services",
      datatranslatekey: "our_cybersecurity_services_title",
      details: [
        {
          name: "Threat Assessment and Management",
          titleKey: "threat_assessment_title",
          descriptionKey: "threat_assessment_description",
          description:
            "We work at the beneath of cyber threat analysis for businesses, recognizing both internal and external threats. By using digital tools, our team assesses your systems to feel vulnerabilities and deliver sufficient perception.",
        },
        {
          name: "Vulnerability Management Systems",
          titleKey: "vulnerability_management_title",
          descriptionKey: "vulnerability_management_description",
          description:
            "Our IT vulnerability management solutions contain uninterrupted inspecting tools to understand your security sickness before attackers can utilize them. We provide a complete network vulnerability assessment service to secure your IT infrastructure.",
        },
        {
          name: "Penetration Testing Services",
          titleKey: "penetration_testing_title",
          descriptionKey: "penetration_testing_description",
          description:
            "Our moral hacking experts reproduce real-world cyberattacks to detect your defences. This service contains penetration testing for network security and cybersecurity defences with simulated attacks committed to robust defence for your systems.",
        },
        {
          name: "Incident Response Team Saudi Arabia",
          titleKey: "incident_response_title",
          descriptionKey: "incident_response_description",
          description:
            "In case of any violation, our 24/7 security breach response team reduces damage and guarantees business progression. We specialize in cyber incident response services that help you recover rapidly from any attack.",
        },
        {
          name: "Compliance and Risk Management",
          titleKey: "compliance_risk_management_title",
          descriptionKey: "compliance_risk_management_description",
          description:
            "Continuing to complain is necessary for businesses in Saudi Arabia. We guide you with GDPR-compliance cybersecurity solutions, ISO-certified cybersecurity services, and IT security risk management strategies to maintain your business safe and accommodating with local structure, just as the SAMA cybersecurity framework.",
        },
        {
          name: "Managed Cybersecurity Services Provider",
          titleKey: "managed_cybersecurity_services_title",
          descriptionKey: "managed_cybersecurity_services_description",
          description:
            "Our managed cybersecurity services contain advanced threat detection by Gulf Horizon Telecom Est, continuous guiding, and assist cybersecurity plans for your particular requirements.",
        },
        {
          name: "Why Cybersecurity Matters in Saudi Arabia?",
          titleKey: "why_cybersecurity_matters_title",
          descriptionKey: "why_cybersecurity_matters_description",
          description:
            "Saudi Arabia’s developed digital economy commands robust security computers to secure businesses against cyberattacks. With a complete framework like the National Cybersecurity Authority (NCA) and abilities such as the Saudi Federation for Cybersecurity, Programming, and Drones, the country highlights the need for cybersecurity for all types of businesses.",
        },
      ],
    },
  };

  const benefitItems = {
    heading: "Empowering Businesses with Reliable Cybersecurity Services",
    titleKey: "empowering_businesses_title",
    descriptionKey: "empowering_businesses_description",
    description:
      "Our business-focused cybersecurity solutions provide robust protection against data breaches, enhance regulatory compliance, and improve IT infrastructure security. With tailored approaches and proactive measures, we ensure your business is equipped to prevent attacks and recover swiftly from any cybersecurity challenges.",
    details: [
      {
        icon: "/icon-service-benefit-1.svg",
        heading: "Cyber Risk Management",
        titleKey: "cyber_risk_management_title",
        descriptionKey: "cyber_risk_management_description",
        description:
          "Offering proactive measures and tailored solutions to protect organizations across industries like finance, healthcare, and IT from cybersecurity threats.",
      },
      {
        icon: "/icon-service-benefit-2.svg",
        heading: "Enhanced Compliance and Security",
        titleKey: "enhanced_compliance_title",
        descriptionKey: "enhanced_compliance_description",
        description:
          "Helping businesses adhere to global and local regulations while strengthening IT infrastructure to safeguard critical data.",
      },
      {
        icon: "/icon-service-benefit-3.svg",
        heading: "Swift Incident Recovery",
        titleKey: "swift_incident_recovery_title",
        descriptionKey: "swift_incident_recovery_description",
        description:
          "Ensuring rapid response and recovery from cybersecurity incidents to minimize downtime and protect business continuity.",
      },
    ],
  };

  const whychooseus = [
    {
      heading: "Comprehensive Cybersecurity Solutions",
      titleKey:
        "cybersecurity_solutions_comprehensive_cybersecurity_services_title",
      descriptionKey:
        "cybersecurity_solutions_comprehensive_cybersecurity_services_content",
      description:
        "Gulf Horizon Tele Est provides a broad range of cybersecurity services, containing threat detection, incident management, and vulnerability assessments to protect digital infrastructures from attacks and risks.",
    },
    {
      heading: "Protecting Your Data and Network",
      titleKey:
        "cybersecurity_solutions_protecting_your_data_and_network_title",
      descriptionKey:
        "cybersecurity_solutions_protecting_your_data_and_network_content",
      description:
        "We provide effective penetration testing, malware protection, and disaster recovery services to ensure that your critical systems and sensitive data remain secure from evolving digital threats.",
    },
    {
      heading: "Expert Analysis and Consultancy",
      titleKey: "cybersecurity_solutions_expert_analysis_and_consultancy_title",
      descriptionKey:
        "cybersecurity_solutions_expert_analysis_and_consultancy_content",
      description:
        "Our cybersecurity consultants offer tailored solutions, guiding you through threat analysis, system hardening, and compliance with global standards to guarantee your organization remains secure and resilient.",
    },
  ];

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.gulfhorizontele.com/cyber-security-services-in-saudi-arabia"
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
