import { defineType } from "sanity";
import { seoFields } from "../sanity.fields";

const home = defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [...seoFields],
});

export default home;