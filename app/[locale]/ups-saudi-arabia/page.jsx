import { Description, Header, Heading } from "@/components/Headings";
import { IndustryApplications } from "@/components/IndustryApplications";
import ImageSlider from "@/components/ImageSlider";
import { modularUpsData } from "@/data/modular-ups-data";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import { SideCategoriesList } from "@/components/CategoriesList";
import { ProductList } from "@/components/ProductList";
import ProductTypeCard from "@/components/ProductTypeCard";
import SEOHead from "@/components/SeoHead";
import {
  metadata,
  pageHeader,
  Sidebarcategories,
  whychooseus,
} from "@/data/upsData";
import WhyChooseUs from "@/components/WhyChooseUs";
import FaqAccordion from "@/components/FaqAccordion";
import { getTranslations } from "next-intl/server";

export default async function page({ params: { locale } }) {
  const t = await getTranslations({
    locale,
    namespace: "UPS_SYSTEM",
  });

  const UPSData = {
    title: "UPS Systems",
    description:
      "At Gulf Horizon Telecom, we consider the important role Uninterruptible Power Supply (UPS) systems play in the safety of your operations. We committed that each system is unique and designed by proper personal planning. Our considerable portfolio of UPS systems ensures uninterrupted power for a large range of applications. Preservation of loss of data and business quality mainly depends on UPS solutions. As authorized dealers for Schneider Electric and the single distributors for RELIABILITY POWER SYSTEMS in the MENA region, we guarantee to deliver high-quality products and exceptional support. With almost 20+ years of experience, a hard-working team of factory-trained engineers, and more than 500 satisfied clients, we provide dependable and customized power protection solutions to fulfill your basic requirements. During voltage fluctuations or power outages, the UPS provides a huge power source that delivers electricity to various vital equipment.",
    images: ["/ups/ups-1.webp", "/ups/ups-2.webp", "/ups/ups-3.webp"],
    rentalBenefits: [
      "Flexible Short-Term Power Solutions",
      "Lower Upfront Costs",
      "Includes Maintenance and Support",
    ],
    purchaseBenefits: [
      "Long-Term Cost Savings",
      "Customized Ownership",
      "Full Control Over Equipment",
    ],
    maintenance: {
      preventive: [
        "Battery Health Checks",
        "Electrical Connection Inspections",
        "Cooling System Maintenance",
      ],
      schedule: {
        monthly: ["Visual Inspection", "Basic Functional Testing"],
        quarterly: ["Detailed Performance Analysis", "Battery Load Testing"],
        annual: [
          "Comprehensive System Evaluation",
          "Component Replacement as Needed",
        ],
      },
    },
    faqs: [
      {
        question: "How long can a UPS system provide backup power?",
        answer:
          "Backup duration depends on the system's capacity and connected load. Typically ranges from 5-30 minutes for standard systems.",
      },
      {
        question: "Do I need a UPS for my home office?",
        answer:
          "Recommended for protecting computers, network equipment, and preventing data loss during power interruptions.",
      },
    ],
  };
  const ProductData = {
    productTitle: "Our UPS Solutions Categories",
    details: [
      {
        name: "Outdoor UPS Systems",
        description:
          "Outdoor UPS systems are committed to remarkable power systems in severe conditions. These solutions are best for remote locations and challenging climates, providing outdoor power protection systems that take the experiment of time. Ups provide stable and clear power supply in various types of equipment.in case of power failure, it has its own stored backup data.",
      },
      {
        name: "Industrial UPS Solutions",
        description:
          "Our industrial-grade UPS systems are mainly designed for heavy-duty applications, providing robust power protection for factories, manufacturing plants, and other preferable environments. With industrial UPS solutions, your operations can always remain uninterrupted, even during power outages.",
      },
      {
        name: "Modular UPS Solutions",
        description:
          "Scalability is basic for businesses with developing power demands. Our modular UPS systems are manufactured to modify according to your requirements. These solutions offer moderate configurations, making them best for data center, corporate facilities, and many more.",
      },
      {
        name: "Data Center UPS Systems",
        description:
          "Our data center UPS solutions are designed for harsh environments within capacities that range between 600VA to 2 MVA. These high-power capacity systems guarantee your IT system to operate smoothly and safely for your vital data.",
      },
    ],
  };
  const UPS_TYPES = {
    subHeading: "Types of UPS Systems",
    heading: "Top UPS Categories Tailored for Your Needs!",
    description:
      "Discover our range of UPS systems designed to meet power needs in Saudi Arabia. Whether for home, business, or industrial use, we provide reliable solutions to keep your power uninterrupted. Our products are trusted across Riyadh, Jeddah, Dammam, and beyond",
    details: [
      {
        name: "Online UPS",
        description:
          "Provides the highest level of power protection by converting incoming AC power to DC and then back to clean AC power.",
        image: "/ups/ups-1.webp",
        link: "/ups-saudi-arabia/online-ups",
        applications: [
          "Data centers",
          "Server rooms",
          "Medical equipment",
          "Industrial control systems",
        ],
        features: [
          "Zero transfer time to battery during power outages",
          "Complete isolation from power problems",
          "Pure sine wave output",
          "Advanced surge protection",
        ],
        specifications: [
          {
            capacity: "10kVA",
            dimensions: "560 x 260 x 720mm",
            weight: "82kg",
          },
          {
            capacity: "20kVA",
            dimensions: "560 x 260 x 720mm",
            weight: "105kg",
          },
        ],
      },
      {
        name: "Line-Interactive UPS",
        description:
          "Offers a good balance of protection and cost-efficiency with voltage regulation capabilities.",
        image: "/ups/ups-2.webp",
        link: "/ups-saudi-arabia/line-interactive-ups",
        applications: [
          "Small businesses",
          "Home office equipment",
          "Network equipment",
          "Point of sale systems",
        ],
        features: [
          "Automatic voltage regulation",
          "Battery backup during outages",
          "Surge protection",
          "Energy-efficient design",
        ],
        specifications: [
          {
            capacity: "1kVA",
            dimensions: "390 x 180 x 240mm",
            weight: "12kg",
          },
          {
            capacity: "3kVA",
            dimensions: "460 x 220 x 320mm",
            weight: "28kg",
          },
        ],
      },
      {
        name: "Standby UPS",
        description:
          "Basic power protection that switches to battery power when utility power fails.",
        image: "/ups/ups-3.webp",
        link: "/ups-saudi-arabia/standby-ups",
        applications: [
          "Home computers",
          "Gaming systems",
          "Entry-level networking devices",
          "Non-critical electronics",
        ],
        features: [
          "Affordable power protection",
          "Compact design",
          "Easy to install and use",
          "USB connectivity for automatic shutdown",
        ],
        specifications: [
          {
            capacity: "650VA",
            dimensions: "290 x 140 x 180mm",
            weight: "4.5kg",
          },
          {
            capacity: "1000VA",
            dimensions: "320 x 150 x 190mm",
            weight: "6.8kg",
          },
        ],
      },
    ],
  };
  const UPS_APPLICATIONS = {
    subHeading: "Power Protection for Critical Industries",
    heading: "Industry Applications of UPS Systems in Saudi Arabia",
    description:
      "Uninterruptible Power Supply (UPS) systems play a vital role in ensuring uninterrupted power for a variety of industries in Saudi Arabia. From healthcare to telecommunications, manufacturing, and data centers, UPS solutions are essential to maintain continuous operations, prevent downtime, and protect valuable equipment from power surges or outages.",
    details: [
      {
        industry: "Data Centers",
        description:
          "In Saudi Arabia’s rapidly digitizing economy, UPS systems serve as essential guardians for data centers across Riyadh, Jeddah, and emerging tech hubs like NEOM. They provide instant backup power during outages, bridging the gap until generators activate, while shielding servers from data corruption and hardware failures caused by Saudi Arabia’s harsh climate and grid inconsistencies.",
        benefits: [
          "Prevents costly data loss & server damage",
          "Ensures 24/7 uptime for cloud services & Saudi e-government platforms",
          "Protects sensitive infrastructure from voltage spikes common in regional grids",
          "Maintains operations during frequent sandstorm-related power fluctuations",
        ],
      },
      {
        industry: "Financial Services",
        description:
          "Saudi banks and fintech hubs rely on industrial-grade UPS systems to safeguard transaction integrity, ATM networks, and online banking platforms. With cyber threats rising, these systems ensure compliance with Saudi Central Bank (SAMA) regulations while securing critical data during Riyadh’s peak trading hours and Hajj season transaction surges.",
        benefits: [
          "Enables uninterrupted mobile payment processing across KSA",
          "Protects ATM networks during grid instability in remote regions",
          "Secures data centers from Red Sea coastal humidity damage",
          "Maintains compliance with Saudi Arabia’s financial cybersecurity standards",
        ],
      },
      {
        industry: "Manufacturing",
        description:
          "As Saudi Arabia accelerates its Vision 2030 industrial growth, UPS systems defend automated production lines in Jubail’s petrochemical plants and Dammam’s manufacturing zones. They prevent machinery jams, robotic errors, and spoilage of materials caused by sudden voltage drops in desert industrial complexes.",
        benefits: [
          "Shields German/Chinese automation tech from desert power surges",
          "Maintains precision in Saudi Aramco’s IoT-enabled facilities",
          "Prevents material waste in 50°C+ factory environments",
          "Reduces downtime costs for Eastern Province export operations",
        ],
      },
      {
        industry: "Healthcare",
        description:
          "From Riyadh’s mega-hospitals to mobile clinics in Asir’s mountainous regions, UPS systems ensure life-saving medical equipment stays operational. They provide seamless power for neonatal incubators, MRI scanners, and vaccine cold storage during frequent grid switches in Saudi healthcare facilities",
        benefits: [
          "Keeps ICU ventilators running during emergency generator transitions",
          "Protects imported diagnostic gear from premature rust & dust damage",
          "Maintains emergency lighting in Jeddah’s high-traffic hospitals",
          "Aligns with Saudi Health Ministry’s critical infrastructure mandates",
        ],
      },
    ],
  };
  const UPS_FAQS = {
    subHeading: "UPS FAQs",
    heading: "Frequently Asked Questions (FAQ) about UPS Systems",
    description:
      "Find answers to common questions about UPS (Uninterruptible Power Supply) systems and how they can benefit your home, business, or industry in Saudi Arabia.",
    details: [
      {
        question: "What is a UPS system and why do I need one?",
        answer:
          "A UPS (Uninterruptible Power Supply) is a device that provides battery backup power during power outages, protecting your equipment from unexpected shutdowns. It also regulates voltage, protecting against power surges, spikes, and brownouts that could damage your equipment. UPS systems are essential for businesses, data centers, and home offices to prevent data loss, hardware damage, and operational downtime.",
      },
      {
        question: "How do I determine what size UPS I need?",
        answer:
          "To determine the right UPS size, calculate the total power requirements of all equipment you need to protect. Add up the wattage ratings of each device, then add 20-30% extra capacity for future expansion and peak load demands. For mission-critical applications, we recommend consulting with our power experts who can help you determine the optimal UPS capacity based on your specific needs and environment.",
      },
      {
        question:
          "What's the difference between online, line-interactive, and standby UPS systems?",
        answer:
          "The three main UPS types differ in how they handle power conversion: Online UPS (Double-Conversion) continuously converts incoming AC to DC and back to AC, providing the highest level of protection with zero transfer time. Line-Interactive UPS regulates voltage without switching to battery power during minor fluctuations, offering medium-level protection. Standby UPS (Offline) only switches to battery when utility power fails, providing basic protection for non-critical equipment.",
      },
      {
        question: "How long will a UPS run during a power outage?",
        answer:
          "Runtime depends on battery capacity and the power load connected. Most UPS systems provide between 5-30 minutes of runtime at full load, allowing enough time to save work and properly shut down equipment. For extended runtime, additional battery packs can be added to certain UPS models. Our product specifications detail the estimated runtime at different load levels, and our experts can help you design a solution with the runtime you require.",
      },
      {
        question: "Do you offer UPS rental options in Saudi Arabia?",
        answer:
          "Yes, we provide flexible UPS rental solutions across Saudi Arabia for temporary power needs, testing, or during facility upgrades. Our rental fleet includes a range of capacities from 1kVA to 500kVA, with short-term and long-term rental options available. All rental units are thoroughly maintained and tested before deployment to ensure reliability. Contact our rental department for availability and pricing based on your location and requirements.",
      },
      {
        question: "What maintenance does a UPS require?",
        answer:
          "Regular UPS maintenance includes battery testing, visual inspections, cleaning of components, firmware updates, and electrical connection checks. For most business applications, we recommend professional preventive maintenance at least twice a year. Batteries typically need replacement every 3-5 years depending on usage conditions and temperature. We offer comprehensive maintenance contracts that include all necessary services to maximize the lifespan and reliability of your UPS system.",
      },
      {
        question: "Can I install a UPS system myself?",
        answer:
          "Small UPS systems (up to 1500VA) are typically plug-and-play and can be installed by the user. However, larger systems require professional installation by certified technicians due to electrical requirements, weight considerations, and safety regulations. Improper installation of larger UPS systems could void warranties and pose safety risks. Our installation team is certified to handle all sizes of UPS deployments, ensuring proper setup and integration with your existing power infrastructure.",
      },
      {
        question: "What warranty do you offer on UPS systems?",
        answer:
          "Our UPS systems come with a standard 2-year warranty covering parts and labor. Premium models include extended 3-year warranties. Batteries typically carry a 1-year warranty. We also offer extended warranty options that can provide coverage for up to 5 years. All warranty services are handled by our factory-trained technicians using genuine parts. For detailed warranty information on specific models, please refer to the product specifications or contact our customer service team.",
      },
    ],
  };

  return (
    <>
      <SEOHead
        title={metadata.title.default}
        description={metadata.description}
        locale={locale}
        pageUrl="/ups-saudi-arabia"
      />
      <PageHeader pageHeader={pageHeader(t)} />
      <section>
        <div className="container mx-auto px-4 sm:px-6 md:px-4 xl:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-10">
              <ImageSlider
                images={UPSData.images}
                altText={"UPS Systems Images"}
              />
              <Header
                alignment="responsive"
                className="text-center mx-auto lg:!text-left"
              >
                <Heading className="!text-primary">{UPSData.title}</Heading>
                <Description>{UPSData.description}</Description>
              </Header>
              <ProductList ProductList={ProductData} />
            </div>
            <div className="lg:col-span-1 space-y-4">
              <SideCategoriesList sidebarCatagories={Sidebarcategories(t)} />
              <Sidebar typeData={modularUpsData} />
            </div>
          </div>
        </div>
        <ProductTypeCard ProductTypes={UPS_TYPES} />
        <IndustryApplications applications={UPS_APPLICATIONS} />
        <WhyChooseUs whychooseus={whychooseus(t)} />
        <FaqAccordion faqs={UPS_FAQS} />
      </section>
    </>
  );
}
