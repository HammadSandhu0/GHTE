// batteryData.js

export const metadata = {
  title: {
    default: "Battery Solutions - Reliable Energy Systems & Services",
  },
  description:
    "Premium battery solutions, including Lithium-ion, VRLA, and industrial batteries. Expert system design, maintenance, and custom energy-efficient options.",
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
  backgroundImage: "/batteries/batterybanner.webp",
});

export const Sidebarcategories = (t) => ({
  heading: t("Sidebarcategories.heading"),
  details: [
    {
      name: t("Sidebarcategories.details.Load_bank"),
      link: "/load-bank-rental-saudi-arabia",
    },
    {
      name: t("Sidebarcategories.details.ups_system"),
      link: "/ups-saudi-arabia",
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
  images: [
    "/batteries/battery.webp",
    "/batteries/battery2.webp",
    "/batteries/battery3.webp",
  ],
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
      {
        name: t("Products.product_5.title"),
        description: t("Products.product_5.description"),
      },
      {
        name: t("Products.product_6.title"),
        description: t("Products.product_6.description"),
      },
      {
        name: t("Products.product_7.title"),
        description: t("Products.product_7.description"),
      },
      {
        name: t("Products.product_8.title"),
        description: t("Products.product_8.description"),
      },
    ],
  },
});

export const benefitItems = (t) => ({
  heading: t("benefitItems.title"),
  description: t("benefitItems.description"),
  banner: "/batteries/batterybanner.webp",
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
