<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import test from '$lib/images/Thumbnail1.webp';
	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';

	export let title: '';
	export let bio: '';
	export let articleContent: '';
	export let thumbnail: '';

	export let parent: SvelteComponent;
	const modalStore = getModalStore();
</script>

{#if $modalStore[0]}
	<div class="card bg-white w-11/12 xl:w-8/12 h-4/5 p-4 flex flex-col overflow-scroll">
		<h1 class="h1 font-medium p-4">{title}</h1>
		<div class="bg-primary-50 flex justify-center">
			<img class="object-cover" src={thumbnail} alt="thumbnail" />
		</div>
		<h3 class="h3 p-2">{bio}</h3>

		<h5 class="h5 pb-4 px-2">{articleContent}</h5>
		<footer class="modal-footer {parent.regionFooter}">
			<button
				class="btn btn-md variant-ghost-primary"
				on:click={() => modalStore.close()}
				tabindex="-1">Close</button
			>
		</footer>
	</div>
{/if}
