"use client";

import { useState } from "react";
import {
  CardHeading,
  Description,
  Header,
  Heading,
  SubHeading,
} from "./Headings";

const FaqAccordion = ({ faqs }) => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  // Check if heading matches Online UPS or Line Interactive UPS
  const isLeftAligned =
    faqs?.heading?.toLowerCase().includes("online ups") ||
    faqs?.heading?.toLowerCase().includes("line interactive ups");

  return (
    <div className="container mx-auto space-y-10 px-4 md:px-0">
      <Header alignment={isLeftAligned ? "left" : "center"}>
        <SubHeading>{faqs?.subHeading || ""}</SubHeading>

        {isLeftAligned ? (
          <CardHeading className="!text-primary">
            {faqs?.heading || ""}
          </CardHeading>
        ) : (
          <Heading className="!text-primary">{faqs?.heading || ""}</Heading>
        )}

        <Description className="!text-textcolor">
          {faqs?.description || ""}
        </Description>
      </Header>

      <div>
        {faqs?.details?.map((faq, index) => (
          <div
            key={index}
            className={`border-b last:border-b-0 ${
              openFaq === index ? "bg-gray-50" : ""
            }`}
          >
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full px-4 py-4 text-left font-medium"
            >
              <SubHeading className="!text-primary">{faq.question}</SubHeading>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-transform ${
                  openFaq === index ? "transform rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div
              className={`px-4 pb-4 ${openFaq === index ? "block" : "hidden"}`}
            >
              <Description>{faq.answer}</Description>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
