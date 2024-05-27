import { c as create_ssr_component, i as each, a as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const GreenWave1 = "/_app/immutable/assets/GreenWave1.b7afd867.svg";
const YelloWave = "/_app/immutable/assets/YellowLayeredWave.7b4f120e.svg";
const BYwave = "/_app/immutable/assets/BYwave.3bff7fdf.svg";
const TempWave = "/_app/immutable/assets/TempWave.0d5ddad4.svg";
const Bubbles_svelte_svelte_type_style_lang = "";
const css = {
  code: ".bubble.svelte-19yr9ft{position:absolute;bottom:-10rem;border-radius:50%;background-color:rgb(0, 255, 0, 1);animation-name:svelte-19yr9ft-float;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:normal}@keyframes svelte-19yr9ft-float{to{transform:translateY(-80vh);opacity:0}}",
  map: null
};
const bubbleCount = 50;
const Bubbles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let bubbles = Array.from({ length: bubbleCount }, (_, index) => ({
    id: index,
    size: Math.random() * (2.5 - 0.5) + 0.5,
    // Random size between 0.5rem and 1.5rem
    animationDuration: Math.random() * (10 - 4) + 2,
    // Random animation duration between 4s and 10s
    leftPosition: Math.random() * 100 - 5
    // Random horizontal position across the screen
  }));
  $$result.css.add(css);
  return `<div class="overflow-clip">${each(bubbles, ({ size, animationDuration, leftPosition }) => {
    return `<div class="bubble svelte-19yr9ft"${add_attribute("style", `width: ${size}rem; height: ${size}rem; animation-duration: ${animationDuration}s; left: ${leftPosition}%;`, 0)}></div>`;
  })} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Bubbles, "Bubbles").$$render($$result, {}, {}, {})} <div class="relative"><section class="text-center py-40" data-svelte-h="svelte-ijy2ix"><h1 class="h1 font-bold mb-4"><span class="bg-primary-500 bg-clip-text text-transparent box-decoration-clone">Mental Health is Challanging to Navigate</span></h1> <h3 class="h2 font-regular">Let&#39;s try and making it a bit easier.</h3> <a class="btn btn-xl variant-filled-primary m-10 hover:variant-ghost-primary font-medium" href="/content/worksheets">Get Started</a></section>  <img class="bg-cover bg-center w-full"${add_attribute("src", GreenWave1, 0)} alt="waves"> <section class="py-20 px-6 bg-primary-50" data-svelte-h="svelte-c6kabv"><div class="max-w-4xl mx-auto"><h1 class="h1 font-bold text-center p-4"><span class="bg-primary-500 bg-clip-text text-transparent box-decoration-clone">About Us</span></h1> <h3 class="text-center h3 font-medium p-2">JustLikeTherapy is dedicated to helping individuals discover and pursue
        their path to personal growth and well-being. Through a blend of curated
        content, interactive tools, and community support, we aim to inspire and
        empower you to become the best version of yourself.</h3></div></section> <img class="bg-cover bg-center w-full"${add_attribute("src", TempWave, 0)} alt="waves">  <section class="text-center py-20 px-6 bg-fixed bg-50% lg:bg-10% bg-tertiary-200" data-svelte-h="svelte-1nbu0vx"><div class="max-w-6xl mx-auto"><h1 class="h1 font-bold text-center p-4"><span class="bg-tertiary-500 bg-clip-text text-transparent box-decoration-clone">Our Services</span></h1> <div class="flex flex-col p-10 gap-4 lg:space-y-0 lg:flex-none lg:grid lg:gap-10 lg:grid-cols-3"><a href="/content/worksheets" class="card card-hover bg-white"><section class="p-4"><h1 class="h1 font-medium">Worksheets</h1></section> <footer class="card-footer"><h3 class="h3">Helping you learn with easy worksheets</h3></footer></a> <a href="/content/videos" class="card card-hover bg-white"><section class="p-4"><h1 class="h1 font-medium">Videos</h1></section> <footer class="card-footer"><h3 class="h3">Deep and thought-provoking videos that are easy to digest</h3></footer></a> <a href="/content/articles" class="card card-hover bg-white"><section class="p-4"><h1 class="h1 font-medium">Articles</h1></section> <footer class="card-footer"><h3 class="h3">Quick and knowledgeable articles to learn a thing or two</h3></footer></a></div></div></section> <img class="w-full"${add_attribute("src", BYwave, 0)} alt="waves"> <section class="text-center py-20 px-6 bg-warning-50" data-svelte-h="svelte-i43wa5"><h1 class="h1 font-bold mb-4 t"><span class="bg-warning-500 bg-clip-text text-transparent box-decoration-clone">Help us make the site better</span></h1> <h3 class="h3 p-10 font-medium">If you find any bugs or want to see a feature click below</h3> <a href="/bugs" class="btn btn-lg variant-filled-warning hover:variant-ghost-warning">Support</a></section> <img class="bg-cover bg-center w-full"${add_attribute("src", YelloWave, 0)} alt="waves"></div>`;
});
export {
  Page as default
};
