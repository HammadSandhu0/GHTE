import { memo } from "react";
import {
  CardHeading,
  Description,
  Header,
  Heading,
  SubHeading,
} from "./Headings";

// Reusable ProductList component
export const ProductList = memo(({ ProductList }) => (
  <div className="space-y-8">
    <Header alignment="left">
      <Heading className="!text-primary">{ProductList?.productTitle}</Heading>
    </Header>
    {ProductList?.details.map((product, index) => (
      <div key={index}>
        <Header alignment="left" spacing="tight">
          <CardHeading className="!text-primary">{product.name}</CardHeading>
          <Description>{product.description}</Description>
        </Header>
      </div>
    ))}
  </div>
));
