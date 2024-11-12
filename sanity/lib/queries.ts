import { defineQuery } from "next-sanity";

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`);
export const homeQuery = defineQuery(`*[_type == "home"][0]`);
