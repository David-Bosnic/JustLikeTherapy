<script lang="ts">
  import { collection, setDoc, doc } from "firebase/firestore";
  import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
  import { db, storage } from "$lib/firebase";
  import { goto } from "$app/navigation";
  import { RadioGroup, RadioItem } from "@skeletonlabs/skeleton";

  let contentName: string;
  let bio: string;
  let contentType: string = "WorkSheet";
  let topics: string[];
  let worksheetURL: string;
  let thumbnailURL: string;
  let videoURL: string;
  let numParagraph: number = 1;
  let questions: string[] = [];
  let articleContent: string[] = [];

  async function handleWorksheet() {
    try {
      const docRef = doc(collection(db, "worksheets"));
      setDoc(docRef, {
        contentName,
        bio,
        contentType,
        topics,
        worksheetURL,
        thumbnailURL,
      });
      goto("addContent/success");
    } catch (error) {
      console.error(error);
    }
  }

  async function handleVideo() {
    try {
      const docRef = doc(collection(db, "videos"));
      setDoc(docRef, {
        contentName,
        bio,
        contentType,
        topics,
        videoURL,
        thumbnailURL,
      });
      goto("addContent/success");
    } catch (error) {
      console.error(error);
    }
  }

  async function handleArticles() {
    try {
      const docRef = doc(collection(db, "articles"));
      setDoc(docRef, {
        contentName,
        bio,
        contentType,
        topics,
        articleContent,
        thumbnailURL,
      });
      goto("addContent/success");
    } catch (error) {
      console.error(error);
    }
  }
  // async function handleQuiz() {
  //   try {
  //     const docRef = doc(collection(db, "quizs"));
  //     setDoc(docRef, {
  //       contentName,
  //       bio,
  //       contentType,
  //       topics,
  //       questions,
  //     });
  //     goto("/addContent/success");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  async function handleThumbnailUpload(e: any) {
    const file = e.target.files[0];
    const storageRef = ref(storage, `thumbnails/${file.name}`);
    const result = await uploadBytes(storageRef, file);
    thumbnailURL = await getDownloadURL(storageRef);
  }

  async function handlePDF(e: any) {
    const file = e.target.files[0];
    const storageRef = ref(storage, `WorksheetsPDF/${file.name}`);
    const result = await uploadBytes(storageRef, file);
    worksheetURL = await getDownloadURL(storageRef);
  }

  function removeParagraph() {
    if (numParagraph > 1) {
      numParagraph--;
      questions.pop();
    } else {
      console.log("you are at min");
    }
  }
  function addParagraph() {
    if (numParagraph < 10) {
      numParagraph++;
    } else {
      console.log("you are at max");
    }
  }
</script>

<h2 class="h2 p-2 text-center mt-8 font-semibold">Add Content</h2>

