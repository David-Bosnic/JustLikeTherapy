import { writable } from "svelte/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const user = writable(null);

onAuthStateChanged(auth, (firebaseUser) => {
  user.set(firebaseUser);
});

export { user };
