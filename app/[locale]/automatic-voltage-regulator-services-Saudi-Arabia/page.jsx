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

// Import data from avrData.js
import {
  metadata,
  pageHeader,
  Sidebarcategories,
  mainPageContent,
  benefitItems,
  whychooseus,
} from "@/data/avrData";

const page = ({ params }) => {
  const t = useTranslations("AVR");
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
