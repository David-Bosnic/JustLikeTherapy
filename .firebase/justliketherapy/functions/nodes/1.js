

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c946d6b4.js","_app/immutable/chunks/scheduler.c6bb7c4d.js","_app/immutable/chunks/index.2943ef1c.js","_app/immutable/chunks/stores.2657bee8.js","_app/immutable/chunks/singletons.e7786a13.js","_app/immutable/chunks/index.9442a5d0.js"];
export const stylesheets = [];
export const fonts = [];
