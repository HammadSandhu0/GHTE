// avrData.js

export const metadata = {
  title: {
    default:
      "Automatic Voltage Regulator Services in Saudi Arabia | Gulf Horizon Telecom Est",
  },
  description:
    "Find top-quality AVRs at Gulf Horizon Telecom Est, Saudi Arabia. Choose Automatic Voltage Regulator from 220V, 3-phase, and generator-specific models.",
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
  backgroundImage: "/avr/avrbanner.webp",
});

export const Sidebarcategories = (t) => ({
  heading: t("Sidebarcategories.heading"),
  details: [
    {
      name: t("Sidebarcategories.details.Generators"),
      link: "/generators-saudi-arabia",
    },
    {
      name: t("Sidebarcategories.details.ups_system"),
      link: "/ups-saudi-arabia",
    },
    {
      name: t("Sidebarcategories.details.Batteries"),
      link: "/battery-solutions-saudi-arabia",
    },
    {
      name: t("Sidebarcategories.details.Load_Banks"),
      link: "/load-bank-rental-saudi-arabia",
    },
  ],
});

export const mainPageContent = (t) => ({
  images: ["/avr/avr1.webp", "/avr/avr2.webp", "/avr/avr3.webp"],
  heading: t("heading"),
  description: t("description"),

  products: {
    productTitle: t("Products.productTitle"),
    details: [
      {
        name: t("Products.product_1.title"),
        description: t("Products.product_1.description"),
      },
      {
        name: t("Products.product_2.title"),
        description: t("Products.product_2.description"),
      },
      {
        name: t("Products.product_3.title"),
        description: t("Products.product_3.description"),
      },
      {
        name: t("Products.product_4.title"),
        description: t("Products.product_4.description"),
      },
    ],
  },
});

export const benefitItems = (t) => ({
  heading: t("benefitItems.title"),
  description: t("benefitItems.description"),
  banner: "/avr/avrbanner.webp",
  details: [
    {
      heading: t("benefitItems.details.benefit_1.title"),
      description: t("benefitItems.details.benefit_1.description"),
    },
    {
      heading: t("benefitItems.details.benefit_1.title"),
      description: t("benefitItems.details.benefit_1.description"),
    },
    {
      heading: t("benefitItems.details.benefit_1.title"),
      description: t("benefitItems.details.benefit_1.description"),
    },
  ],
});

export const whychooseus = (t) => [
  {
    heading: t("whychoose.why_1_title"),
    description: t("whychoose.why_1_description"),
  },
  {
    heading: t("whychoose.why_2_title"),
    description: t("whychoose.why_2_description"),
  },
  {
    heading: t("whychoose.why_3_title"),
    description: t("whychoose.why_3_description"),
  },
];
