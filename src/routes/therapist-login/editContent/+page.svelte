<script lang="ts">
  import { onMount } from "svelte";
  import {
    collection,
    getDocs,
    deleteDoc,
    doc,
    Firestore,
  } from "firebase/firestore";
  import { db } from "$lib/firebase"; // Import your Firebase configuration

  interface ContentItem {
    id: string;
    contentName: string;
    collection: string;
  }

  let content: ContentItem[] = [];

  onMount(async () => {
    await fetchData();
  });

  async function fetchData(): Promise<void> {
    const collections = ["videos", "worksheets", "articles"];
    let allData: ContentItem[] = [];

    for (let col of collections) {
      const querySnapshot = await getDocs(collection(db, col));
      querySnapshot.forEach((doc) => {
        allData.push({
          id: doc.id,
          ...(doc.data() as { contentName: string }),
          collection: col,
        });
      });
    }

    content = allData;
  }

  async function deleteContent(id: string, collection: string): Promise<void> {
    await deleteDoc(doc(db, collection, id));
    await fetchData(); // Refresh the data after deletion
  }
</script>

<h2 class="h2 p-2 text-center mt-8 font-semibold">Edit Content</h2>

<div class="table-container p-20">
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Collection</th>
        <th>Content Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each content as item, index}
        <tr>
          <td>{item.collection}</td>
          <td>{item.contentName}</td>
          <td>
            <button
              class="btn btn-danger"
              on:click={() => deleteContent(item.id, item.collection)}
              >Delete</button
            >
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<a href="/" class="m-4 btn variant-soft">Home</a>
