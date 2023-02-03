import { writable } from "svelte/store";

export const poke_info = writable<null | Pokemon>(null);


// const count = writable<number>(0);

// count.set(1); // 1
// count.update(val => val + 1); // 2
// count.set(get(count) + 1);

// const unsub = count.subscribe(val => console.log(val));
// unsub();
