import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/lib/api";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source: any) => {
  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return undefined;
  }

  return imageBuilder?.image(source).auto("format").fit("max");
};

// Function to determine the file type based on the extension
function getFileType(extension: string): "images" | "files" {
  const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp"];
  return imageExtensions.includes(extension) ? "images" : "files";
}

export function getUrlFromId(ref: string): string | null {
  // Example ref: file-207fd9951e759130053d37cf0a558ffe84ddd1c9-mp3 or image-5d6003feff2c1f45db1db12cb3d7532de93eba1a-3648x4751.jpg
  const parts = ref.split("-");

  // Validate that the ref has the correct format
  if (parts.length < 2) {
    console.error("Invalid ref format:", ref);
    return null;
  }

  // Extract the id and the extension with potential dimensions
  const id = parts.slice(1, -1).join("-"); // Join all parts except the last one for the id
  const extensionWithDimensions = parts[parts.length - 1]; // Last part contains extension or dimensions
  const [extension] = extensionWithDimensions.split("."); // Extract the extension

  // Validate id and extension
  if (!id || !extension) {
    console.error("Missing id or extension in ref:", ref);
    return null;
  }

  // Determine the file type and construct the URL accordingly
  const fileType = getFileType(extension);
  const url = `https://cdn.sanity.io/${fileType}/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${extension}`;

  // Log URL for debugging purposes
  console.log("Constructed URL:", url);

  return url;
}
