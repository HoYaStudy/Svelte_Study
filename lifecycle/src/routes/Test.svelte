<script lang="ts">
	import { onMount, onDestroy, beforeUpdate, afterUpdate, tick } from 'svelte';

	let text: string = 'Test String';
	let span: HTMLSpanElement;

	const addDot = () => (text += '.');

	onMount(() => {
		console.log('onMount is called');
		span = document.querySelector('span');
	});
	beforeUpdate(async () => {
		console.log('beforeUpdate is called');
		await tick();
		span.innerText = 'Hello';
	});
	afterUpdate(() => console.log('afterUpdate is called'));
	onDestroy(() => console.log('onDestroy is called'));
</script>

<div>Test Component</div>
<div on:click={addDot}>{text}</div>
<span />
