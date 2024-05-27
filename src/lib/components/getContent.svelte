<script lang="ts">
  import { onMount } from "svelte";
  import { collection, getDocs, query, where } from "firebase/firestore";
  import { db } from "$lib/firebase";
  import { blur } from "svelte/transition";
  import ListContent from "$lib/components/listContent.svelte";
  import type { ConicStop } from "@skeletonlabs/skeleton";
  import { ConicGradient } from "@skeletonlabs/skeleton";
  import { iconSize, currentTopic } from "$lib/stores";

  export let contentType = "";
  export let listofContent: any[] = [];
  let loaded = false;

  const conicStops: ConicStop[] = [
    { color: "transparent", start: 0, end: 25 },
    { color: "rgb(var(--color-tertiary-300))", start: 75, end: 100 },
  ];

  async function getContentByType() {
    const querySnapshot = await getDocs(collection(db, contentType));
    return querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  }

  onMount(async () => {
    listofContent = await getContentByType();
    loaded = true;
  });
</script>

<!-- {#if listofContent.length == 0} -->
<!--     <h1 class="h1 text-center p-10 pb-80"> -->
<!--         Oops we don't have anything check back later! -->
<!--     </h1> -->
<!-- {/if} -->

{#if !loaded}
  <div class="p-6 mt-10">
    <ConicGradient stops={conicStops} spin>Loading</ConicGradient>
  </div>
{:else if listofContent.length == 0}
  <h1 class="h1 text-center p-10 pb-80">
    Oops we don't have anything check back later!
  </h1>
{/if}

{#if $iconSize == "Large"}
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
{:else if $iconSize == "Small"}
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
