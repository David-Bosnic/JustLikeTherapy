<script>
	import GreenWave1 from '$lib/svg/GreenWave1.svg';
	import GreenWave3 from '$lib/svg/GreenWave3.svg';
	import BlueWave1 from '$lib/svg/BlueWave1.svg';
	import YelloWave from '$lib/svg/YellowLayeredWave.svg';
	import BYwave from '$lib/svg/BYwave.svg';
	import TempWave from '$lib/svg/TempWave.svg';
	import Bubbles from '$lib/components/Bubbles.svelte';
	import { blur } from 'svelte/transition';
</script>

<Bubbles />

<div class="relative">
	<section transition:blur={{ amount: 100, duration: 500 }} class="text-center py-40">
		<h1 class="h1 font-bold mb-4">
			<span class="bg-primary-500 bg-clip-text text-transparent box-decoration-clone"
				>Mental Health is Challanging to Navigate</span
			>
		</h1>
		<h3 class="h2 font-regular">Let's try and making it a bit easier.</h3>
		<a
			class="btn btn-xl variant-filled-primary m-10 hover:variant-ghost-primary font-medium"
			href="/content/worksheets"
		>
			Get Started
		</a>
	</section>

	<!-- Introduaction Section -->
	<img class="bg-cover bg-center w-full" src={GreenWave1} alt="waves" />
	<section class="py-20 px-6 bg-primary-50">
		<div class="max-w-4xl mx-auto">
			<h1 class="h1 font-bold text-center p-4">
				<span class="bg-primary-500 bg-clip-text text-transparent box-decoration-clone"
					>About Us</span
				>
			</h1>
			<h3 class="text-center h3 font-medium p-2">
				JustLikeTherapy is dedicated to helping individuals discover and pursue their path to
				personal growth and well-being. Through a blend of curated content, interactive tools, and
				community support, we aim to inspire and empower you to become the best version of yourself.
			</h3>
		</div>
	</section>

	<img class="bg-cover bg-center w-full" src={TempWave} alt="waves" />
	<!-- Features Section -->
	<section class="text-center py-20 px-6 bg-fixed bg-50% lg:bg-10% bg-tertiary-200">
		<div class="max-w-6xl mx-auto">
			<h1 class="h1 font-bold text-center p-4">
				<span class="bg-tertiary-500 bg-clip-text text-transparent box-decoration-clone"
					>Our Services</span
				>
			</h1>
			<div
				class="flex flex-col p-10 gap-4 lg:space-y-0 lg:flex-none lg:grid lg:gap-10 lg:grid-cols-3"
			>
				<a href="/content/worksheets" class="card card-hover bg-white">
					<section class="p-4">
						<h1 class="h1 font-medium text-tenant-color">Worksheets</h1>
					</section>
					<footer class="card-footer">
						<h3 class="h3">Helping you learn with easy worksheets</h3>
					</footer>
				</a>
				<a href="/content/videos" class="card card-hover bg-white">
					<section class="p-4">
						<h1 class="h1 font-medium">Videos</h1>
					</section>
					<footer class="card-footer">
						<h3 class="h3">Deep and thought-provoking videos that are easy to digest</h3>
					</footer>
				</a>
				<a href="/content/articles" class="card card-hover bg-white">
					<section class="p-4">
						<h1 class="h1 font-medium">Articles</h1>
					</section>
					<footer class="card-footer">
						<h3 class="h3">Quick and knowledgeable articles to learn a thing or two</h3>
					</footer>
				</a>
			</div>
		</div>
	</section>
	<img class="w-full" src={BYwave} alt="waves" />

	<section class="text-center py-20 px-6 bg-warning-50">
		<h1 class="h1 font-bold mb-4 t">
			<span class="bg-warning-500 bg-clip-text text-transparent box-decoration-clone"
				>Help us make the site better</span
			>
		</h1>
		<h3 class="h3 p-10 font-medium">If you find any bugs or want to see a feature click below</h3>
		<a href="/bugs" class="btn btn-lg variant-filled-warning hover:variant-ghost-warning">Support</a
		>
	</section>

	<img class="bg-cover bg-center w-full" src={YelloWave} alt="waves" />
</div>
