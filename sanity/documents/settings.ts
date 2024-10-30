import { defineField, defineType } from "sanity";

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

export default settings;
