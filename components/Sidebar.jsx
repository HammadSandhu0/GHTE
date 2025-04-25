"use client";
import { useState } from "react";
import { CardHeading, Description, Header } from "./Headings";
import { MailIcon, PhoneIcon } from "./Icons";

const Sidebar = () => {
  return (
    <div className="bg-primary text-white rounded-3xl p-4 lg:p-6 sticky top-4">
      <div className="p-6 space-y-10">
        <Header>
          <CardHeading className="text-white">Request Information</CardHeading>
          <Description className="text-white">
            Interested in UPS Systems? Contact our team for detailed
            specifications, pricing, and availability.
          </Description>
        </Header>
        <div className="space-y-6 flex flex-col items-center justify-center">
          <div className="relative group w-fit">
            <div className="flex items-center bg-white text-primary rounded-full px-4 py-2 transition duration-300 hover:shadow-lg w-full">
              <span className="bg-secondary p-2 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <MailIcon
                  stroke="white"
                  className="group-hover:animate-pulse"
                />
              </span>
              <button className="hover:text-accent transition">
                Info@gulfhorizontele.com
              </button>
            </div>
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-secondary text-white text-sm py-2 px-4 rounded-lg shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-secondary"></div>
              Send us an email
            </div>
          </div>

          <div className="relative group w-fit">
            <div className="flex items-center bg-white text-primary rounded-full px-4 py-2 transition duration-300 hover:shadow-lg w-full">
              <span className="bg-secondary p-2 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <PhoneIcon fill="white" className="group-hover:animate-pulse" />
              </span>
              <button className="hover:text-accent transition">
                +966 122 873 071
              </button>
            </div>
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-secondary text-white text-sm py-2 px-4 rounded-lg shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-secondary"></div>
              Call us now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
