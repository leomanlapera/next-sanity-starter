import { defineField, defineType } from "sanity";
import { seoFields } from "../sanity.fields";

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

export default blog;
