<script lang="ts">
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		Toast,
		Drawer,
		Modal,
		getModalStore,
		getDrawerStore,
		initializeStores,
		getToastStore
	} from '@skeletonlabs/skeleton';
	import type {
		DrawerStore,
		DrawerSettings,
		ModalSettings,
		ToastSettings
	} from '@skeletonlabs/skeleton';
	import FooterWaves from '$lib/svg/FooterWaves.svg';
	import hamburger from '$lib/svg/menu.svg';

	initializeStores();
	const toastStore = getToastStore();
	function toastBasic(): void {
		const t: ToastSettings = {
			message:
				// cspell:disable-next-line
				'This Feature is Not Ready',
			timeout: 4000,
			background: 'variant-filled-warning'
		};
		toastStore.trigger(t);
	}
	const drawerStore = getDrawerStore();

	function trigger(position: 'right'): void {
		const s: DrawerSettings = {
			id: 'burger',
			position,
			bgDrawer: 'bg-white',
			bgBackdrop: 'bg-gradient-to-tr from-green-500/50 via-blue-500/50 to-green-500/50 ',
			width: 'w-[230px] ',
			padding: 'py-4',
			rounded: 'rounded-l-xl'
		};
		drawerStore.open(s);
	}
</script>

<Toast position="t" />
<Modal />
<Drawer>
	<div class="flex flex-col gap-4 p-4">
		<h3 class="h3 font-bold text-center p-4">
			<span class="bg-primary-500 bg-clip-text text-transparent box-decoration-clone">
				JustLikeTherapy
			</span>
		</h3>

		<a
			class="btn btn-lg justify-start variant-ghost-primary mx-2"
			href="/content/worksheets"
			on:click={() => drawerStore.close()}>Worksheets</a
		>
		<a
			class="btn btn-lg justify-start variant-ghost-primary mx-2"
			on:click={() => drawerStore.close()}
			href="/content/videos">Videos</a
		>

		<a
			class="btn btn-lg justify-start variant-ghost-primary mx-2"
			href="/content/articles"
			on:click={() => drawerStore.close()}>Articles</a
		>

		<div class="flex justify-center space-x-4 my-4">
			<a href="https://facebook.com" target="_blank" class="text-primary-500">
				<svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
					><path
						d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.482v-9.294h-3.118v-3.622h3.118v-2.671c0-3.1 1.893-4.789 4.659-4.789 1.325 0 2.463.099 2.794.143v3.24h-1.916c-1.504 0-1.793.715-1.793 1.762v2.309h3.586l-.467 3.622h-3.119v9.294h6.116c.732 0 1.324-.592 1.324-1.324v-21.35c0-.733-.592-1.325-1.324-1.325z"
					/></svg
				>
			</a>
			<a href="https://twitter.com" target="_blank" class="text-primary-500">
				<svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
					><path
						d="M24 4.557a9.93 9.93 0 0 1-2.357.625 4.89 4.89 0 0 0 2.163-2.724c-.951.561-2.005.973-3.127 1.191a4.922 4.922 0 0 0-8.392 4.485c-4.086-.204-7.712-2.161-10.141-5.134a4.822 4.822 0 0 0-.664 2.475c0 1.71.869 3.216 2.188 4.096a4.936 4.936 0 0 1-2.228-.616v.063a4.923 4.923 0 0 0 3.95 4.827 4.996 4.996 0 0 1-2.224.084 4.93 4.93 0 0 0 4.604 3.417 9.86 9.86 0 0 1-6.102 2.107c-.398 0-.79-.023-1.17-.068a13.926 13.926 0 0 0 7.557 2.212c9.054 0 14.002-7.503 14.002-14.002 0-.21 0-.423-.016-.637a10.012 10.012 0 0 0 2.466-2.555z"
					/></svg
				>
			</a>
		</div>

		<div class="text-center text-sm text-gray-600">
			<p>Contact us: support@justliketherapy.com</p>
			<p>Phone: +1 (123) 456-7890</p>
		</div>
	</div>
