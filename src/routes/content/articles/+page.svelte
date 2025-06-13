<script lang="ts">
	import GetContent from '$lib/components/getContent.svelte';
	let sortType: string = 'List';
</script>

<h1 class="h1 font-semibold">Articles</h1>

<svelte:head>
	<title>JustLikeTherapy | Articles</title>
</svelte:head>

<GetContent contentType="articles" {sortType} />
