import { c as create_ssr_component, s as subscribe } from "../../../../../chunks/ssr.js";
import { c as contentId } from "../../../../../chunks/stores3.js";
import "../../../../../chunks/firebase.js";
import "firebase/firestore";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_contentId;
  $$unsubscribe_contentId = subscribe(contentId, (value) => value);
  $$unsubscribe_contentId();
  return `<div class="variant-filled-surface rounded-lg card">${`<p data-svelte-h="svelte-1678c73">Loading or no data available...</p>`} <div class="p-2" data-svelte-h="svelte-caoa60"><a class="btn btn-lg variant-filled-primary my-3" href="/content/worksheets">Back</a></div></div>`;
});
export {
  Page as default
};
