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
import {
  metadata,
  pageHeader,
  Sidebarcategories,
  mainPageContent,
  benefitItems,
  whychooseus,
} from "@/data/upsData";

const page = ({ params }) => {
  const t = useTranslations("UPS_SYSTEM");
  const [resolvedParams, setResolvedParams] = useState(null);

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
        title={metadata.title.default}
        description={metadata.description}
        locale={resolvedParams.locale}
        pageUrl="/ups-saudi-arabia"
      />
      <PageHeader pageHeader={pageHeader(t)} />
      <ServiceSingle
        mainPageContent={mainPageContent(t)}
        Sidebarcategories={Sidebarcategories(t)}
      />
      <ServiceBenefit items={benefitItems(t)} />
      <WhyChooseUs whychooseus={whychooseus(t)} />
      <CtaBox />
      <VendorSlider />
    </>
  );
};

export default page;
