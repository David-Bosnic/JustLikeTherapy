<script>
  import { goto } from "$app/navigation";
  import { db } from "$lib/firebase";
  import { collection, setDoc, doc } from "firebase/firestore";
  import { writable } from "svelte/store";
  let requestType = "";
  let request = "";

  async function handleRequest() {
    try {
      const docRef = doc(collection(db, requestType));
      setDoc(docRef, {
        request,
      });
      goto("/bugs/success");
    } catch (error) {
      console.error(error);
    }
  }
</script>

<h1 class="h1 text-center p-12 font-medium">Report a bug/Feature request</h1>
<div class="card p-10 mx-10 lg:mx-96 bg-white">
  <label class="label py-3">
    <span>Primary Concern</span>
    <select class="select" bind:value={requestType}>
      <option value="Feature Request">Feature Request</option>
      <option value="Bug">Bug</option>
    </select>
  </label>

  <label class="label">
    <span>What did you want us to know</span>
    <textarea
      class="textarea"
      rows="4"
      bind:value={request}
      placeholder="I think that you should add/fix..."
    />
  </label>
  <button
    class="btn mt-4 variant-filled-primary hover:variant-ghost-primary"
    on:click={() => handleRequest()}>Submit</button
  >
</div>
