<script>
  import worksheetWaves from "$lib/svg/worksheetWaves.svg";
  import { contentId } from "$lib/stores";

  export let title = "";
  export let thumbnail = "";
  export let id = "";
</script>

<a
  on:click={() => {
    contentId.set(id);
  }}
  href="/content/worksheets/{title}"
>
  <h4 class="h4 text-center pt-10">{title}</h4>
  <div class="w-auto relative card card-hover border-primary-500 border-4">
    <img
      src={worksheetWaves}
      alt="Decorative Wave"
      class="absolute top-0 right-0 rounded-2xl"
    />
    <img class="card w-full" src={thumbnail} alt={title} />
  </div>
</a>
