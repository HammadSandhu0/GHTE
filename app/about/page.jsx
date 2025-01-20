import React from "react";
import About from "@/components/About";
import CompanyHistory from "@/components/CompanyHistory";
import ContactUs from "@/components/ContactUs";
import CtaBox from "@/components/CtaBox";
import MissionVision from "@/components/MissionVision";
import PageHeader from "@/components/PageHeader";
import VendorSlider from "@/components/Vendor";
import TransitionEffect from "@/components/Loader";
import Head from "next/head";

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
  const pageHeader = {
    title: "About Us",
    titleKey: "about_title",
    backto: "Home",
    backtokey: "home",
    breadcrumbs: [
      {
        name: "About Us",
        titlekey: "about_title",
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/about.png",
  };
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.gulfhorizontele.com/about" />
      </Head>
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
