<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sendEvent() {
		dispatch('fromChild1');
	}

	function sendEventWithData() {
		dispatch('fromChild2', 7);
	}
</script>

<div>
	<button on:click={sendEvent}>Send Event 1</button>
	<button on:click={sendEventWithData}>Send Event 2</button>
</div>
