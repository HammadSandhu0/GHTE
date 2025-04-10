import { memo } from "react";

export const Badge = memo(({ children }) => (
  <span
    className={`inline-flex items-center px-4 py-0.4 rounded-3xl text-md font-medium bg-secondary text-white border border-secondary`}
  >
    {children}
  </span>
));
