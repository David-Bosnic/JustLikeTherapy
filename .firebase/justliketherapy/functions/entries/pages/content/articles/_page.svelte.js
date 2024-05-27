import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { G as GetContent } from "../../../../chunks/getContent.js";
let sortType = "List";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="h1" data-svelte-h="svelte-14vbro5">Articles</h1> ${validate_component(GetContent, "GetContent").$$render($$result, { contentType: "articles", sortType }, {}, {})}`;
});
export {
  Page as default
};
