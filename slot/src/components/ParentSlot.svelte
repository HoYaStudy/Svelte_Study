<script lang="ts">
	import ChildSlot from './ChildSlot.svelte';
</script>

<ChildSlot><slot /><slot name="parent" slot="child" /></ChildSlot>
