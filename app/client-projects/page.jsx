import TransitionEffect from "@/components/Loader";
import PageHeader from "@/components/PageHeader";
import Projects from "@/components/projects";
import VendorSlider from "@/components/Vendor";
import WhyChooseUs from "@/components/WhyChooseUs";
import Head from "next/head";

export const metadata = {
  title: {
    absolute: "Clients projects by Gulf Horizon Tele Est",
  },
  description:
    "Explore Gulf Horizon Tele Est's expertise in power systems, security solutions, and data center projects for top clients across various industries.",
};

const whychooseus = [
  {
    heading: "Complete Power, Security, and IT Solutions",
    titleKey: "main_page_why_choose_title",
    descriptionKey: "main_page_why_choose_content",
    description:
      "At Gulf Horizon Telecom Est, we provide a large variety of services, containing uninterrupted power supply (UPS) systems, cybersecurity solutions, CCTV systems, and the highest working IT and networking equipment. We have a commitment to smooth operations for businesses in Saudi Arabia with assisting, trusted solutions for each requirement.",
  },
  {
    heading: "Expertise and Experience You Can Trust",
    titleKey: "main_page_expertise_and_experience_title",
    descriptionKey: "main_page_expertise_and_experience_content",
    description:
      "With more than 17 years of experience, we have fully more than 1,000 projects, earning the belief of 400+ long-term clients. Our team provides high-quality, customized solutions using digital technologies, guaranteeing that your power, security, and IT infrastructure work smoothly and safely.",
  },
  {
    heading: "End-to-End Services and Support",
    titleKey: "main_page_end_to_end_services_title",
    descriptionKey: "main_page_end_to_end_services_content",
    description:
      "From installation to post-sales support, Gulf Horizon Telecom Est provides 24/7 customer service and expert assistance in every step of your project. We partner with guiding brands such as Schneider Electric, HikVision, and Sony to offer top-class products and guarantee your structure's longevity and trust.",
  },
];

const page = () => {
  const pageHeader = {
    title: "Client Projects",
    titleKey: "",
    backto: "Home",
    backtokey: "home",
    breadcrumbs: [
      {
        name: "Client Projects",
        titlekey: "",
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/projectbanner.png",
  };

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.gulfhorizontele.com/client-projects"
        />
      </Head>
      <TransitionEffect />
      <PageHeader pageHeader={pageHeader} />
      <Projects />
      <WhyChooseUs whychooseus={whychooseus} />
      <VendorSlider />
    </>
  );
};

export default page;
