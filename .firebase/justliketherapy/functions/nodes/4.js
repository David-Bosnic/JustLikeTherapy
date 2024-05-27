

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.060e4877.js","_app/immutable/chunks/scheduler.c6bb7c4d.js","_app/immutable/chunks/index.2943ef1c.js","_app/immutable/chunks/each.181c16a0.js","_app/immutable/chunks/index.933a30ee.js"];
export const stylesheets = ["_app/immutable/assets/4.39e823b5.css"];
export const fonts = [];
