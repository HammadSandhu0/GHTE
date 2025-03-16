// cctvData.js

export const metadata = {
  title: {
    default: "CCTV Systems Services | Installation, Maintenance & Solutions",
  },
  description:
    "Top-class CCTV systems services by Gulf Horizon Telecom Est: Custom observation systems, installation, maintenance, monitoring, and modern designs for homes and businesses. Secure your space today!",
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
  backgroundImage: "/cctv/cctvbanner.webp",
});

export const Sidebarcategories = (t) => ({
  heading: t("Sidebarcategories.heading"),
  details: [
    {
      name: t("Sidebarcategories.details.access_control"),
      link: "/access-control-systems-in-saudi-arabia",
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
  images: ["/cctv/cctv1.webp", "/cctv/cctv2.webp", "/cctv/cctv3.webp"],
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
  banner: "/cctv/cctvbanner.webp",
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
      heading: "Customized Energy-Efficient Systems",
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
