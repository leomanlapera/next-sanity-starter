import { stegaClean } from "@sanity/client/stega";
import { Image } from "next-sanity/image";
import { urlForImage } from "@/sanity/lib/utils";

interface Props {
  image: any;
  priority?: boolean;
  className?: string;
}

export default function CoverImage(props: Props) {
  const { image: source, priority, className = "aspect-video" } = props;
  const image = source?.asset?._ref ? (
    <Image
      className="object-cover"
      fill={true}
      alt={stegaClean(source?.alt) || ""}
      src={
        urlForImage(source)
          ?.height(720)
          .width(1280)
          .auto("format")
          .url() as string
      }
      sizes="100vw"
      priority={priority}
    />
  ) : (
    <div className="bg-slate-50" style={{ paddingTop: "100%" }} />
  );

  return <div className={`relative ${className}`}>{image}</div>;
}
