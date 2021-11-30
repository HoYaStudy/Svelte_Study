<script lang="ts">
	import EventChild from './EventChild.svelte';
</script>

<h1>Parent</h1>
<EventChild on:childEvent />
