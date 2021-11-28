<script lang="ts">
	export let block = false;
	export let color = '';
</script>

<button class:block style="background-color: {color}; color: {color ? 'white' : ''};">
	<slot>Fallback Content</slot>
</button>

<style>
	button {
		margin-bottom: 5px;
	}

	button:hover {
		opacity: 0.8;
	}

	button.block {
		display: block;
	}
</style>
