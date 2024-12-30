import { urlForImage } from "@/sanity/lib/utils";
import Image from "next/image";
import React from "react";

const ImageExample: React.FC<{ image: any; alt?: string }> = ({
  image,
  alt,
}) => {
  return (
    <Image
      src={urlForImage(image)?.width(3400).url() as string}
      alt={alt || "Company Name"}
      priority
      width={3400}
      height={3200}
      sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 80vw, 100vw"
    />
  );
};

export default ImageExample;
