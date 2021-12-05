<svelte:options immutable />

<script lang="ts">
	import { afterUpdate } from 'svelte';

	export let fruit;

	let updateCount = 0;

	afterUpdate(() => {
		updateCount += 1;
	});
</script>

<div>{fruit.name} ({updateCount})</div>
