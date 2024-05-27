import { c as create_ssr_component, i as each, e as escape } from "../../../../chunks/ssr.js";
import "firebase/firestore";
import "../../../../chunks/firebase.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let content = [];
  return `<h2 class="h2 p-2 text-center mt-8 font-semibold" data-svelte-h="svelte-1id6isz">Edit Content</h2> <div class="table-container p-20"><table class="table table-hover"><thead data-svelte-h="svelte-by76jr"><tr><th>Collection</th> <th>Content Name</th> <th>Actions</th></tr></thead> <tbody>${each(content, (item, index) => {
    return `<tr><td>${escape(item.collection)}</td> <td>${escape(item.contentName)}</td> <td><button class="btn btn-danger" data-svelte-h="svelte-9cqkn4">Delete</button></td> </tr>`;
  })}</tbody></table></div> <a href="/" class="m-4 btn variant-soft" data-svelte-h="svelte-1gocw81">Home</a>`;
});
export {
  Page as default
};