<div class="card p-4 w-full text-token space-y-4 variant-soft-surface">
  <div class="pb-2">
    <RadioGroup class="text-token ">
      <RadioItem bind:group={contentType} name="Worksheet" value="Worksheet">
        <p>Worksheet</p>
      </RadioItem>
      <RadioItem bind:group={contentType} name="Videos" value="Videos">
        <p>Videos</p>
      </RadioItem>
      <RadioItem bind:group={contentType} name="Articles" value="Articles">
        <p>Articles</p>
      </RadioItem>
    </RadioGroup>
  </div>
  {#if contentType === "Worksheet"}
    <label class="label">
      <span>Title</span>
      <input
        class="input"
        type="text"
        placeholder="What is the worksheet called"
        bind:value={contentName}
      />
    </label>
    <label class="label">
      <span>Bio</span>
      <textarea
        class="textarea"
        rows="4"
        placeholder="What is the worksheet about"
        bind:value={bio}
      />
    </label>
    <div>
      <div class="space-y-2">
        <h4 class="h4 p-2">Topics</h4>
        {#each ["ADHD", "Anger", "Depression", "Couple", "Anxiety", "Emotions", "Relationships", "Self esteem", "Stress", "Trauma", "Substance abuse", "Grief"] as topic}
          <label class="flex items-center space-x-2">
            <input
              class="checkbox"
              type="checkbox"
              bind:group={topics}
              value={topic}
            />
            <h4 class="h4">{topic}</h4>
          </label>
        {/each}
      </div>
    </div>
    <p class="bg-warning-50">
      A 2:1 aspect ratio is the best size 900x450 for example
    </p>
    <h4 class="h4 p-2">Upload Worksheet Thumbnail</h4>
    <input
      on:change={handleThumbnailUpload}
      type="file"
      class="w-full"
      accept="image/png, image/jpeg, image/gif, image/webp"
    />
    <div>
      <h4 class="h4 p-2">Upload Worksheet</h4>
      <input
        on:change={handlePDF}
        type="file"
        class="w-full"
        accept="application/pdf"
      />
    </div>
    <button
      class="btn btn-lg variant-filled-warning"
      on:click={handleWorksheet}
    >
      Submit
    </button>
  {:else if contentType === "Videos"}
    <label class="label">
      <span>Title</span>
      <input
        class="input"
        type="text"
        placeholder="What is the video called"
        bind:value={contentName}
      />
    </label>
    <label class="label">
      <span>Bio</span>
      <textarea
        class="textarea"
        rows="4"
        placeholder="What is the video about"
        bind:value={bio}
      />
    </label>
    <div>
      <div class="space-y-2">
        <h4 class="h4 p-2">Topics</h4>
        {#each ["ADHD", "Anger", "Depression", "Couple", "Anxiety", "Emotions", "Relationships", "Self esteem", "Stress", "Trauma", "Substance abuse", "Grief"] as topic}
          <label class="flex items-center space-x-2">
            <input
              class="checkbox"
              type="checkbox"
              bind:group={topics}
              value={topic}
            />
            <h4 class="h4">{topic}</h4>
          </label>
        {/each}
      </div>
    </div>
    <div>
      <p class="bg-warning-50">
        A 2:1 aspect ratio is the best size 900x450 for example
      </p>
      <h4 class="h4">Video Thumbnail</h4>
      <input
        on:change={handleThumbnailUpload}
        type="file"
        class="w-full"
        accept="image/png, image/jpeg, image/gif, image/webp"
      />
    </div>
    <div>
      <h4 class="h4 p-2 bg-warning-50">Only get the end of the Youtube url</h4>
      <h4 class="h4 p-2 bg-warning-50">
        https://www.youtube.com/watch?v=dQw4w9WgXcQ
      </h4>
      <h4 class="h4 p-2 mb-10 bg-success-300">Example: dQw4w9WgXcQ</h4>

      <h4 class="h4 p-2">Youtube URL</h4>
      <input
        class="input"
        type="text"
        placeholder="Ex:dQw4w9WgXcQ"
        bind:value={videoURL}
      />
    </div>
    <button class="btn btn-lg variant-filled-warning" on:click={handleVideo}>
      Submit
    </button>
  {:else if contentType === "Articles"}
    <label class="label">
      <span>Title</span>
      <input
        class="input"
        type="text"
        placeholder="What is the article called"
        bind:value={contentName}
      />
    </label>
    <label class="label">
      <span>Bio</span>
      <textarea
        class="textarea"
        rows="4"
        placeholder="What is the article about"
        bind:value={bio}
      />
    </label>

    <!-- <label class="label"> -->
    <!--     <span>Article Content</span> -->
    <!--     <textarea -->
    <!--         class="textarea" -->
    <!--         rows="8" -->
    <!--         placeholder="Write about the Article" -->
    <!--         bind:value={articleContent} -->
    <!--     /> -->
    <!-- </label> -->

    {#each Array(numParagraph) as _, index (index)}
      <label class="label">
        <span>Paragraph {index + 1}:</span>
        <textarea
          class="textarea"
          rows="2"
          bind:value={articleContent[index]}
        />
      </label>
    {/each}
    <div class="grid grid-cols-2 gap-3">
      <button class="btn variant-filled-primary" on:click={addParagraph}
        >More Paragraphs</button
      >
      <button class="btn variant-filled-primary" on:click={removeParagraph}
        >Less Paragraphs</button
      >
    </div>
    <div class="space-y-2">
      <h4 class="h4 p-2">Topics</h4>
      {#each ["ADHD", "Anger", "Depression", "Couple", "Anxiety", "Emotions", "Relationships", "Self esteem", "Stress", "Trauma", "Substance abuse", "Grief"] as topic}
        <label class="flex items-center space-x-2">
          <input
            class="checkbox"
            type="checkbox"
            bind:group={topics}
            value={topic}
          />
          <h4 class="h4">{topic}</h4>
        </label>
      {/each}
    </div>

    <p class="bg-warning-50">
      A 2:1 aspect ratio is the best size 900x450 for example
    </p>
    <h4 class="h4 p-2">Upload Article Thumbnail</h4>
    <input
      on:change={handleThumbnailUpload}
      type="file"
      class="w-full"
      accept="image/png, image/jpeg, image/gif, image/webp"
    />
    <button class="btn btn-lg variant-filled-warning" on:click={handleArticles}>
      Submit
    </button>
    <!-- {:else if contentType === 'Quiz'} -->
    <!-- 	<label class="label"> -->
    <!-- 		<span>Title</span> -->
    <!-- 		<input -->
    <!-- 			class="input" -->
    <!-- 			type="text" -->
    <!-- 			placeholder="What is the quiz called" -->
    <!-- 			bind:value={contentName} -->
    <!-- 		/> -->
    <!-- 	</label> -->
    <!-- 	<label class="label"> -->
    <!-- 		<span>Bio</span> -->
    <!-- 		<textarea class="textarea" rows="4" placeholder="What is the quiz about" bind:value={
    <!-- 	</label> -->
    <!-- 	<div class="space-y-2"> -->
    <!-- 		<h4 class="h4 p-2">Topics</h4> -->
    <!-- 		<label class="flex items-center space-x-2"> -->
    <!-- 			<input class="checkbox" type="checkbox" bind:group={topics} value="Depression" /> -->
    <!-- 			<h3 class="h4">Depression</h3> -->
    <!-- 		</label> -->
    <!-- 		<label class="flex items-center space-x-2"> -->
    <!-- 			<input class="checkbox" type="checkbox" bind:group={topics} value="ADHD" /> -->
    <!-- 			<h4 class="h4">ADHD</h4> -->
    <!-- 		</label> -->
    <!-- 		<label class="flex items-center space-x-2"> -->
    <!-- 			<input class="checkbox" type="checkbox" bind:group={topics} value="Anxiety" /> -->
    <!-- 			<h4 class="h4">Anxiety</h4> -->
    <!-- 		</label> -->
    <!-- 		<label class="flex items-center space-x-2"> -->
    <!-- 			<input class="checkbox" type="checkbox" bind:group={topics} value="Couple" /> -->
    <!-- 			<h4 class="h4">Couple</h4> -->
    <!-- 		</label> -->
    <!-- 	</div> -->
    <!-- 	<div class="grid grid-cols-2 gap-3"> -->
    <!-- 		<button class="btn variant-filled-primary" on:click={addQuiz}>More Questions</button> -->
    <!-- 		<button class="btn variant-filled-primary" on:click={removeQuiz}>Less Questions</button> -->
    <!-- 	</div> -->
    <!-- 	{#each Array(numQuestion) as _, index (index)} -->
    <!-- 		<label class="label"> -->
    <!-- 			<span>Question {index + 1}:</span> -->
    <!-- 			<input class="input" type="text" bind:value={questions[index]} /> -->
    <!-- 		</label> -->
    <!-- 	{/each} -->
    <!-- 	<button class="btn btn-lg variant-filled-warning" on:click={handleQuiz}>Submit</button> -->
  {/if}
</div>
