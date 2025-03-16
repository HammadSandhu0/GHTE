"use client";
import ContactUs from "@/components/ContactUs";
import TransitionEffect from "@/components/Loader";
import PageHeader from "@/components/PageHeader";
import VendorSlider from "@/components/Vendor";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import SEOHead from "@/components/SeoHead";

// Import data from contactData.js
import { metadata, pageHeader } from "@/data/contactData";

const page = ({ params }) => {
  const t = useTranslations("Contact");
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
        pageUrl="/contact" // Use the resolved locale
      />
      <PageHeader pageHeader={pageHeader(t)} />
      <ContactUs />
      <VendorSlider />
    </>
  );
};

export default page;
