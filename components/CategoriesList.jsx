import Link from "next/link";
import { CardHeading } from "./Headings";
import { ArrowWithCircleIcon } from "./Icons";

export const SideCategoriesList = ({ sidebarCatagories }) => (
  <div className="border-2 rounded-3xl py-8 px-4 hidden lg:block">
    <CardHeading>{sidebarCatagories.heading}</CardHeading>
    <ul className="space-y-4">
      {sidebarCatagories?.details?.map((category, index) => (
        <li key={index} className="flex items-center border-b group">
          <ArrowWithCircleIcon
            stroke="#ffb703"
            className="mr-2 transform transition-transform duration-300 group-hover:rotate-45"
          />
          <Link
            href={category.link}
            className="text-primary flex items-center text-lg font-normal py-4 hover:text-secondary transition-all duration-300 group-hover:translate-x-1"
          >
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
