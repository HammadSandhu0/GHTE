import React from "react";
import About from "@/components/About";
import CompanyHistory from "@/components/CompanyHistory";
import ContactUs from "@/components/ContactUs";
import CtaBox from "@/components/CtaBox";
import MissionVision from "@/components/MissionVision";
import PageHeader from "@/components/PageHeader";
import VendorSlider from "@/components/Vendor";
import TransitionEffect from "@/components/Loader";
import { useTranslations } from "next-intl";

export const metadata = {
  title: {
    default:
      "Power, Security & IT Solutions Around Saudi Arabia | Gulf Horizon Telecom Est",
    template: "%s",
  },
  description:
    "Gulf Horizon Telecom Est offers top power, security, and IT solutions, from UPS and generators to cybersecurity and CCTV systems, secure smooth operations in Saudi Arabia.",
};

const page = () => {
  const t = useTranslations("AboutPage");
  const pageHeader = {
    title: `${t("pageheader.title")}`,
    backto: `${t("pageheader.home")}`,
    breadcrumbs: [
      {
        name: `${t("pageheader.about")}`,
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/about.png",
  };
  return (
    <>
      <TransitionEffect />
      <PageHeader pageHeader={pageHeader} />

      <div className="">
        <About />
        <CompanyHistory />
        <MissionVision />
        <CtaBox />
        <VendorSlider />
        <ContactUs />
      </div>
    </>
  );
};

export default page;
