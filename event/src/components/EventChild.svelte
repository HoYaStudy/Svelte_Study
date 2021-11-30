<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<h2>Child</h2>
<button on:click={() => dispatch('childEvent', { name: 'HoYa', age: 18 })}>Child</button>
