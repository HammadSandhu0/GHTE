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
    absolute: "Load Bank Rental Saudi Arabia | Sale AC & DC Load Banks",
  },
  description:
    "Load Bank Rental Saudi Arabia for AC & DC applications. Ideal for generator testing, industrial use, and more. Get tailored rental solutions and expert services.",
};
export async function generateMetadata() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "en";
  const locale = acceptLanguage.split(",")[0];
  const baseUrl = "https://www.gulfhorizontele.com";
  const paramsUrl = "generators-saudi-arabia";
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
  const t = useTranslations("Load_Banks");
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
    backgroundImage: "/loadbankbanner.png",
  };
  const Sidebarcategories = {
    heading: t("Sidebarcategories.heading"),
    details: [
      {
        name: t("Sidebarcategories.details.Generators"),
        link: "/generators-saudi-arabia",
      },
      {
        name: t("Sidebarcategories.details.ups_system"),
        link: "/ups-saudi-arabia",
      },
      {
        name: t("Sidebarcategories.details.Batteries"),
        link: "/battery-solutions-saudi-arabia",
      },
      {
        name: t("Sidebarcategories.details.AVR"),
        link: "/automatic-voltage-regulator-services-Saudi-Arabia",
      },
    ],
  };

  const mainPageContent = {
    images: ["/loadbank1.png", "/loadbank2.png", "/loadbank3.png"],
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
        {
          name: `${t("Products.product_5.title")}`,
          description: `${t("Products.product_5.description")}`,
        },
        {
          name: `${t("Products.product_6.title")}`,
          description: `${t("Products.product_6.description")}`,
        },
        {
          name: `${t("Products.product_7.title")}`,
          description: `${t("Products.product_7.description")}`,
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
