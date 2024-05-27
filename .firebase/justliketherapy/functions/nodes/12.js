

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/recommendations/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.8ae430d0.js","_app/immutable/chunks/scheduler.c6bb7c4d.js","_app/immutable/chunks/index.2943ef1c.js"];
export const stylesheets = [];
export const fonts = [];
