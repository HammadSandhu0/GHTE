import React from "react";
import {
  CardHeading,
  Description,
  Header,
  Heading,
  MotionDiv,
  SubHeading,
} from "./Headings"; // Assuming these components are predefined.
import { ArrownRightIcon } from "./Icons";

export const IndustryApplications = ({ applications }) => {
  return (
    <section className="container mx-auto space-y-20">
      <Header>
        <SubHeading className="!text-secondary">
          {applications?.subHeading}
        </SubHeading>
        <Heading className="!text-primary">{applications?.heading}</Heading>

        <Description className="!text-textcolor">
          {applications?.description}
        </Description>
      </Header>

      <div
        className="grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-4 gap-6"
        alignment="left"
      >
        {applications?.details?.map((app, index) => (
          <div
            key={index}
            className="relative group border rounded-[20px] shadow-lg flex flex-col items-start justify-between overflow-hidden"
          >
            <div className="p-6 space-y-4">
              <Header alignment="left">
                <CardHeading>{app.industry}</CardHeading>
                <Description>{app.description}</Description>
              </Header>
              <SubHeading className="!text-primary/75">
                Key Benefits:
              </SubHeading>
              <MotionDiv>
                {app.benefits.map((benefit, benefitIndex) => (
                  <span
                    key={benefitIndex}
                    className="flex items-center justify-start gap-x-2"
                  >
                    <ArrownRightIcon />
                    <Description>{benefit}</Description>
                  </span>
                ))}
              </MotionDiv>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
