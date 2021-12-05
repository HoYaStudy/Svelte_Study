<script lang="ts">
	export let objs;
</script>

<ul>
	<li>
		{objs.name}
		{#if objs.children}
			{#each objs.children as objs}
				<svelte:self {objs} />
			{/each}
		{/if}
	</li>
</ul>
