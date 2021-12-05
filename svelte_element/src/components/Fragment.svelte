<script lang="ts">
	import FragmentTest from './FragmentTest.svelte';
</script>

<FragmentTest>
	<h1 slot="header">Header</h1>
	<div slot="content">Content</div>
	<svelte:fragment slot="footer">
		<h4>Footer</h4>
		<span>Copyright</span>
	</svelte:fragment>
</FragmentTest>
