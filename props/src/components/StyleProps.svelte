<div>Test</div>

<style>
	:global(html) {
		--width: 50px;
		--height: 50px;
		--primary-color: white;
		--secondary-color: black;
	}

	div {
		width: var(--width);
		height: var(--height);
		color: var(--primary-color);
		background-color: var(--secondary-color);
	}
</style>
