import { memo } from "react";
import Link from "next/link";
import { CardHeading, MotionDiv } from "./Headings";

export const SideCategoriesList = ({ sidebarCatagories }) => (
  console.log(sidebarCatagories),
  (
    <div className="border-2 rounded-3xl py-8 px-4">
      <CardHeading>{sidebarCatagories.heading}</CardHeading>
      <ul className="space-y-4">
        {sidebarCatagories?.details?.map((category, index) => (
          <li key={index} className="flex items-center border-b">
            <img
              src={"/icons/readmore-arrow.svg"}
              alt="arrow icon"
              className="mr-2"
            />
            <Link
              href={category.link}
              className="text-primary flex items-center text-lg font-normal py-4 hover:text-secondary transition-all"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
);
