// servicesData.js
export const getServicesData = (t) => [
  {
    category: t("categories.power"),
    items: [
      {
        title: t("services.ups_system.title"),
        description: t("services.ups_system.description"),
        image: "/ups.png",
        link: "/ups-saudi-arabia",
      },
      {
        title: t("services.load_bank.title"),
        description: t("services.load_bank.description"),
        image: "/loadbank.png",
        link: "/load-bank-rental-saudi-arabia",
      },
      {
        title: t("services.Battery_Solutions.title"),
        description: t("services.Battery_Solutions.description"),
        image: "/batteries.png",
        link: "/battery-solutions-saudi-arabia",
      },
      {
        title: t("services.AVR.title"),
        description: t("services.AVR.description"),
        image: "/avr.png",
        link: "/automatic-voltage-regulator-services-Saudi-Arabia",
      },
      {
        title: t("services.Generator.title"),
        description: t("services.Generator.description"),
        image: "/genraters.png",
        link: "/generators-saudi-arabia",
      },
    ],
  },
  {
    category: t("categories.security"),
    items: [
      {
        title: t("services.CCTV.title"),
        description: t("services.CCTV.description"),
        image: "/cctv.png",
        link: "/cctv-systems-services",
      },
      {
        title: t("services.Access_Control.title"),
        description: t("services.Access_Control.description"),
        image: "/accesscontroll.png",
        link: "/access-control-systems-in-saudi-arabia",
      },
      {
        title: t("services.Fire_Fighting.title"),
        description: t("services.Fire_Fighting.description"),
        image: "/fire.png",
        link: "/fire-fighting-systems-solution-in-saudi-arabia",
      },
      {
        title: t("services.Sound_System.title"),
        description: t("services.Sound_System.description"),
        image: "/sound.png",
        link: "/sound-system-services-in-saudi-arabia",
      },
      {
        title: t("services.Cyber_Security.title"),
        description: t("services.Cyber_Security.description"),
        image: "/cybersecurity.png",
        link: "/cyber-security-services-in-saudi-arabia",
      },
    ],
  },
  {
    category: t("categories.it"),
    items: [
      {
        title: t("services.Server_Computer.title"),
        description: t("services.Server_Computer.description"),
        image: "/server.png",
        link: "/server-and-computer-solution-in-saudia-arabia",
      },
      {
        title: t("services.Networking_Switches.title"),
        description: t("services.Networking_Switches.description"),
        image: "/networking.png",
        link: "/",
      },
      {
        title: t("services.Racks_Power.title"),
        description: t("services.Racks_Power.description"),
        image: "/racks.png",
        link: "/racks-and-power-distribution-units-in-saudi-arabia",
      },
    ],
  },
];
