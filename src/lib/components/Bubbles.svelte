<script>
	const bubbleCount = 40;

	let bubbles = Array.from({ length: bubbleCount }, (_, index) => ({
		id: index,
		size: Math.random() * (2.5 - 0.5) + 0.5,
		animationDuration: Math.random() * (10 - 4) + 2,
		leftPosition: Math.random() * (92 - 8) + 8
	}));
</script>

<div class="overflow-clip">
	{#each bubbles as { size, animationDuration, leftPosition }}
		<div
			class="bubble"
			style={`width: ${size}rem; height: ${size}rem; animation-duration: ${animationDuration}s; left: ${leftPosition}%;`}
		></div>
	{/each}
</div>

<style>
	.bubble {
		position: absolute;
		bottom: -10rem;
		border-radius: 50%;
		background-color: rgb(0, 255, 0, 1);
		animation-name: float;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-direction: normal;
	}

	@keyframes float {
		to {
			transform: translateY(-80vh);
			opacity: 0;
		}
	}
</style>
