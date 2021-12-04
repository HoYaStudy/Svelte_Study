<script context="module" lang="ts">
	export let count = 0;
</script>

<script lang="ts">
	export let fruit;
</script>

<div on:click={() => (count += 1)}>
	{fruit}
</div>
