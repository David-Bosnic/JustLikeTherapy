// In your store file
import { writable } from "svelte/store";

export const currentTopic = writable<string>("");

export const contentId = writable<string>("");

export const iconSize = writable<string>("Large");
