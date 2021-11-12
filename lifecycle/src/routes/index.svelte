<script lang="ts">
	import Test from './Test.svelte';
	let toggleTest: boolean = false;
</script>

<button
	on:click={() => {
		toggleTest = !toggleTest;
	}}
>
	Toggle
</button>

{#if toggleTest}
	<Test />
{/if}
