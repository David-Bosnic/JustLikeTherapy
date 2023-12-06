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
				<a
                    class="lg:!ml-0 w-[32px] lg:w-auto "
                    href="/"
                    target="_self"
                    rel="noreferrer"
                >
                <img src="static/svg/favicon.png" alt="logo" />
                </a>
                <div class="text-xl" style="padding-left: 5%;">A place to learn and grow</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-lg variant-soft-surface"
					href="https://www.therapistaid.com/"
					target="_blank"
					rel="noreferrer"
				>
					Therapist Aid Reference Site
				</a>
                <a
                    class="btn btn-lg variant-soft-surface"
                    href="/worksheets"
                    target="_self"
                    rel="noreferrer"
                >
                    Worksheets
                </a>
                <a
                    class="btn btn-lg variant-soft-surface"
                    href="/quizzes"
                    target="_self"
                    rel="noreferrer"
                >
                    Quizzes
                </a>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
