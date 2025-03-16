// accessControlData.js

export const metadata = {
  title: {
    default:
      "Access Control Systems in Saudi Arabia – Gulf Horizon Telecom Est",
  },
  description:
    "Secure your premises with Gulf Horizon Telecom Est advanced access control systems in Saudi Arabia, offering biometric and cloud-based solutions.",
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
  backgroundImage: "/access-control/accessbanner.webp",
});

export const Sidebarcategories = (t) => ({
  heading: t("Sidebarcategories.heading"),
  details: [
    {
      name: t("Sidebarcategories.details.cctv"),
      link: "/cctv-systems-services",
    },
    {
      name: t("Sidebarcategories.details.fire_fighting"),
      link: "/fire-fighting-systems-solution-in-saudi-arabia",
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
    "/access-control/access1.webp",
    "/access-control/access2.webp",
    "/access-control/access3.webp",
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
  banner: "/access-control/accessbanner.webp",
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
