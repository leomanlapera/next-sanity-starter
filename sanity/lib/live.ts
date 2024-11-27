import { defineLive } from "next-sanity";
import { client } from "./client";
import { token } from "./token";

type SanityFetchArgs = {
  query: string;
  [key: string]: any; // Additional properties allowed
};

type DefineLiveOptions = {
  client: any;
  serverToken: string;
  browserToken: string;
};

type DefineLiveReturn = {
  sanityFetch: <T>(args: SanityFetchArgs) => Promise<{ data: T }>;
  SanityLive: any;
};

const defineLiveTyped = (options: DefineLiveOptions): DefineLiveReturn => {
  return defineLive(options) as DefineLiveReturn;
};

export const { sanityFetch, SanityLive } = defineLiveTyped({
  client,
  serverToken: token!,
  browserToken: token!,
});
