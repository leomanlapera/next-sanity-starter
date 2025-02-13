import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const Heading: React.FC<Props> = ({ children, level = 1, className }) => {
  const Tag: React.ElementType = `h${level}`;

  const mergedClasses = twMerge(
    "font-bold leading-tight",
    level === 1 && "text-3xl lg:text-5xl",
    level === 2 && "text-2xl lg:text-4xl",
    level === 3 && "text-xl lg:text-2xl",
    level === 4 && "text-lg lg:text-xl",
    level === 5 && "text-sm lg:text-lg",
    level === 6 && "text-xs lg:text-base",
    className,
  );

  return <Tag className={mergedClasses}>{children}</Tag>;
};

export default Heading;
