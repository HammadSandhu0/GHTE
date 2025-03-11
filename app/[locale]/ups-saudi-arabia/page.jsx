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
    default: "UPS Saudi Arabia - Reliable Systems & Services",
  },
  description:
    "Explore Gulf Horizon Telecom Est UPS systems in Saudi Arabia, including outdoor, modular, and industrial solutions. Authorized dealers for Schneider Electric and RPS.",
};
// export async function generateMetadata() {
//   const headersList = await headers();
//   const acceptLanguage = headersList.get("accept-language") || "en";
//   const locale = acceptLanguage.split(",")[0];
//   const baseUrl = "https://www.gulfhorizontele.com";
//   const canonicalUrl =
//     locale === "en"
//       ? `${baseUrl}/ups-saudi-arabia`
//       : `${baseUrl}/${locale}/ups-saudi-arabia`;

//   return {
//     title: metadata.title,
//     description: metadata.description,
//     alternates: {
//       canonical: canonicalUrl,
//     },
//   };
// }

const page = ({ params }) => {
  const t = useTranslations("UPS_SYSTEM");
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
    backgroundImage: "/upsbanner.jpg",
  };
  const Sidebarcategories = {
    heading: "Other Power Products",
    details: [
      {
        name: t("Sidebarcategories.details.Batteries"),
        link: "/battery-solutions-saudi-arabia",
      },
      {
        name: t("Sidebarcategories.details.Load_bank"),
        link: "/load-bank-rental-saudi-arabia",
      },
      {
        name: t("Sidebarcategories.details.Generators"),
        link: "/generators-saudi-arabia",
      },
      {
        name: t("Sidebarcategories.details.AVR"),
        link: "/automatic-voltage-regulator-services-Saudi-Arabia",
      },
    ],
  };

  const mainPageContent = {
    images: ["/ups1.png", "/ups2.png", "/ups3.png"],
    heading: `${t("heading")}`,
    description: `${t("description")}`,

    products: {
      productTitle: `${t("Products.productTitle")}`,
      details: [
        {
          name: `${t("Products.out_dooor_ups.title")}`,
          description: `${t("Products.out_dooor_ups.description")}`,
        },
        {
          name: `${t("Products.Industrial_UPS_Solutions.title")}`,
          description: `${t("Products.Industrial_UPS_Solutions.description")}`,
        },
        {
          name: `${t("Products.Modular_UPS_Solutions.title")}`,
          description: `${t("Products.Modular_UPS_Solutions.description")}`,
        },
        {
          name: `${t("Products.Data_Center_UPS_Systems.title")}`,
          description: `${t("Products.Data_Center_UPS_Systems.description")}`,
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
        heading: `${t("benefitItems.details.data_protection.title")}`,
        description: `${t("benefitItems.details.data_protection.description")}`,
      },
      {
        icon: "/icon-service-benefit-2.svg",
        heading: `${t("benefitItems.details.Equipment_Protection.title")}`,
        description: `${t(
          "benefitItems.details.Equipment_Protection.description"
        )}`,
      },
      {
        icon: "/icon-service-benefit-3.svg",
        heading: `${t("benefitItems.details.compliance.title")}`,
        description: `${t("benefitItems.details.compliance.description")}`,
      },
    ],
  };

  const whychooseus = [
    {
      heading: `${t("whychoose.comprehensive_ups_solutions_title")}`,
      description: `${t("whychoose.comprehensive_ups_solutions_content")}`,
    },
    {
      heading: `${t("whychoose.expertise_and_partnerships_title")}`,
      description: `${t("whychoose.expertise_and_partnerships_content")}`,
    },
    {
      heading: `${t("whychoose.nationwide_title")}`,
      description: `${t("whychoose.nationwide_content")}`,
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
        pageUrl="/ups-saudi-arabia" // Use the resolved locale
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
