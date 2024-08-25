import { defineType, defineField } from "sanity";

const seoFields = [
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

const settings = defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
  ],
});

const home = defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [...seoFields],
});

const blog = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    ...seoFields,
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});

export const schemaTypes = [settings, home, blog];
