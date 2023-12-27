<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell>
    <svelte:fragment slot="sidebarLeft">
    <div class="p-4 ">
        <div class="space-y-2">
            <label class="flex items-center space-x-2">
                <input class="checkbox" type="checkbox" checked />
                <p>Option 1</p>
            </label>
            <label class="flex items-center space-x-2">
                <input class="checkbox" type="checkbox" />
                <p>Option 2</p>
            </label>
            <label class="flex items-center space-x-2">
                <input class="checkbox" type="checkbox" />
                <p>Option 3</p>
            </label>
        </div>
    </div>
                        
    </svelte:fragment>
    <slot />
</AppShell>
```