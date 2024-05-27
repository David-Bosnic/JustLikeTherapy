

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/therapist-login/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.15aeb118.js","_app/immutable/chunks/scheduler.c6bb7c4d.js","_app/immutable/chunks/index.2943ef1c.js"];
export const stylesheets = [];
export const fonts = [];
