import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { G as GetContent } from "../../../../chunks/getContent.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 class="h2 text-center p-2 mt-10" data-svelte-h="svelte-1jy1mrh">Quizzes</h2> ${validate_component(GetContent, "GetContent").$$render(
    $$result,
    {
      contentType: "quizs",
      displayType: "list"
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
