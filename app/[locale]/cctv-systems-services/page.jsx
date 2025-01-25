import CtaBox from "@/components/CtaBox";
import TransitionEffect from "@/components/Loader";
import PageHeader from "@/components/PageHeader";
import ServiceBenefit from "@/components/ServiceBenefit";
import ServiceSingle from "@/components/ServiceSingle";
import VendorSlider from "@/components/Vendor";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useTranslations } from "next-intl";
import Head from "next/head";
import { headers } from "next/headers";
import React from "react";

const metadata = {
  title: {
    absolute: "CCTV Systems Services | Installation, Maintenance & Solutions",
  },
  description:
    "Top-class CCTV systems services by Gulf Horizon Telecom Est: Custom observation systems, installation, maintenance, monitoring, and modern designs for homes and businesses. Secure your space today!",
};

export async function generateMetadata() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "en";
  const locale = acceptLanguage.split(",")[0];
  const baseUrl = "https://www.gulfhorizontele.com";
  const paramsUrl = "cctv-systems-services";
  const canonicalUrl =
    locale === "en"
      ? `${baseUrl}/${paramsUrl}`
      : `${baseUrl}/${locale}/${paramsUrl}`;

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const page = () => {
  const t = useTranslations("CCTV");
  const pageHeader = {
    title: t("pageheader.title"),
    backto: t("pageheader.home"),
    breadcrumbs: [
      {
        name: t("pageheader.about"),
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/cctvbanner.png",
  };
  const Sidebarcategories = {
    heading: t("Sidebarcategories.heading"),
    details: [
      {
        name: t("Sidebarcategories.details.access_control"),
        link: "/access-control-systems-in-saudi-arabia",
      },
      {
        name: t("Sidebarcategories.details.fire_fighting"),
        link: "/fire-fighting-systems-solution-in-saudi-arabia",
      },
      {
        name: t("Sidebarcategories.details.sound_system"),
        link: "/sound-system-services-in-saudi-arabia",
      },
      {
        name: t("Sidebarcategories.details.cyber_security"),
        link: "/cyber-security-services-in-saudi-arabia",
      },
    ],
  };

  const mainPageContent = {
    images: ["/cctv1.png", "/cctv2.png", "/cctv3.png"],
    heading: `${t("heading")}`,
    description: `${t("description")}`,

    products: {
      productTitle: `${t("Products.productTitle")}`,
      details: [
        {
          name: `${t("Products.product_1.title")}`,
          description: `${t("Products.product_1.description")}`,
        },
        {
          name: `${t("Products.product_2.title")}`,
          description: `${t("Products.product_2.description")}`,
        },
        {
          name: `${t("Products.product_3.title")}`,
          description: `${t("Products.product_3.description")}`,
        },
        {
          name: `${t("Products.product_4.title")}`,
          description: `${t("Products.product_4.description")}`,
        },
      ],
    },
  };

  const benefitItems = {
    heading: `${t("benefitItems.title")}`,
    description: `${t("benefitItems.description")}`,
    details: [
      {
        icon: "/icon-service-benefit-1.svg",
        heading: `${t("benefitItems.details.benefit_1.title")}`,
        description: `${t("benefitItems.details.benefit_1.description")}`,
      },
      {
        icon: "/icon-service-benefit-2.svg",
        heading: `${t("benefitItems.details.benefit_1.title")}`,
        description: `${t("benefitItems.details.benefit_1.description")}`,
      },
      {
        icon: "/icon-service-benefit-3.svg",
        heading: "Customized Energy-Efficient Systems",
        heading: `${t("benefitItems.details.benefit_1.title")}`,
        description: `${t("benefitItems.details.benefit_1.description")}`,
      },
    ],
  };

  const whychooseus = [
    {
      heading: `${t("whychoose.why_1_title")}`,
      description: `${t("whychoose.why_1_description")}`,
    },
    {
      heading: `${t("whychoose.why_2_title")}`,
      description: `${t("whychoose.why_2_description")}`,
    },
    {
      heading: `${t("whychoose.why_3_title")}`,
      description: `${t("whychoose.why_3_description")}`,
    },
  ];

  return (
    <>
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
