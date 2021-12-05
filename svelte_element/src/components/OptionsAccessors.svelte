<svelte:options accessors />

<script lang="ts">
	export let name = 'HoYa';
	let age = 18;

	export function getAge() {
		console.log(age);
	}
</script>

<h1 on:click={getAge}>{name}</h1>
