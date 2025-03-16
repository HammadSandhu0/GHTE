// loadBankData.js

export const metadata = {
  title: {
    default: "Load Bank Rental Saudi Arabia | Sale AC & DC Load Banks",
  },
  description:
    "Load Bank Rental Saudi Arabia for AC & DC applications. Ideal for generator testing, industrial use, and more. Get tailored rental solutions and expert services.",
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
  backgroundImage: "/loadbank/loadbankbanner.webp",
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
      name: t("Sidebarcategories.details.AVR"),
      link: "/automatic-voltage-regulator-services-Saudi-Arabia",
    },
  ],
});

export const mainPageContent = (t) => ({
  images: [
    "/loadbank/loadbank1.webp",
    "/loadbank/loadbank2.webp",
    "/loadbank/loadbank3.webp",
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
    ],
  },
});

export const benefitItems = (t) => ({
  heading: t("benefitItems.title"),
  description: t("benefitItems.description"),
  banner: "/loadbank/loadbankbanner.webp",
  details: [
    {
      heading: t("benefitItems.details.benefit_1.title"),
      description: t("benefitItems.details.benefit_1.description"),
    },
    {
      heading: t("benefitItems.details.benefit_2.title"),
      description: t("benefitItems.details.benefit_2.description"),
    },
    {
      heading: t("benefitItems.details.benefit_3.title"),
      description: t("benefitItems.details.benefit_3.description"),
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
