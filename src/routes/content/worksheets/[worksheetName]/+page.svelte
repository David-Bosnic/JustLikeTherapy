<script lang="ts">
	import { contentId } from '$lib/stores';
	// import { db } from "$lib/firebase";
	// import { doc, getDoc } from "firebase/firestore";
	import { onMount } from 'svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	const idNum: string = $contentId;
	let worksheet: any = null;

	async function getWorksheetById(worksheetId: string): Promise<any> {
		try {
			const worksheetRef = doc(db, 'worksheets', worksheetId);
			const docSnap = await getDoc(worksheetRef);

			if (docSnap.exists()) {
				return docSnap.data();
			} else {
				console.log('No such document!');
				return null;
			}
		} catch (error) {
			console.error('Error getting document:', error);
		}
	}

	onMount(async () => {
		worksheet = await getWorksheetById(idNum);
	});
</script>

<div class="variant-filled-surface rounded-lg card">
	{#if worksheet}
		<h2 class="h2 p-2 bg-center text-center">{worksheet.contentName}</h2>
		<section class="grid grid-cols-2">
			<a href={worksheet.worksheetURL} target="_blank">
				<img
					class="p-4 rounded-3xl card-hover"
					src={worksheet.thumbnailURL}
					alt={worksheet.contentName}
				/>
			</a>

			<Accordion class="p-2" autocollapse>
				<AccordionItem open>
					<svelte:fragment slot="summary">
						<h2 class="h2">Bio</h2>
					</svelte:fragment>
					<svelte:fragment slot="content">
						<p class="">{worksheet.bio}</p>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="summary">
						<h2 class="h2">Topics</h2>
					</svelte:fragment>
					<svelte:fragment slot="content">
						<p class="">{worksheet.topics}</p>
					</svelte:fragment>
				</AccordionItem>
			</Accordion>
		</section>
	{:else}
		<p>Loading or no data available...</p>
	{/if}
	<div class="p-2">
		<a class="btn btn-lg variant-filled-primary my-3" href="/content/worksheets">Back</a>
	</div>
</div>
