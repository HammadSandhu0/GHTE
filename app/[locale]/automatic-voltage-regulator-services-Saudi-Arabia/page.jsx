"use client";
import CtaBox from "@/components/CtaBox";
import TransitionEffect from "@/components/Loader";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SeoHead";
import ServiceBenefit from "@/components/ServiceBenefit";
import ServiceSingle from "@/components/ServiceSingle";
import VendorSlider from "@/components/Vendor";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const metadata = {
  title: {
    default:
      "Automatic Voltage Regulator Services in Saudi Arabia | Gulf Horizon Telecom Est",
  },
  description:
    "Find top-quality AVRs at Gulf Horizon Telecom Est, Saudi Arabia. Choose Automatic Voltage Regulator from 220V, 3-phase, and generator-specific models.",
};
const page = ({ params }) => {
  const t = useTranslations("AVR");
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
    backgroundImage: "/avrbanner.png",
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
        name: t("Sidebarcategories.details.Load_Banks"),
        link: "/load-bank-rental-saudi-arabia",
      },
    ],
  };
  const mainPageContent = {
    images: ["/avr1.png", "/avr2.png", "/avr3.png"],
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

  const [resolvedParams, setResolvedParams] = useState(null);
  useEffect(() => {
    const fetchParams = async () => {
      const resolved = await params; // Unwrap the Promise
      setResolvedParams(resolved);
    };

    fetchParams();
  }, [params]);
  if (!resolvedParams) return null; // You might want to handle loading states

  return (
    <>
      <SEOHead
        title={metadata.title.default}
        description={metadata.description}
        locale={resolvedParams.locale} // Use the resolved locale
        pageUrl="/automatic-voltage-regulator-services-Saudi-Arabia" // Use the resolved locale
      />
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
