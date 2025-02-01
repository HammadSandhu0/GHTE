module.exports = {
  siteUrl: "https://www.gulfhorizontele.com", // Your site URL
  generateRobotsTxt: true, // Generate robots.txt file
  outDir: "public", // Output directory
  additionalPaths: async (config) => {
    const staticRoutes = [
      "/en",
      "/en/ups-saudi-arabia",
      "/en/battery-solutions-saudi-arabia",
      "/en/generators-saudi-arabia",
      "/en/load-bank-rental-saudi-arabia",
      "/en/automatic-voltage-regulator-services-Saudi-Arabia",
      "/en/cctv-systems-services",
      "/en/fire-fighting-systems-solution-in-saudi-arabia",
      "/en/cyber-security-services-in-saudi-arabia",
      "/en/sound-system-services-in-saudi-arabia",
      "/en/racks-and-power-distribution-units-in-saudi-arabia",
      "/en/networking-solutions",
      "/en/server-and-computer-solution-in-saudia-arabia",
      "/en/client-projects",
      "/en/contact",

      "/ar",
      "/ar/ups-saudi-arabia",
      "/ar/battery-solutions-saudi-arabia",
      "/ar/generators-saudi-arabia",
      "/ar/load-bank-rental-saudi-arabia",
      "/ar/automatic-voltage-regulator-services-Saudi-Arabia",
      "/ar/cctv-systems-services",
      "/ar/fire-fighting-systems-solution-in-saudi-arabia",
      "/ar/cyber-security-services-in-saudi-arabia",
      "/ar/sound-system-services-in-saudi-arabia",
      "/ar/racks-and-power-distribution-units-in-saudi-arabia",
      "/ar/networking-solutions",
      "/ar/server-and-computer-solution-in-saudia-arabia",
      "/ar/client-projects",
      "/ar/contact",

      "/about", // Static route for About
      "/services", // Static route for Services
      "/contact", // Static route for Contact
      // Add more static routes as needed
    ];

    return staticRoutes.map((route) => ({
      loc: `https://www.gulfhorizontele.com${route}`,
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }));
  },
};
