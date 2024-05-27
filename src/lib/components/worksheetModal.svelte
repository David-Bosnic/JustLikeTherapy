<script lang="ts">
  import type { SvelteComponent } from "svelte";
  // Stores
  import { getModalStore } from "@skeletonlabs/skeleton";
  import { fade } from "svelte/transition";

  export let title: "";
  export let bio: "";
  export let worksheetURL: "";
  export let thumbnail: "";

  export let parent: SvelteComponent;
  const modalStore = getModalStore();
</script>

{#if $modalStore[0]}
  <div
    class="card bg-white w-11/12 xl:w-8/12 h-4/5 p-4 flex flex-col overflow-scroll"
  >
    <h1 class="h1 font-medium p-4">{title}</h1>
    <div class="bg-tertiary-50 flex flex-row items-center rounded-xl">
      <img
        transition:fade={{ delay: 250, duration: 300 }}
        class="p-30 xl:flex xl:w-3/4 xl:p-4"
        src={thumbnail}
        alt="Worksheet thumbnail"
      />
      <h2 class="hidden xl:block h2 break-words text-center w-3/4 p-4">
        {bio}
      </h2>
    </div>

    <footer class="modal-footer p-4 {parent.regionFooter} ">
      <a
        href={worksheetURL}
        class="btn btn-md variant-glass-primary"
        target="_blank">Download</a
      >
      <button
        class="btn btn-md variant-glass-primary"
        on:click={() => modalStore.close()}
        tabindex="-1">Close</button
      >
    </footer>
  </div>
{/if}
