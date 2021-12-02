<script lang="ts">
	import { longPress } from '../utils/action_plugin';
	import Action from '../components/Action.svelte';

	let toggle = true;
	let width = 100;
	let pressed = false;
	let duration = 2000;

	function styling(node, parameters = { width: '50px', height: '50px', color: 'tomato' }) {
		const { width, height, color } = parameters;
		node.style.width = width;
		node.style.height = height;
		node.style.backgroundColor = color;

		return {
			update(params) {
				node.style.width = params.width;
			},
			destroy() {
				console.log('destroy');
			}
		};
	}
</script>

<div use:styling />
{#if toggle}
	<div use:styling={{ width: `${width}px`, height: '100px', color: 'teal' }} />
{/if}

<button on:click={() => (toggle = !toggle)}>Toggle</button>
<button on:click={() => (width += 20)}>Size Up</button>

<hr />

<Action />

<hr />

<label>
	<input type="range" bind:value={duration} max={2000} step={100} />
	{duration}ms
</label>

<button
	use:longPress={duration}
	on:longPress={(e) => (pressed = true)}
	on:mouseenter={() => (pressed = false)}
>
	Press!
</button>

{#if pressed}
	<span>Clicked during {duration}ms</span>
{/if}

<style>
	button {
		margin-top: 10px;
	}
</style>
