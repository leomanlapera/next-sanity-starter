import {
  createClient,
  type ClientConfig,
  type QueryParams,
} from "@sanity/client";

// Validate environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const hookSecret = process.env.SANITY_HOOK_SECRET;
const token = process.env.SANITY_ACCESS_TOKEN;

if (!projectId || !dataset || !apiVersion || !token) {
  throw new Error("Missing required environment variables for Sanity client.");
}

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: !hookSecret, // Set CDN to live API when webhook secret is undefined
  token,
  ignoreBrowserTokenWarning: true,
};

export const client = createClient(config);

export async function sanityFetch<QueryResponse>({
  query,
  qParams = {}, // Default to an empty object if qParams is not provided
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    cache: "force-cache",
    next: { tags },
  });
}
