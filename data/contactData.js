// contactData.js

export const metadata = {
  title: {
    default: "Get in Touch - Gulf Horizon Telecom Est",
  },
  description:
    "Reach out to Gulf Horizon Telecom Est for inquiries about power systems, security solutions, and data center projects. Contact us via phone, email, or our contact form.",
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
  backgroundImage: "/main/conatctbanner.webp",
});
