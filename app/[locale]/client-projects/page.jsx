"use client";
import CtaBox from "@/components/CtaBox";
import TransitionEffect from "@/components/Loader";
import PageHeader from "@/components/PageHeader";
import Projects from "@/components/projects";
import SEOHead from "@/components/SeoHead";
import VendorSlider from "@/components/Vendor";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const metadata = {
  title: {
    default: "Clients projects by Gulf Horizon Tele Est",
  },
  description:
    "Explore Gulf Horizon Tele Est's expertise in power systems, security solutions, and data center projects for top clients across various industries.",
};

const Page = ({ params }) => {
  const t2 = useTranslations("MainPageWhyChoose");
  const t = useTranslations("AllProjects");

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
    backgroundImage: "/projectbanner.png",
  };
  const whychooseus = [
    {
      heading: `${t2("main_page_why_choose_title")}`,
      description: `${t2("main_page_why_choose_content")}`,
    },
    {
      heading: `${t2("main_page_expertise_and_experience_title")}`,
      description: `${t2("main_page_expertise_and_experience_content")}`,
    },
    {
      heading: `${t2("main_page_end_to_end_services_title")}`,
      description: `${t2("main_page_end_to_end_services_content")}`,
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
        pageUrl="/client-projects" // Use the resolved locale
      />
      <TransitionEffect />
      <PageHeader pageHeader={pageHeader} />
      <Projects />
      <WhyChooseUs whychooseus={whychooseus} />
      <CtaBox />
      <VendorSlider />
    </>
  );
};

export default Page;
