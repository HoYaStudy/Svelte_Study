/// <reference types="@sveltejs/kit" />
declare namespace svelte.JSX {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface HTMLAttributes<T> {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onlongPress?: (event: CustomEvent<number> & { target: EventTarget & T }) => any;
	}
}
