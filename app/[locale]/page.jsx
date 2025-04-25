import SEOHead from "@/components/SeoHead";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectsSection from "@/components/ProjectSection";
import whyChooseUs from "@/data/whyChooseUs";
import Services from "@/components/Services";
import Navbar from "@/components/Navbar";
import Video from "@/components/Video";
import ButtonGroup from "@/components/ButtonGroup";
import Button from "@/components/Button";
import {
  Description,
  Header,
  Heading,
  SubHeading,
} from "@/components/Headings";
import { getTranslations } from "next-intl/server";

const metadata = {
  title: "Power, Security & IT Solutions Around Saudi Arabia | GHTE",
  description:
    "Gulf Horizon Telecom Est offers top power, security, and IT solutions, from UPS and generators to cybersecurity and CCTV systems, securing smooth operations in Saudi Arabia.",
};

export default async function Home({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "HomePage" });
  const t2 = await getTranslations({ locale, namespace: "MainPageWhyChoose" });

  return (
    <>
      <SEOHead
        title={metadata.title}
        description={metadata.description}
        locale={locale}
        pageUrl="/"
      />
      <div className="relative overflow-hidden bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Video />
        <div className="relative mx-auto py-20 px-4 sm:px-10 md:py-72 text-center space-y-3 sm:space-y-4 lg:space-y-6 xl:space-y-8">
          <Header>
            <SubHeading>{t("title")}.</SubHeading>
            <Heading>{t("maintitle")}</Heading>
            <Description className="!text-white">
              {t("description")}
            </Description>
          </Header>
          <ButtonGroup className="sm:justify-center">
            <Button href="/about" type="primary" className="w-fit">
              {t("getstarted")}
            </Button>
            <Button href="/contact" type="transparent" className="w-fit">
              {t("viewprojects")}
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <About />
      <Services />
      <WhyChooseUs whychooseus={whyChooseUs(t2)} />
      <ProjectsSection />
    </>
  );
}
