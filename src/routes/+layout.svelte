<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">JustLikeTherapy</strong>
				<strong class="text-xl" style="padding-left: 20px">|</strong>
				<div class="text-xl" style="padding-left: 20px;">A place to learn and grow</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://www.therapistaid.com/"
					target="_blank"
					rel="noreferrer"
				>
					Therapist Aid Reference Site
				</a>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<div
			class="card variant-soft p-2 m-0.5 flex justify-center items-center overflow-hidden text-xs"
		>
			sidebarLeft
		</div>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
