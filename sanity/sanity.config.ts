import {
  createClient,
  type ClientConfig,
  type QueryParams,
} from "@sanity/client";

// Configuration file (sanity.config.ts)
export const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: process.env.SANITY_HOOK_SECRET ? false : true,
  token: process.env.SANITY_ACCESS_TOKEN!,
  ignoreBrowserTokenWarning: true,
};

export const client = createClient(config);

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  try {
    return client.fetch<QueryResponse>(query, qParams!, {
      cache: "force-cache",
      next: { tags },
    });
  } catch (error) {
    // Handle errors gracefully (e.g., log, retry, display user-friendly message)
    console.error("Error fetching data from Sanity:", error);
    throw error; // Re-throw the error for further handling
  }
}
