<script lang="ts">
	import HeadTest from './HeadTest.svelte';

	let toggle = false;
</script>

{#if toggle}<HeadTest />{/if}
<button on:click={() => (toggle = !toggle)}>Toggle</button>
