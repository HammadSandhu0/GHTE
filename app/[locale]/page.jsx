"use client";
import { useTranslations } from "next-intl";
import SEOHead from "@/components/SeoHead";
import Main from "@/components/Main";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectsSection from "@/components/ProjectSection";
import CtaBox from "@/components/CtaBox";
import VendorSlider from "@/components/Vendor";
import ContactUs from "@/components/ContactUs";
import whyChooseUs from "@/data/whyChooseUs";
import Services from "@/components/Services";
import { useEffect, useState } from "react";

const metadata = {
  title: "Power, Security & IT Solutions Around Saudi Arabia | GHTE",
  description:
    "Gulf Horizon Telecom Est offers top power, security, and IT solutions, from UPS and generators to cybersecurity and CCTV systems, securing smooth operations in Saudi Arabia.",
};

const Home = ({ params }) => {
  const t2 = useTranslations("MainPageWhyChoose");
  const [resolvedParams, setResolvedParams] = useState(null);
  useEffect(() => {
    const fetchParams = async () => {
      const resolved = await params; // Unwrap the Promise
      setResolvedParams(resolved);
    };

    fetchParams();
  }, [params]);
  if (!resolvedParams) return null;

  return (
    <>
      <SEOHead
        title={metadata.title}
        description={metadata.description}
        locale={resolvedParams?.locale}
        pageUrl="/"
      />
      <Main />
      <About />
      <Services />
      <WhyChooseUs whychooseus={whyChooseUs(t2)} />
      <ProjectsSection />
      <CtaBox />
      <VendorSlider />
      <ContactUs />
    </>
  );
};

export default Home;
