// cyberSecurityData.js

export const metadata = {
  title: {
    default:
      "Top Cybersecurity Services Saudi Arabia - Gulf Horizon Telecom Est Solutions",
  },
  description:
    "Secure your business with Gulf Horizon Telecom Est top-rated cybersecurity services in Saudi Arabia, including threat assessment, incident response, and risk management. Contact us today!",
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
  backgroundImage: "/cybersecurity/cyberbanner.webp",
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
      name: t("Sidebarcategories.details.fire_fighting"),
      link: "/fire-fighting-systems-solution-in-saudi-arabia",
    },
  ],
});

export const mainPageContent = (t) => ({
  images: [
    "/cybersecurity/cyber1.webp",
    "/cybersecurity/cyber2.webp",
    "/cybersecurity/cyber3.webp",
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
  banner: "/cybersecurity/cyberbanner.webp",
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
