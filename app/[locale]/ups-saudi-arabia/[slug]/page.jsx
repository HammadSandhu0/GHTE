"use client";
import { useEffect, useState } from "react";
import CtaBox from "@/components/CtaBox";
import VendorSlider from "@/components/Vendor";
import { upsTypesData } from "@/data/ups-types";
import ImageSlider from "@/components/ImageSlider";
import TabNavigation from "@/components/TabNavigation";
import UpsTypeAccordion from "@/components/UpsTypeAccordion";
import Sidebar from "@/components/Sidebar";
import OverviewTab from "@/components/TabContent/OverviewTab";
import SpecificationsTab from "@/components/TabContent/SpecificationsTab";
import ApplicationsTab from "@/components/TabContent/ApplicationsTab";
import ResourcesTab from "@/components/TabContent/ResourcesTab";
import BuyVsRentTab from "@/components/TabContent/BuyVsRentTab";
import SEOHead from "@/components/SeoHead";
import PageHeader from "@/components/PageHeader";
import { metadata, pageHeader } from "@/data/OnlineUps";
// Import all UPS type data
import { OnlineUpsData } from "@/data/OnlineUps";
// Add other UPS type data imports as needed

const UpsSystemDetailPage = ({ params }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [typeData, setTypeData] = useState(null);
  const [resolvedParams, setResolvedParams] = useState(null);

  useEffect(() => {
    const fetchParams = async () => {
      const resolved = await params;
      setResolvedParams(resolved);
      const upsType = resolved.slug || "";
      switch (upsType) {
        case "online-ups":
          setTypeData(OnlineUpsData);
          break;
        // case "standby-ups":
        //   setTypeData(StandbyUpsData);
        //   break;
        // case "line-interactive-ups":
        //   setTypeData(LineInteractiveUpsData);
        //   break;
        default:
          setTypeData(OnlineUpsData);
      }
    };

    fetchParams();
  }, [params]);

  if (!resolvedParams || !typeData) return null;
  const currentMetadata = typeData.metadata || metadata;
  const currentPageHeader = typeData.pageHeader || pageHeader;

  return (
    <>
      <SEOHead
        title={currentMetadata.title.default}
        description={currentMetadata.description}
        locale={resolvedParams.locale}
        pageUrl={`/ups-saudi-arabia/${resolvedParams.type || "online"}`}
      />
      <PageHeader pageHeader={currentPageHeader} />
      <div className="bg-gray-50">
        <div className="container mx-auto py-8 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <ImageSlider images={typeData.images} altText={typeData.name} />
              <TabNavigation
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <div className="space-y-6">
                {activeTab === "overview" && (
                  <OverviewTab typeData={typeData} />
                )}

                {activeTab === "specifications" && (
                  <SpecificationsTab
                    specifications={typeData.specifications}
                    certifications={typeData.certifications}
                    installationRequirements={typeData.installationRequirements}
                  />
                )}

                {activeTab === "applications" && (
                  <ApplicationsTab
                    applications={typeData.applications}
                    maintenanceInfo={typeData.maintenanceInfo}
                    faqs={typeData.faqs}
                  />
                )}

                {activeTab === "buyvsrent" && (
                  <BuyVsRentTab
                    buyVsRent={typeData.buyVsRent}
                    purchase={typeData.purchase}
                    rental={typeData.rental}
                  />
                )}
              </div>

              {/* UPS Types Section */}
              <UpsTypeAccordion
                upsTypes={upsTypesData}
                currentUpsId={typeData.id}
              />
            </div>

            <div className="lg:col-span-1">
              <Sidebar typeData={typeData} activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpsSystemDetailPage;
