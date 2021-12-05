<script lang="ts">
	import Test1 from './ComponentTest1.svelte';
	import Test2 from './ComponentTest2.svelte';

	let components = [
		{ name: 'Test1', component: Test1 },
		{ name: 'Test2', component: Test2 }
	];
	let selectedName = components[0].name;
	let index = 1;

	$: selected = components.find((c) => c.name === selectedName);
</script>

{#each components as { name }, idx (name)}
	<label>
		<input
			type="radio"
			value={name}
			bind:group={selectedName}
			on:change={() => (index = idx + 1)}
		/>
		{name}
	</label>
{/each}

{#if selected}
	<svelte:component this={selected.component} {index} />
{/if}
