"use client";
import CtaBox from "@/components/CtaBox";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SeoHead";
import ServiceBenefit from "@/components/ServiceBenefit";
import ServiceSingle from "@/components/ServiceSingle";
import VendorSlider from "@/components/Vendor";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

// Import data from generatorData.js
import {
  metadata,
  pageHeader,
  Sidebarcategories,
  mainPageContent,
  benefitItems,
  whychooseus,
} from "@/data/generatorData";

const page = ({ params }) => {
  const t = useTranslations("Generator");
  const [resolvedParams, setResolvedParams] = useState(null);

  useEffect(() => {
    const fetchParams = async () => {
      const resolved = await params; // Unwrap the Promise
      setResolvedParams(resolved);
    };

    fetchParams();
  }, [params]);

  if (!resolvedParams) return null; // Handle loading states

  return (
    <>
      <SEOHead
        title={metadata.title.default}
        description={metadata.description}
        locale={resolvedParams.locale} // Use the resolved locale
        pageUrl="/generators-saudi-arabia" // Use the resolved locale
      />
      <PageHeader pageHeader={pageHeader(t)} />
      <ServiceSingle
        mainPageContent={mainPageContent(t)}
        Sidebarcategories={Sidebarcategories(t)}
      />
      <ServiceBenefit items={benefitItems(t)} />
      <WhyChooseUs whychooseus={whychooseus(t)} />
    </>
  );
};

export default page;