</Drawer>
<AppShell class="bg-gradient-to-r from-variant-filled-primary to-variant-filled-secondary">
	<svelte:fragment slot="header">
		<AppBar class="shadow-2xl" background="bg-white">
			<svelte:fragment slot="lead">
				<a class="btn btn-lg variant-ghost-primary" href="/"> Home </a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<button
					class="btn lg:hidden"
					on:click={() => {
						trigger('right');
					}}
				>
					<img src={hamburger} alt="" />
				</button>
				<div class="hidden lg:flex flex-row pr-20 space-x-10">
					<a href="/content/worksheets">
						<button class="btn btn-md hover:variant-ghost-primary font-semibold">Worksheets</button>
					</a>

					<a href="/content/videos">
						<button class="btn btn-md hover:variant-ghost-primary font-semibold">Videos</button>
					</a>
					<a href="/content/articles">
						<button class="btn btn-md hover:variant-ghost-primary font-semibold">Articles</button>
					</a>
					<a href="/recommendations">
						<button class="btn btn-md hover:variant-ghost-primary font-semibold"
							>Recommendations</button
						>
					</a>
					<!-- <a href="/bugs"> -->
					<!--   <button class="btn btn-md hover:variant-ghost-primary font-semibold" -->
					<!--     >Bug/Features</button -->
					<!--   > -->
					<!-- </a> -->
				</div>
				<!-- <a -->
				<!--     class="btn hover:variant-soft-primary" -->
				<!--     href="https://www.therapistaid.com/" -->
				<!--     target="_blank" -->
				<!--     rel="noreferrer" -->
				<!-- > -->
				<!--     Therapist Aid Reference Site -->
				<!-- </a> -->
				<!-- <a -->
				<!--     class="btn hover:variant-soft-primary" -->
				<!--     href="/content/worksheets" -->
				<!-- > -->
				<!--     Worksheets -->
				<!-- </a> -->
				<!-- <a -->
				<!--     class="btn hover:variant-soft-primary" -->
				<!--     href="/content/quizzes" -->
				<!-- > -->
				<!--     Quizzes -->
				<!-- </a> -->
				<!-- <a -->
				<!--     class="btn hover:variant-soft-primary" -->
				<!--     href="/content/videos" -->
				<!--     Videos -->
				<!-- </a> -->
				<!-- <!-- <a class="btn hover:variant-soft-primary" href="/content/quizzes"> Quizzes </a> -->
				<!-- <a class="btn hover:variant-soft-primary" href="/addContent"> -->
				<!--     Add Content -->
				<!-- </a> -->
				<!-- <LightSwitch class="hover:variant-soft-primary" /> -->
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">
		<div
			class="flex flex-col lg:flex-row gap-10 lg:gap-32 justify-center p-5 text-variant-filled-primary py-20 bg-white mt-40"
		>
			<div class="flex flex-col gap-8">
				<h2 class="h2 font-semibold">JustLikeTherapy</h2>
				<h4 class="h4 font-semibold">Get a handle on your mental health</h4>
			</div>
			<div class="h-full flex flex-col justify-normal gap-4 items-start">
				<h2 class="h1 md:h2 text-primary-500 font-medium">Explore</h2>
				<a href="/content/worksheets" class="h4 hover:text-tertiary-500">Worksheets</a>
				<a href="/content/videos" class="h4 hover:text-tertiary-500">Videos</a>
				<a href="/content/articles" class="h4 hover:text-tertiary-500">Articles</a>
			</div>
			<div class="h-full flex flex-col justify-normal gap-4 items-start">
				<h2 class="h2 text-primary-500 font-medium">Legal</h2>
				<a href="/legal/terms" class="h4 hover:text-tertiary-500">Term</a>
				<a href="/legal/privacy" class="h4 hover:text-tertiary-500">Privacy</a>
			</div>
			<div class="h-full flex flex-col justify-normal gap-4 items-start">
				<h2 class="h2 text-primary-500 font-medium">Help us</h2>
				<a href="/bugs" class="h4 hover:text-tertiary-500">Bugs Report/Feature Request</a>
			</div>
		</div>
	</svelte:fragment>
</AppShell>
