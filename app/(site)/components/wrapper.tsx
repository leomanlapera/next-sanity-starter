import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ className, children }) => {
  const mergedClasses = twMerge("w-full mx-auto px-4 max-w-7xl", className);
  return <div className={mergedClasses}>{children}</div>;
};

export default Wrapper;
