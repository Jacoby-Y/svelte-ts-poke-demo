import { writable } from "svelte/store";

// A bool to listen to which shows when the app is fetching data
export const loading = writable<boolean>(false);