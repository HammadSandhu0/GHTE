import CtaBox from "@/components/CtaBox";
import TransitionEffect from "@/components/Loader";
import PageHeader from "@/components/PageHeader";
import ServiceBenefit from "@/components/ServiceBenefit";
import ServiceSingle from "@/components/ServiceSingle";
import VendorSlider from "@/components/Vendor";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useTranslations } from "next-intl";
import Head from "next/head";
import React from "react";

export const metadata = {
  title: {
    absolute: "Networking Solutions and Switches | Gulf Horizon Tele EST",
  },
  description:
    "Discover Gulf Horizon Tele’s highest working networking solutions. We offer switches, cables, patch panels, and many more to guarantee you for safe and trusted connection for your business.",
};

const page = () => {
  const t = useTranslations("network_switches");
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
    backgroundImage: "/networkbanner.png",
  };

  const Sidebarcategories = {
    heading: t("Sidebarcategories.heading"),
    details: [
      {
        name: t("Sidebarcategories.details.racks"),
        link: "/racks-and-power-distribution-units-in-saudi-arabia",
      },
      {
        name: t("Sidebarcategories.details.computer_solution"),
        link: "/server-and-computer-solution-in-saudia-arabia",
      },
    ],
  };

  const mainPageContent = {
    images: ["/network1.png", "/network2.png", "/network3.png"],
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
      <Head>
        <link
          rel="canonical"
          href="https://www.gulfhorizontele.com/en/networking-solutions"
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
