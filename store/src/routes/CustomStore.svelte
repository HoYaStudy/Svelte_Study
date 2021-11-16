<script lang="ts">
	import { customData } from '../store';
</script>

<h1>Custom Store</h1>
<div>{$customData}</div>
<button on:click={customData.increase}>+</button>
<button on:click={customData.decrease}>-</button>
<button on:click={customData.reset}>Reset</button>
