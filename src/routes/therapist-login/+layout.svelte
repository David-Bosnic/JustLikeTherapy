<script>
  import Auth from "$lib/components/Auth.svelte";
</script>

<Auth>
  <a
    class="btn btn-lg variant-soft-secondary"
    href="/therapist-login/editContent">Edit Content</a
  >
  <a
    class="btn btn-lg variant-soft-secondary"
    href="/therapist-login/addContent">Add Content</a
  >
  <slot />
</Auth>
