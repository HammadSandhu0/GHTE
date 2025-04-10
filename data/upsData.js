export const metadata = {
  title: {
    default: "UPS Saudi Arabia - Reliable Systems & Services",
  },
  description:
    "Explore Gulf Horizon Telecom Est UPS systems in Saudi Arabia, including outdoor, modular, and industrial solutions. Authorized dealers for Schneider Electric and RPS.",
};

export const pageHeader = (t) => ({
  title: t("pageheader.title"),
  backto: t("pageheader.home"),
  breadcrumbs: [
    {
      name: t("pageheader.about"),
      link: "/",
      active: true,
    },
  ],
  backgroundImage: "/ups/ups-banner.webp",
});

export const Sidebarcategories = (t) => ({
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
});

export const mainPageContent = (t) => ({
  images: ["/ups/ups-1.webp", "/ups/ups-2.webp", "/ups/ups-3.webp"],
  heading: t("heading"),
  description: t("description"),

  products: {
    productTitle: t("Products.productTitle"),
    details: [
      {
        name: t("Products.out_dooor_ups.title"),
        description: t("Products.out_dooor_ups.description"),
      },
      {
        name: t("Products.Industrial_UPS_Solutions.title"),
        description: t("Products.Industrial_UPS_Solutions.description"),
      },
      {
        name: t("Products.Modular_UPS_Solutions.title"),
        description: t("Products.Modular_UPS_Solutions.description"),
      },
      {
        name: t("Products.Data_Center_UPS_Systems.title"),
        description: t("Products.Data_Center_UPS_Systems.description"),
      },
    ],
  },
});

export const benefitItems = (t) => ({
  heading: t("benefitItems.title"),
  description: t("benefitItems.description"),
  banner: "/ups/ups-banner.webp",
  details: [
    {
      heading: t("benefitItems.details.data_protection.title"),
      description: t("benefitItems.details.data_protection.description"),
    },
    {
      heading: t("benefitItems.details.Equipment_Protection.title"),
      description: t("benefitItems.details.Equipment_Protection.description"),
    },
    {
      heading: t("benefitItems.details.compliance.title"),
      description: t("benefitItems.details.compliance.description"),
    },
  ],
});

export const whychooseus = (t) => [
  {
    heading: t("whychoose.comprehensive_ups_solutions_title"),
    description: t("whychoose.comprehensive_ups_solutions_content"),
  },
  {
    heading: t("whychoose.expertise_and_partnerships_title"),
    description: t("whychoose.expertise_and_partnerships_content"),
  },
  {
    heading: t("whychoose.nationwide_title"),
    description: t("whychoose.nationwide_content"),
  },
];
