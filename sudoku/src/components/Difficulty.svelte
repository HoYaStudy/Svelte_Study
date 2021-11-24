<script lang="ts">
	import type { DIFFICULTY } from '../utils/type';

	export let difficulty: DIFFICULTY = 'easy';

	const difficultyList: DIFFICULTY[] = ['easy', 'medium', 'hard'];
</script>

<div>
	<select bind:value={difficulty} on:blur on:change>
		{#each difficultyList as item (item)}
			<option value={item}>{item}</option>
		{/each}
	</select>
</div>
