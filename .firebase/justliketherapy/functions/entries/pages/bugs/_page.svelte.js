import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import "../../../chunks/firebase.js";
import "firebase/firestore";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="h1 text-center p-12 font-medium" data-svelte-h="svelte-d665pb">Report a bug/Feature request</h1> <div class="card p-10 mx-10 lg:mx-96 bg-white"><label class="label py-3"><span data-svelte-h="svelte-ntg54">Primary Concern</span> <select class="select"><option value="Feature Request" data-svelte-h="svelte-1bv2i7g">Feature Request</option><option value="Bug" data-svelte-h="svelte-1pywn3a">Bug</option></select></label> <label class="label"><span data-svelte-h="svelte-9csfwc">What did you want us to know</span> <textarea class="textarea" rows="4" placeholder="I think that you should add/fix...">${escape("")}</textarea></label> <button class="btn mt-4 variant-filled-primary hover:variant-ghost-primary" data-svelte-h="svelte-122c68s">Submit</button></div>`;
});
export {
  Page as default
};
