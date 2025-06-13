<script lang="ts">
	import GetContent from '$lib/components/getContent.svelte';
	let worksheets: any[] = [];

	let sortType: string = 'List';
</script>

<h1 class="h1 font-semibold">Worksheets</h1>

<svelte:head>
	<title>JustLikeTherapy | Worksheets</title>
</svelte:head>
<!-- <div class="hidden lg:pb-2 lg:flex"> -->
<!--     <RadioGroup flexDirection="flex flex-row"class="text-token" background="variant-ghost-primary" active="variant-filled-primary" border="border-token border-primary-400-500-token" padding="px-10 py-2"> -->
<!--         <RadioItem bind:group={sortType} name="List" value="List"> -->
<!--             <p>List</p> -->
<!--         </RadioItem> -->
<!--         <RadioItem bind:group={sortType} name="Grid" value="Grid"> -->
<!--             <p>Grid</p> -->
<!--         </RadioItem> -->
<!--     </RadioGroup> -->
<!-- </div> -->
<GetContent contentType="worksheets" />

<!-- <div class="grid grid-cols-3 p-2 gap-4 pt-20"> -->
<!--     {#if $currentTopic != ""} -->
<!--         <button -->
<!--             class="chip variant-ghost hover:variant-ghost-primary w-fit" -->
<!--             on:click={() => { -->
<!--                 currentTopic.set(""); -->
<!--             }} -->
<!--             ><span> -->
<!--                 {$currentTopic} -->
<!--                 <b>X</b> -->
<!--             </span> -->
<!--         </button> -->
<!--     {/if} -->
<!-- </div> -->
