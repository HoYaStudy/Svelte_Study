<script lang="ts">
	import { getContext, hasContext } from 'svelte';

	let data = 0;

	if (hasContext('myData')) {
		data = getContext('myData');
	} else {
		data = 0;
	}
</script>

<h2>Grandchild: {data}</h2>
