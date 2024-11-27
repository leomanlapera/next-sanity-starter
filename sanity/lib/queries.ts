import { defineQuery } from "next-sanity";

export const SETTINGS_QUERY = defineQuery(`*[_type == "settings"][0]`);
export const HOME_QUERY = defineQuery(`*[_type == "home"][0]`);
