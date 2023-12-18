<script lang="ts">
  import { onMount } from "svelte";
  import { ref, getDownloadURL} from "firebase/storage";
  import {storage} from "$lib/firebase";

    const imageRef = ref(storage, 'WorkSheets-Thumbnail/HWL_Skull_Kid.webp');
    let imageURL = '';

    onMount(async () => {
        imageURL = await getDownloadURL(imageRef);
    });
</script>

<h2>Worksheets</h2>
<img src="{imageURL}" alt="Skull Kid" />    