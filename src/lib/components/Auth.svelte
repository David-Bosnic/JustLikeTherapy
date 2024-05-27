<script lang="ts">
  import { onMount } from "svelte";
  import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
  import type { User } from "firebase/auth";
  import { auth } from "$lib/firebase";

  let user: User | null = null;
  let email = "";
  let password = "";
  let error = "";

  onMount(() => {
    onAuthStateChanged(auth, (authUser) => {
      user = authUser ? authUser : null;
    });
  });

  async function login() {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      user = userCredential.user;
      error = "";
    } catch (e) {
      error = "Invalid login credentials";
    }
  }

  async function logout() {
    await signOut(auth);
    user = null;
  }
</script>

{#if user}
  <h2 class="h2 m-4">Welcome, {user.email}!</h2>
  <button class="btn btn-lg variant-soft-secondary" on:click={logout}
    >Logout</button
  >
  <slot></slot>
  <!-- Render children components if authenticated -->
{:else}
  <div class="card variant-ghost-primary p-6">
    <h2 class="h2 pb-4">Login</h2>
    <form on:submit|preventDefault={login}>
      <label for="email">Email:</label>
      <input
        class="input"
        id="email"
        type="email"
        bind:value={email}
        required
      />
      <label for="password">Password:</label>
      <input
        class="input"
        id="password"
        type="password"
        bind:value={password}
        required
      />
      <button class="btn btn-lg variant-soft-secondary my-4" type="submit"
        >Login</button
      >
      {#if error}
        <p class="h1">{error}</p>
      {/if}
    </form>
  </div>
{/if}
