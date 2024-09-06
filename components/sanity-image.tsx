"use client";

import { urlForImage } from "@/sanity/sanity.utils";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image, { ImageProps } from "next/image";

// Define a type guard to check if src is a SanityImageSource object
function isSanityImageSource(
  src: SanityImageSource | undefined
): src is { asset: { _ref: string } } {
  return typeof src === "object" && src !== null && "asset" in src;
}

type Props = Omit<ImageProps, "src"> & {
  src?: SanityImageSource; // Optional Sanity image source
  fallbackSrc?: string; // Optional fallback image source
};

export default function SanityImage({
  src,
  alt,
  fallbackSrc = "",
  priority = true,
  ...props
}: Props) {
  // Determine the image URL based on the type of src
  const imageUrl = isSanityImageSource(src)
    ? urlForImage(src).url()
    : fallbackSrc;

  // Log an error and return null if neither imageUrl nor fallbackSrc are available
  if (!imageUrl) {
    console.error(
      "Unable to resolve image URL. Source or fallback not available."
    );
    return null;
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      priority={priority}
      sizes="(min-width: 1200px) 85vw, (min-width: 768px) 75vw, 100vw"
      loader={
        ({ width, quality = 100 }) =>
          isSanityImageSource(src)
            ? urlForImage(src).width(width).quality(quality).url()
            : fallbackSrc // Use fallbackSrc when src is not available
      }
      {...props}
      unoptimized={!isSanityImageSource(src)} // Use unoptimized for fallback images
    />
  );
}
