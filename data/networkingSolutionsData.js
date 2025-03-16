// networkingSolutionsData.js

export const metadata = {
  title: {
    default: "Networking Solutions and Switches | Gulf Horizon Tele EST",
  },
  description:
    "Discover Gulf Horizon Tele’s highest working networking solutions. We offer switches, cables, patch panels, and many more to guarantee you a safe and trusted connection for your business.",
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
  backgroundImage: "/networking/networkbanner.webp",
});

export const Sidebarcategories = (t) => ({
  heading: t("Sidebarcategories.heading"),
  details: [
    {
      name: t("Sidebarcategories.details.racks"),
      link: "/racks-and-power-distribution-units-in-saudi-arabia",
    },
    {
      name: t("Sidebarcategories.details.computer_solution"),
      link: "/server-and-computer-solution-in-saudi-arabia",
    },
  ],
});

export const mainPageContent = (t) => ({
  images: [
    "/networking/network1.webp",
    "/networking/network2.webp",
    "/networking/network3.webp",
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
    ],
  },
});

export const benefitItems = (t) => ({
  heading: t("benefitItems.title"),
  description: t("benefitItems.description"),
  banner: "/networking/networkbanner.webp",
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
