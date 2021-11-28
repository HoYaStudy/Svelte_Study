<script lang="ts">
	import Slot from '../components/Slot.svelte';
	import NamedSlot from '../components/NamedSlot.svelte';
	import ParentSlot from '../components/ParentSlot.svelte';
	import SlotsObject from '../components/SlotsObject.svelte';
</script>

<Slot />
<Slot>Test 1</Slot>
<Slot block={true}>Test 2</Slot>
<Slot color="tomato">Test 3</Slot>
<Slot block={true} color="teal">Test 4</Slot>

<hr />

<NamedSlot />
<NamedSlot><span slot="name">HoYa</span></NamedSlot>
<NamedSlot><span slot="age">18</span></NamedSlot>
<NamedSlot>
	<span slot="age">18</span>
	<strong slot="name">HoYa</strong>
</NamedSlot>
<NamedSlot><span slot="email" let:domain>test{domain}</span></NamedSlot>

<hr />

<ParentSlot>
	<h1>Parent Slot</h1>
	<div slot="parent">Slot Forwarding</div>
</ParentSlot>

<hr />

<SlotsObject>
	<h1 slot="name">HoYa</h1>
	<h2 slot="age">18</h2>
	<h3 slot="email">test@example.com</h3>
	<div>test</div>
</SlotsObject>

<style>
	strong {
		color: royalblue;
	}
</style>
