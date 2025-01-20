import React from "react";

// const ServiceBenefitItem = ({ icon, heading, description, delay }) => {
//   return (
//     <div
//       className="bg-white p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 py-10 flex flex-col items-start cursor-pointer"
//       style={{ animationDelay: delay }}
//     >
//       <div className="mb-4">
//         <img src={icon} alt={heading} className="mx-auto" />
//       </div>
//       <div className="mt-10">
//         <h3
//           className="text-2xl font-semibold mb-2 text-primary"
//           data-translate-key={service.titleKey}
//         >
//           {heading}
//         </h3>
//         <p className="text-textcolor mt-4">{description}</p>
//       </div>
//     </div>
//   );
// };

const ServiceBenefit = ({ items }) => {
  return (
    <div className="service-benefit bg-[url('/upsbanner.jpg')] relative py-36 bg-fixed bg-cover ">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-8">
          <h2
            className="text-white text-3xl md:text-4xl font-bold mb-8"
            data-translate-key={items.titleKey}
          >
            {items.heading}
          </h2>
          <p
            className="text-white/80 text-lg md:text-xl lg:w-3/4 mx-auto w-full"
            data-translate-key={items.descriptionKey}
          >
            {items.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.details.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 py-10 flex flex-col items-start cursor-pointer"
            >
              <div className="mb-4">
                <img src={item.icon} alt={item.heading} className="mx-auto" />
              </div>
              <div className="mt-6">
                <h3
                  className="text-2xl font-semibold mb-2 text-primary"
                  data-translate-key={item.titleKey}
                >
                  {item.heading}
                </h3>
                <p
                  className="text-textcolor mt-4"
                  data-translate-key={item.descriptionKey}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceBenefit;
