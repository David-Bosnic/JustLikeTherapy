import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import "firebase/auth";
import "../../../chunks/firebase.js";
const Auth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  return `${`<div class="card variant-ghost-primary p-6"><h2 class="h2 pb-4" data-svelte-h="svelte-ert9hb">Login</h2> <form><label for="email" data-svelte-h="svelte-1flf0h4">Email:</label> <input class="input" id="email" type="email" required${add_attribute("value", email, 0)}> <label for="password" data-svelte-h="svelte-bhu94">Password:</label> <input class="input" id="password" type="password" required${add_attribute("value", password, 0)}> <button class="btn btn-lg variant-soft-secondary my-4" type="submit" data-svelte-h="svelte-ncmjwj">Login</button> ${``}</form></div>`}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Auth, "Auth").$$render($$result, {}, {}, {
    default: () => {
      return `<a class="btn btn-lg variant-soft-secondary" href="/therapist-login/editContent" data-svelte-h="svelte-4v0ix8">Edit Content</a> <a class="btn btn-lg variant-soft-secondary" href="/therapist-login/addContent" data-svelte-h="svelte-jn95s6">Add Content</a> ${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
