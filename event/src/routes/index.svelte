<script lang="ts">
	import EventDispatcher from '../components/EventDispatcher.svelte';
	import EventParent from '../components/EventParent.svelte';

	let text = 'Test';
	let count = 0;

	function increase() {
		count++;
	}

	function print() {
		console.log(`count: ${count}`);
	}

	function currentTarget(e) {
		console.log(e.currentTarget);
	}

	function currentEvent(e) {
		console.log(e);
	}
</script>

<h1 on:click={() => (text += '.')}>{text}</h1>

<hr />

<h1>{count}</h1>
<button on:click={increase} on:click={print} on:click={currentTarget}>Test</button>

<hr />

<h1>preventDefault</h1>
<a href="https://hdevstudy.tistory.com" target="_blank" on:click|preventDefault={currentTarget}>
	HoYa's Tistory Blog
</a>

<h1>stopPropagation</h1>
<div class="parent" on:click={currentTarget}>
	<div class="child" on:click|stopPropagation={currentTarget} />
</div>

<h1>passive</h1>
<div class="parent wheel" on:wheel|passive={currentEvent}>
	<div class="child wheel" />
</div>

<h1>capture</h1>
<div class="parent" on:click|capture={currentTarget}>
	<div class="child" on:click={currentTarget} />
</div>

<h1>once</h1>
<a
	href="https://hdevstudy.tistory.com"
	target="_blank"
	on:click|preventDefault|once={currentTarget}
>
	HoYa's Tistory Blog
</a>

<h1>self</h1>
<div class="parent" on:click|self={currentTarget}>
	<div class="child" />
</div>

<hr />

<EventDispatcher on:fromChild1={currentEvent} on:fromChild2={currentEvent} />

<hr />

<EventParent on:childEvent={currentEvent} />

<style>
	.parent {
		width: 50px;
		height: 50px;
		background-color: tomato;
	}

	.child {
		width: 30px;
		height: 30px;
		background-color: teal;
	}

	.parent.wheel {
		overflow: auto;
	}

	.child.wheel {
		height: 1000%;
	}
</style>
