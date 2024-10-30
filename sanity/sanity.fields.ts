import { defineField } from "sanity";

export const seoFields = [
  defineField({
    name: "title",
    type: "string",
    description: "For SEO Meta Title",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "slug",
    type: "slug",
    description: "For SEO and Development purposes only, please do not modify.",
    options: { source: "title" },
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "description",
    description: "For SEO Meta Description",
    type: "text",
  }),
];
