<script lang="ts">
  import type { SvelteComponent } from "svelte";

  import { getModalStore } from "@skeletonlabs/skeleton";

  // Props
  /** Exposes parent props to this component. */
  export let parent: SvelteComponent;
  export let videoURL: "";

  const modalStore = getModalStore();

  // Base Classes
  const cBase = "relative xl:w-modal-wide w-full shadow-xl";
  const cButton = "absolute -top-3 -right-3 z-1 btn-icon variant-filled";
  const cIframe =
    "bg-black w-full aspect-video rounded-container-token overflow-hidden";
</script>

<!-- @component This example creates an embedded video modal. -->

{#if $modalStore[0]}
  <div class="modal-example-form {cBase}">
    <button class={cButton} on:click={parent.onClose}>✕</button>
    <iframe
      class={cIframe}
      src="https://www.youtube.com/embed/{videoURL}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
{/if}
