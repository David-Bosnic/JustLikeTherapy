<script lang="ts">
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import VideoEmbed from './videoEmbed.svelte';
	import ArticleModal from './articleModal.svelte';
	import WorksheetModal from './worksheetModal.svelte';
	import { currentTopic } from '$lib/stores';

	const modalStore = getModalStore();

	export let title = '';
	export let bio = '';
	export let thumbnail = '';
	export let worksheetURL = '';
	export let topics = '';
	export let articleContent = '';

	export let videoURL = '';

	const videoModalComponent: ModalComponent = {
		ref: VideoEmbed,
		props: { videoURL }
	};

	const videoModal: ModalSettings = {
		type: 'component',
		component: videoModalComponent
	};

	const articleModalComponent: ModalComponent = {
		ref: ArticleModal,
		props: { title, bio, articleContent, thumbnail }
	};

	const articleModal: ModalSettings = {
		type: 'component',
		component: articleModalComponent
	};

	const worksheetModalComponent: ModalComponent = {
		ref: WorksheetModal,
		props: { title, bio, worksheetURL, thumbnail }
	};

	const worksheetModal: ModalSettings = {
		type: 'component',
		component: worksheetModalComponent
	};

	function TriggerModal() {
		if (
			$page.url.pathname == '/content/worksheets' ||
			$page.url.pathname == '/content/worksheets/'
		) {
			modalStore.trigger(worksheetModal);
		}
		if ($page.url.pathname == '/content/videos' || $page.url.pathname == '/content/videos/') {
			modalStore.trigger(videoModal);
		}
		if ($page.url.pathname == '/content/articles' || $page.url.pathname == '/content/articles/') {
			modalStore.trigger(articleModal);
		}
	}
</script>

{#if $currentTopic === ''}
	<button class="card card-hover overflow-hidden bg-white" on:click={TriggerModal}>
		<header>
			<img class="h-auto w-full" src={thumbnail} alt={title} />
		</header>
		<section class="flex flex-col content-center p-2 pb-52 bg-white h-32">
			<h3 class="h3 font-medium text-center p-2">{title}</h3>
			<hr class="opacity-50 border-1 py-1" />
			<h4 class="h4 text-center">{bio}</h4>
		</section>
	</button>
{:else if topics.includes($currentTopic)}
	<button class="card card-hover overflow-hidden bg-white" on:click={TriggerModal}>
		<header>
			<img class="h-auto w-full" src={thumbnail} alt={title} />
		</header>
		<section class="flex flex-col content-center p-2 pb-52 bg-white h-48">
			<h3 class="h3 font-medium text-center p-2">{title}</h3>
			<hr class="opacity-50 border-1 py-1" />
			<h4 class="h4 text-center">{bio}</h4>
		</section>
	</button>
{/if}
