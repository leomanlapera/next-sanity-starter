import { groq } from "next-sanity";

// Query to fetch settings
export const settingsQuery = groq`*[_type == "settings"][0] {...}`;

// Query to fetch home page
export const homeQuery = groq`*[_type == "home"][0] {...}`;

// Query single blog by slug
export const blogBySlugQuery = groq`*[_type == "blog" && slug.current == $slug][0] {...}`;
