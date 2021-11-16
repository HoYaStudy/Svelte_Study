<script lang="ts">
	import { count, double, total, delayedIncrease } from '../store';
</script>

<h1>Derived Store</h1>
<div>{$count} + {$double} = {$total}</div>
<div>{$delayedIncrease}</div>
