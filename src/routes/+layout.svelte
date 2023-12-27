<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
    import image from '$lib/images/TempLogo-JustLikeTherapy.png'
</script>

<!-- App Shell -->
<AppShell>

	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a
                    class="lg:!ml-0 w-[32px] lg:w-auto "
                    href="/"
                    target="_self"
                    rel="noreferrer"
                >
                <img src="{image}" class="h-20 max-w-full rounded-lg" alt="Logo" />
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
                    href="/content/worksheets"
                    target="_self"
                    rel="noreferrer"
                >
                    Worksheets
                </a>
                <a
                    class="btn btn-lg variant-soft-surface"
                    href="/content/quizzes"
                    target="_self"
                    rel="noreferrer"
                >
                    Quizzes
                </a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

    <svelte:fragment slot="sidebarLeft">
        <div class="p-10 border-2 border-sky-950"></div>
    </svelte:fragment>
    <svelte:fragment slot="sidebarRight">
        <div class="p-10"></div>
    </svelte:fragment>
	<slot />
</AppShell>
