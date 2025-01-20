import React from "react";

const ServiceSidebar = ({ categories = [] }) => {
  return (
    <>
      {/* Sidebar */}
      <div className="space-y-8 lg:w-[90%] mx-auto">
        {/* Categories List */}
        <div className="border-2 rounded-3xl py-8 px-4">
          <h3 className="text-2xl lg:text-3xl mb-6 text-primary font-medium">
            Other Power Products
          </h3>
          <ul className="space-y-4">
            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  href={category.link}
                  className="text-primary flex items-center text-xl font-normal border-b py-4 hover:text-secondary transition-all"
                >
                  <img src="/readmore-arrow.svg" alt="svg" className="mr-2" />
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sidebar CTA */}
        <div className="bg-primary text-white rounded-3xl p-4 py-8 lg:px-6 lg:py-16 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-8">
            You still have a question
          </h3>
          <p className="mb-6 text-base font-medium lg:text-lg">
            {contact.message}
          </p>
          <div className="space-y-4 flex flex-col items-center justify-center">
            {contact.details.map((detail, index) => (
              <div
                key={index}
                className="flex items-center bg-white text-primary rounded-full px-4 py-2"
              >
                <span className="bg-secondary p-2 rounded-full flex items-center justify-center mr-2">
                  <img src={detail.icon} alt={detail.alt} className="h-4 w-4" />
                </span>
                <a href={detail.link} className="hover:text-accent transition">
                  {detail.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSidebar;
