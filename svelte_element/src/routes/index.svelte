<script lang="ts">
	import Self from '../components/Self.svelte';
	import Component from '../components/Component.svelte';
	import Window from '../components/Window.svelte';
	import Body from '../components/Body.svelte';
	import Head from '../components/Head.svelte';
	import Options from '../components/Options.svelte';
	import Fragment from '../components/Fragment.svelte';

	const objs = {
		name: 'HoYa',
		children: [
			{ name: 'Park', children: [{ name: 'Choi' }, { name: 'Hwang' }] },
			{ name: 'Lee', children: [{ name: 'Kim' }, { name: 'Hong' }] }
		]
	};
</script>

<Self {objs} />

<hr />

<Component />

<hr />

<Window />

<hr />

<Body />

<hr />

<Head />

<hr />

<Options />

<hr />

<Fragment />
