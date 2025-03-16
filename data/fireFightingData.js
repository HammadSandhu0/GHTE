// fireFightingData.js

export const metadata = {
  title: {
    default: "Fire Fighting Systems Solution in Saudi Arabia",
  },
  description:
    "Explore Gulf Horizon Telecom Est expert fire fighting systems solution, including alarms, sprinklers, and extinguishers, customized for safety and Compliance in Saudi Arabia.",
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
  backgroundImage: "/firefighting/firebanner.webp",
});

export const Sidebarcategories = (t) => ({
  heading: t("Sidebarcategories.heading"),
  details: [
    {
      name: t("Sidebarcategories.details.cctv"),
      link: "/cctv-systems-services",
    },
    {
      name: t("Sidebarcategories.details.access_control"),
      link: "/access-control-systems-in-saudi-arabia",
    },
    {
      name: t("Sidebarcategories.details.sound_system"),
      link: "/sound-system-services-in-saudi-arabia",
    },
    {
      name: t("Sidebarcategories.details.cyber_security"),
      link: "/cyber-security-services-in-saudi-arabia",
    },
  ],
});

export const mainPageContent = (t) => ({
  images: [
    "/firefighting/fire1.webp",
    "/firefighting/fire2.webp",
    "/firefighting/fire3.webp",
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
  banner: "/firefighting/firebanner.webp",
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
