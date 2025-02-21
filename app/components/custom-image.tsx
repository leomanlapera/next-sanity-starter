import { urlForImage } from "@/sanity/lib/utils";
import NextImage from "next/image";
import React, { useMemo } from "react";

interface Props {
  image?: any;
  alt: string;
  width: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
}

const CustomImage: React.FC<Props> = ({
  image,
  alt,
  width,
  height,
  fill,
  priority,
  className,
}) => {
  const imageUrl = useMemo(() => {
    return image ? urlForImage(image)?.width(width).url() : null;
  }, [image, width]);

  if (!imageUrl) return null;

  return (
    <NextImage
      src={imageUrl}
      alt={alt}
      priority={priority}
      className={className}
      sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 80vw, 100vw"
      {...(fill ? { fill } : { width, height })}
    />
  );
};

export default CustomImage;
