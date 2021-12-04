<script lang="ts">
	import { setContext, getContext } from 'svelte';
	import Grandchild from './Grandchild.svelte';

	setContext('myData', 7);
	const data = getContext('myData');
</script>

<h1>Child: {data}</h1>
<Grandchild />
