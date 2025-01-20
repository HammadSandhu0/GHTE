"use client";
import Link from "next/link";

const Advantages = () => {
  const UpsSeries = [
    { name: "Powersteady series", titleKey: "data_center_ups_title" },
    { name: "Power pure RT series", titleKey: "data_center_ups_title" },
    { name: "Power clever series", titleKey: "data_center_ups_title" },
    { name: "Power modular series", titleKey: "data_center_ups_title" },
  ];
  return (
    <div className="col-span-2 space-y-8">
      {/* Service Entry */}
      <div>
        <h2 className="text-2xl lg:text-4xl font-bold text-primary mb-10">
          Additional UPS Services
        </h2>
        <div className="flex flex-col">
          <h3 className="font-medium text-primary text-xl mb-2">
            Temporary UPS Rentals
          </h3>
          <p className="text-textcolor text-base lg:text-lg mt-2">
            For short-term power protection requirements, we deliver temporary
            UPS rental solutions that assist with various events and industrial
            usage. Our flexible UPS rental plans ensure that uninterrupted power
            is used when you require it most.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium text-primary text-xl  mt-8">
            UPS Maintenance and Support
          </h3>
          <p className="text-textcolor text-base lg:text-lg mt-2">
            We provide comprehensive UPS maintenance services to guarantee
            favourable performance on your UPS systems. Our team deliver:
          </p>
          {/* Features */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <li className="flex items-center text-primary font-semibold text-xl">
              <img src="/readmore-arrow.svg" alt="svg" className="mr-2" />
              Scheduled UPS system upkeep
            </li>
            <li className="flex items-center text-primary font-semibold text-xl">
              <img src="/readmore-arrow.svg" alt="svg" className="mr-2" />
              UPS troubleshooting support
            </li>
            <li className="flex items-center text-primary font-semibold text-xl">
              <img src="/readmore-arrow.svg" alt="svg" className="mr-2" />
              Reliable on-site and off-site maintenance.
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium text-primary text-xl mt-8">
            Types of UPS Systems
          </h3>
          <p className="text-lg mt-4 text-textcolor font-medium">
            <span className="font-medium text-primary text-xl">
              Online UPS{" "}
            </span>
            : It provides perfect security against high power voltage problems.
          </p>

          <p className="text-lg mt-2 text-textcolor font-medium">
            <span className="font-medium text-primary text-xl">
              Standby UPS{" "}
            </span>
            : A design for the usage of irregular power for battery backup.
          </p>
          <p className="text-lg mt-2 text-textcolor font-medium">
            <span className="font-medium text-primary text-xl">
              Line-Interactive UPS{" "}
            </span>
            : It provides a basic battery backup solution that is perfect for a
            moderate power quality system.
          </p>
        </div>

        {/* Features */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {UpsSeries.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-primary font-semibold text-xl"
              data-translate-key={UpsSeries.titleKey}
            >
              <img src="/readmore-arrow.svg" alt="svg" className="mr-2" />
              {feature.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Advantages;
