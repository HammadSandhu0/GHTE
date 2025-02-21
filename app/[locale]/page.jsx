"use client";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectsSection from "@/components/ProjectSection";
import CtaBox from "@/components/CtaBox";
import VendorSlider from "@/components/Vendor";
import ContactUs from "@/components/ContactUs";
import TransitionEffect from "@/components/Loader";
import { useTranslations } from "next-intl";
import SEOHead from "@/components/SeoHead";
import { useEffect, useState } from "react";
import VideoHome from "@/components/VideoHome";

const metadata = {
  title: {
    default: "Power, Security & IT Solutions Around Saudi Arabia | GHTE",
  },
  description:
    "Gulf Horizon Telecom Est offers top power, security, and IT solutions, from UPS and generators to cybersecurity and CCTV systems, secure smooth operations in Saudi Arabia.",
};
const Home = ({ params }) => {
  const t2 = useTranslations("MainPageWhyChoose");
  const whychooseus = [
    {
      heading: `${t2("main_page_why_choose_title")}`,
      description: `${t2("main_page_why_choose_content")}`,
    },
    {
      heading: `${t2("main_page_expertise_and_experience_title")}`,
      description: `${t2("main_page_expertise_and_experience_content")}`,
    },
    {
      heading: `${t2("main_page_end_to_end_services_title")}`,
      description: `${t2("main_page_end_to_end_services_content")}`,
    },
  ];
  const [resolvedParams, setResolvedParams] = useState(null);
  useEffect(() => {
    const fetchParams = async () => {
      const resolved = await params;
      setResolvedParams(resolved);
    };

    fetchParams();
  }, [params]);
  if (!resolvedParams) return null;
  return (
    <>
      <SEOHead
        title={metadata.title.default}
        description={metadata.description}
        locale={resolvedParams.locale}
        pageUrl="/"
      />
      <TransitionEffect />
      <VideoHome />
      <About />
      <Portfolio />
      <WhyChooseUs whychooseus={whychooseus} />
      <ProjectsSection />
      <CtaBox />
      <VendorSlider />
      <ContactUs />
    </>
  );
};

export default Home;
