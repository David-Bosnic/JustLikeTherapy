<script lang="ts">
	import { onMount } from 'svelte';
	// import { collection, getDocs, query, where } from 'firebase/firestore';
	// import { db } from '$lib/firebase';
	import { blur } from 'svelte/transition';
	import ListContent from '$lib/components/listContent.svelte';
	import type { ConicStop } from '@skeletonlabs/skeleton';
	import { ConicGradient } from '@skeletonlabs/skeleton';
	import { iconSize, currentTopic } from '$lib/stores';

	export let contentType = '';
	export let listofContent: any[] = [];
	let loaded = false;

	const conicStops: ConicStop[] = [
		{ color: 'transparent', start: 0, end: 25 },
		{ color: 'rgb(var(--color-tertiary-300))', start: 75, end: 100 }
	];

	// async function getContentByType() {
	// 	const querySnapshot = await getDocs(collection(db, contentType));
	// 	return querySnapshot.docs.map((doc) => {
	// 		return { id: doc.id, ...doc.data() };
	// 	});
	// }
	//
	// onMount(async () => {
	// 	listofContent = await getContentByType();
	// 	loaded = true;
	// });
	function getDummyContent() {
		return [
			{
				id: '1',
				contentName: 'Understanding ADHD in Adults',
				bio: 'Learn about ADHD symptoms, diagnosis, and effective management strategies for adults.',
				thumbnailURL: 'https://picsum.photos/400/300?random=1',
				worksheetURL: '/worksheets/adhd-management.pdf',
				videoURL: 'https://www.youtube.com/watch?v=example1',
				topics: ['ADHD'],
				articleContent:
					'Adult ADHD can present unique challenges in work and relationships. This comprehensive guide covers...'
			},
			{
				id: '2',
				contentName: 'Managing Anxiety in Daily Life',
				bio: 'Practical techniques and coping strategies to reduce anxiety and regain control.',
				thumbnailURL: 'https://picsum.photos/400/300?random=2',
				worksheetURL: '/worksheets/anxiety-coping.pdf',
				videoURL: 'https://www.youtube.com/watch?v=example2',
				topics: ['Anxiety', 'Stress'],
				articleContent:
					'Anxiety affects millions of people worldwide. Learning effective coping mechanisms can help...'
			},
			{
				id: '3',
				contentName: 'Building Healthy Relationships',
				bio: 'Essential communication skills and boundaries for stronger, healthier relationships.',
				thumbnailURL: 'https://picsum.photos/400/300?random=3',
				worksheetURL: '/worksheets/healthy-relationships.pdf',
				videoURL: 'https://www.youtube.com/watch?v=example3',
				topics: ['Relationships', 'Emotions'],
				articleContent:
					'Healthy relationships are built on trust, communication, and mutual respect. This guide explores...'
			},
			{
				id: '4',
				contentName: 'Overcoming Depression: A Step-by-Step Guide',
				bio: 'Evidence-based approaches to understanding and managing depression symptoms.',
				thumbnailURL: 'https://picsum.photos/400/300?random=4',
				worksheetURL: '/worksheets/depression-recovery.pdf',
				videoURL: 'https://www.youtube.com/watch?v=example4',
				topics: ['Depression', 'Self esteem'],
				articleContent:
					'Depression is more than just feeling sad. Understanding the symptoms and treatment options...'
			},
			{
				id: '5',
				contentName: 'Anger Management Techniques',
				bio: 'Learn healthy ways to express and manage anger before it becomes destructive.',
				thumbnailURL: 'https://picsum.photos/400/300?random=5',
				worksheetURL: '/worksheets/anger-management.pdf',
				videoURL: 'https://www.youtube.com/watch?v=example5',
				topics: ['Anger', 'Emotions'],
				articleContent:
					'Anger is a normal emotion, but when it becomes overwhelming, it can damage relationships and...'
			},
			{
				id: '6',
				contentName: 'Couples Therapy: Strengthening Your Bond',
				bio: 'Tools and exercises to improve communication and intimacy in your relationship.',
				thumbnailURL: 'https://picsum.photos/400/300?random=6',
				worksheetURL: '/worksheets/couples-exercises.pdf',
				videoURL: 'https://www.youtube.com/watch?v=example6',
				topics: ['Couple', 'Relationships'],
				articleContent:
					'Every relationship faces challenges. Learn how couples therapy techniques can help you...'
			},
			{
				id: '7',
				contentName: 'Healing from Trauma',
				bio: 'Understanding trauma responses and pathways to recovery and resilience.',
				thumbnailURL: 'https://picsum.photos/400/300?random=7',
				worksheetURL: '/worksheets/trauma-recovery.pdf',
				videoURL: 'https://www.youtube.com/watch?v=example7',
				topics: ['Trauma', 'Emotions'],
				articleContent:
					'Trauma can have lasting effects on mental health, but healing is possible. This guide covers...'
			},
			{
				id: '8',
				contentName: 'Building Self-Esteem and Confidence',
				bio: 'Practical strategies to develop a positive self-image and inner confidence.',
				thumbnailURL: 'https://picsum.photos/400/300?random=8',
				worksheetURL: '/worksheets/self-esteem-building.pdf',
				videoURL: 'https://www.youtube.com/watch?v=example8',
				topics: ['Self esteem', 'Emotions'],
				articleContent:
					'Self-esteem affects every aspect of our lives. Learn how to cultivate a healthier relationship...'
			},
			{
				id: '9',
				contentName: 'Stress Management in the Modern World',
				bio: 'Effective techniques to reduce stress and find balance in a busy lifestyle.',
				thumbnailURL: 'https://picsum.photos/400/300?random=9',
				worksheetURL: '/worksheets/stress-management.pdf',
				videoURL: 'https://www.youtube.com/watch?v=example9',
				topics: ['Stress', 'Anxiety'],
				articleContent:
					'Modern life presents unique stressors. Learning to manage stress effectively is crucial for...'
			},
			{
				id: '10',
				contentName: 'Understanding Substance Abuse Recovery',
				bio: 'Resources and support for overcoming addiction and maintaining sobriety.',
				thumbnailURL: 'https://picsum.photos/400/300?random=10',
				worksheetURL: '/worksheets/substance-abuse-recovery.pdf',
				videoURL: 'https://www.youtube.com/watch?v=example10',
				topics: ['Substance abuse'],
				articleContent:
					'Recovery from substance abuse is a journey that requires support, understanding, and...'
			},
			{
				id: '11',
				contentName: 'Navigating Grief and Loss',
				bio: 'Understanding the grieving process and finding healthy ways to cope with loss.',
				thumbnailURL: 'https://picsum.photos/400/300?random=11',
				worksheetURL: '/worksheets/grief-support.pdf',
				videoURL: 'https://www.youtube.com/watch?v=example11',
				topics: ['Grief', 'Emotions'],
				articleContent:
					'Grief is a natural response to loss, but everyone experiences it differently. This guide helps...'
			},
			{
				id: '12',
				contentName: 'Emotional Regulation Skills',
				bio: 'Learn to identify, understand, and manage your emotions more effectively.',
				thumbnailURL: 'https://picsum.photos/400/300?random=12',
				worksheetURL: '/worksheets/emotional-regulation.pdf',
				videoURL: 'https://www.youtube.com/watch?v=example12',
				topics: ['Emotions', 'Self esteem'],
				articleContent:
					'Emotional regulation is a key skill for mental health and wellbeing. This comprehensive guide...'
			}
		];
	}
	onMount(async () => {
		await new Promise((resolve) => setTimeout(resolve, 800));

		listofContent = getDummyContent();
		loaded = true;
	});
</script>

{#if !loaded}
	<div class="p-6 mt-10">
		<ConicGradient stops={conicStops} spin>Loading</ConicGradient>
	</div>
{:else if listofContent.length == 0}
	<h1 class="h1 text-center p-10 pb-80">Oops we don't have anything check back later!</h1>
{/if}

{#if $iconSize == 'Large'}
	<div transition:blur class="flex flex-col pt-2">
		<div class="grid grid-cols-1 xl:grid-cols-2 gap-10">
			{#each listofContent as content}
				<ListContent
					title={content.contentName}
					bio={content.bio}
					thumbnail={content.thumbnailURL}
					worksheetURL={content.worksheetURL}
					videoURL={content.videoURL}
					topics={content.topics}
					articleContent={content.articleContent}
				/>
			{/each}
		</div>
	</div>
{:else if $iconSize == 'Small'}
	<div class="grid grid-col-1 pt-2 xl:grid-cols-4 gap-6">
		{#each listofContent as content}
			<ListContent
				title={content.contentName}
				bio={content.bio}
				thumbnail={content.thumbnailURL}
				videoURL={content.videoURL}
				topics={content.topics}
				articleContent={content.articleContent}
			/>
		{/each}
	</div>
{/if}
