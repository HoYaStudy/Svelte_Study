<script lang="ts">
	let key = '';
	let innerWidth;
	let innerHeight;
	let outerWidth;
	let outerHeight;
	let online;
	let scrollX;
	let scrollY;
</script>

<svelte:window
	on:keydown={(e) => (key = e.key)}
	bind:innerWidth
	bind:innerHeight
	bind:outerWidth
	bind:outerHeight
	bind:online
	bind:scrollX
	bind:scrollY
/>

<h1>{key}</h1>
<div>innerWidth: {innerWidth}</div>
<div>innerHeight: {innerHeight}</div>
<div>outerWidth: {outerWidth}</div>
<div>outerHeight: {outerHeight}</div>
<input type="number" bind:value={scrollX} />
<input type="number" bind:value={scrollY} />
<div>online: {online}</div>
<div class="scroll" />

<style>
	.scroll {
		height: 1000px;
	}
</style>
