<script lang="ts">
	import { currentTopic } from '$lib/stores';
	import { iconSize } from '$lib/stores';
	import { AppShell, ListBox, ListBoxItem, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	let topics: string = '';
	let sortType: string = '';
</script>

<!-- <svelte:head> -->
<!-- 	<title>JustLikeTherapy</title> -->
<!-- </svelte:head> -->

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<div class="hidden xl:flex flex-col mt-10 mx-10 mb-20 pt-10 pl-32 gap-5">
			<div class="hidden lg:block card bg-white shadow-2xl p-2">
				<header class="flex flex-col content-center p-2">
					<h1 class="h3 text-center">Format</h1>
				</header>
				<hr class="opacity-50 border-1 p-1" />
				<section>
					<ListBox
						padding="px-10 py-2"
						hover="hover:variant-ghost-primary"
						active="variant-filled-primary"
					>
						<ListBoxItem bind:group={$iconSize} name="Large" value="Large">Large Icon</ListBoxItem>
						<ListBoxItem bind:group={$iconSize} name="Small" value="Small">Small Icon</ListBoxItem>
					</ListBox>
				</section>
			</div>

			<div class="hidden lg:block card bg-white shadow-2xl p-2">
				<header class="flex flex-col content-center p-2">
					<h1 class="h3 text-center">Topics</h1>
				</header>
				<hr class="opacity-50 border-1 p-1" />
				<section>
					<ListBox
						padding="px-10 py-2"
						hover="hover:variant-ghost-primary"
						active="variant-filled-primary"
					>
						{#each ['ADHD', 'Anger', 'Depression', 'Couple', 'Anxiety', 'Emotions', 'Relationships', 'Self esteem', 'Stress', 'Trauma', 'Substance abuse', 'Grief'] as topics}
							<ListBoxItem bind:group={$currentTopic} name={topics} value={topics}
								>{topics}</ListBoxItem
							>
						{/each}
						<ListBoxItem bind:group={$currentTopic} name="" value="">No Topic</ListBoxItem>
					</ListBox>
				</section>
			</div>
		</div>
	</svelte:fragment>
	<div class=" px-10 pt-10 lg:pr-60 lg:pl-20 content-center">
		<slot />
	</div>
</AppShell>
