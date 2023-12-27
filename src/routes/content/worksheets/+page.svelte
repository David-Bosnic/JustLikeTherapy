<script lang="ts">
  import { onMount } from "svelte";
  import { ref, getDownloadURL} from "firebase/storage";
  import {storage} from "$lib/firebase";
  import { fade } from 'svelte/transition';

    const imageRef = ref(storage, 'WorkSheets-Thumbnail/Placeholder-1.png');
    let imageURL = '';
    let imageLoaded = false;

    onMount(async () => {
        imageURL = await getDownloadURL(imageRef);
        imageLoaded = true;
    });
</script>

<h2 class="h2 text-center">Worksheets</h2>  


{#if imageLoaded}
<section class="grid grid-cols-3 md:grid-cols-3 gap-14">
	<div transition:fade >
		<img class="h-auto max-w-full rounded-md" transition:fade src="{imageURL}" alt="">  
	</div>
	<div transition:fade= {{ delay:5 }}>
        <img class="h-auto max-w-full rounded-md" src="{imageURL}" alt="">
    </div>
    <div transition:fade= {{delay:10}}>
        <img class="h-auto max-w-full rounded-md" src="{imageURL}" alt="">
    </div>
    <div transition:fade= {{delay:15 }}>
        <img class="h-auto max-w-full rounded-md" src="{imageURL}" alt="">
    </div>
    <div transition:fade= {{delay:20}}>
        <img class="h-auto max-w-full rounded-md" src="{imageURL}" alt="">
    </div>
    <div transition:fade= {{delay:25}}>
        <img class="h-auto max-w-full rounded-md" src="{imageURL}" alt="">
    </div>
    <div transition:fade= {{delay:30}}>
        <img class="h-auto max-w-full rounded-md" src="{imageURL}" alt=""> 
    </div>
</section>
{/if}


