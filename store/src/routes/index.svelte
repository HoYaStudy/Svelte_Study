<script lang="ts">
	import { get } from 'svelte/store';
	import { count, user, double } from '../store';
	import WritableStore from './WritableStore.svelte';
	import ReadableStore from './ReadableStore.svelte';
	import DerivedStore from './DerivedStore.svelte';
	import CustomStore from './CustomStore.svelte';

	let toggle = true;

	console.log(get(count));
	console.log(get(user));
	console.log(get(double));
</script>

<button on:click={() => (toggle = !toggle)}>Toggle</button>

{#if toggle}
	<WritableStore />
	<ReadableStore />
	<DerivedStore />
	<CustomStore />
{/if}
