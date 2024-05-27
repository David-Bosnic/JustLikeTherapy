

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/bugs/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.3e6186fa.js","_app/immutable/chunks/scheduler.c6bb7c4d.js","_app/immutable/chunks/index.2943ef1c.js","_app/immutable/chunks/navigation.cf61f222.js","_app/immutable/chunks/singletons.e7786a13.js","_app/immutable/chunks/index.9442a5d0.js","_app/immutable/chunks/firebase.19dcb72c.js"];
export const stylesheets = [];
export const fonts = [];
