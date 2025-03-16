"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import SEOHead from "@/components/SeoHead";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectsSection from "@/components/ProjectSection";
import CtaBox from "@/components/CtaBox";
import VendorSlider from "@/components/Vendor";
import ContactUs from "@/components/ContactUs";
import whyChooseUs from "@/data/whyChooseUs";
import Services from "@/components/Services";
import Navbar from "@/components/Navbar";
import Video from "@/components/Video";
import {
  Description,
  Header,
  Heading,
  SubHeading,
} from "@/components/Headings";
import Button from "@/components/Button";
import ButtonGroup from "@/components/ButtonGroup";

const metadata = {
  title: "Power, Security & IT Solutions Around Saudi Arabia | GHTE",
  description:
    "Gulf Horizon Telecom Est offers top power, security, and IT solutions, from UPS and generators to cybersecurity and CCTV systems, securing smooth operations in Saudi Arabia.",
};

const Home = ({ params }) => {
  const t = useTranslations("HomePage");
  const t2 = useTranslations("MainPageWhyChoose");
  const [resolvedParams, setResolvedParams] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        title={metadata.title}
        description={metadata.description}
        locale={resolvedParams?.locale}
        pageUrl="/"
      />
      <div className="relative overflow-hidden bg-cover bg-center bg-no-repeat">
        <div
          className={`${
            isScrolled
              ? "fixed top-0 left-0 right-0 bg-black/50 bg-opacity-90 shadow-lg z-50 transition-all duration-300"
              : ""
          }`}
        >
          <Navbar />
        </div>
        <Video />
        <div className="relative mx-auto py-[130px] px-4 sm:px-10 md:py-[295px] text-center">
          <Header>
            <SubHeading>{t("title")}</SubHeading>
            <Heading>{t("maintitle")}</Heading>
            <Description className="!text-white">
              {t("description")}
            </Description>
          </Header>

          <ButtonGroup className="sm:justify-center">
            <Button href="/contact" text={t("getstarted")} type="primary" />
            <Button
              href="/client-projects"
              text={t("viewprojects")}
              type="transparent"
            />
          </ButtonGroup>
        </div>
      </div>
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
