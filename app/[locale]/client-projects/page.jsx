import CtaBox from "@/components/CtaBox";
import TransitionEffect from "@/components/Loader";
import PageHeader from "@/components/PageHeader";
import Projects from "@/components/projects";
import VendorSlider from "@/components/Vendor";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useTranslations } from "next-intl";
import Head from "next/head";

export const metadata = {
  title: "Clients projects by Gulf Horizon Tele Est",
  description:
    "Explore Gulf Horizon Tele Est's expertise in power systems, security solutions, and data center projects for top clients across various industries.",
};

const Page = () => {
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
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.gulfhorizontele.com/en/client-projects"
        />
      </Head>
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
