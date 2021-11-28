<div>
	{#if $$slots.name}
		<div class="item">
			<slot name="name" />
		</div>
	{/if}
	{#if $$slots.age}
		<div class="item">
			<slot name="age" />
		</div>
	{/if}
	{#if $$slots.email}
		<div class="item">
			<slot name="email" />
		</div>
	{/if}
	{#if $$slots.default}
		<div class="item">
			<slot />
		</div>
	{/if}
</div>

<style>
	.item {
		box-sizing: border-box;
		border: 1px solid silver;
	}
</style>
