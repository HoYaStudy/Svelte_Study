<script lang="ts">
	import Child from '../components/Child.svelte';
	import ModuleContext, { count } from '../components/ModuleContext.svelte';

	const fruits = ['Apple', 'Banana', 'Cherry'];
	let totalCount = 0;
</script>

<div><Child /></div>

<hr />

{#each fruits as fruit}
	<ModuleContext {fruit} />
{/each}

<button on:click={() => (totalCount = count)}>Get Total Count</button>

<h2>Total Count: {totalCount}</h2>

<style>
	button {
		margin-top: 5px;
	}
</style>
