<script lang="ts">
	import { count, name } from '../store';

	const increase = () => {
		$count += 1;
	};

	const changeName = () => {
		$name = 'Kim';
	};
</script>

<h1>Writable Store</h1>
<div>{$count}</div>
<div>{$name}</div>
<button on:click={increase} on:click={changeName}>Update</button>
