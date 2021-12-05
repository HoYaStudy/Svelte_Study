<script lang="ts">
	import BodyTest from './BodyTest.svelte';

	let toggle = false;
</script>

{#if toggle}<BodyTest />{/if}
<button on:click={() => (toggle = !toggle)}>Toggle</button>
