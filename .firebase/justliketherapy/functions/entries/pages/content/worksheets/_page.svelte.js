import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { G as GetContent } from "../../../../chunks/getContent.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="h1" data-svelte-h="svelte-92bdjv">Worksheets</h1>           ${validate_component(GetContent, "GetContent").$$render($$result, { contentType: "worksheets" }, {}, {})}              `;
});
export {
  Page as default
};
