<script lang="ts">
	import OptionsImmutable from './OptionsImmutable.svelte';
	import OptionsAccessors from './OptionsAccessors.svelte';

	let fruits = [
		{ id: 1, name: 'Apple' },
		{ id: 2, name: 'Banana' },
		{ id: 3, name: 'Cherry' }
	];
	let accessors;

	function getData() {
		console.log(accessors);
		console.log(accessors.name);
		console.log(accessors.getAge());
	}
</script>

{#each fruits as fruit (fruit.id)}<OptionsImmutable {fruit} />{/each}
<button
	on:click={() => {
		fruits[0] = { id: 1, name: 'Apple' };
		fruits = fruits;
	}}
>
	Update
</button>

<hr />

<OptionsAccessors bind:this={accessors} />
<button on:click={getData}>Get Data</button>

<style>
	button {
		margin-top: 4px;
	}
</style>
