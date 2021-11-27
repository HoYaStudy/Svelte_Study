<script lang="ts">
	export let color;

	console.log($$props); // include all passed props
	console.log($$restProps); // except for `color` (explicitly defined)
</script>

<div>
	<input style="color:{color};" {...$$props} />
	<input style="color:{color};" {...$$restProps} />
</div>
