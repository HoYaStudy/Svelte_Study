export function longPress(node: HTMLElement, duration: number): SvelteActionReturnType {
	let timer;

	const handleMouseDown = () => {
		timer = setTimeout(() => {
			node.dispatchEvent(new CustomEvent('longPress'));
		}, duration);
	};

	const handleMouseUp = () => {
		clearTimeout(timer);
	};

	node.addEventListener('mousedown', handleMouseDown);
	node.addEventListener('mouseup', handleMouseUp);

	return {
		update(newDuration) {
			duration = newDuration;
		},
		destroy() {
			node.removeEventListener('mousedown', handleMouseDown);
			node.removeEventListener('mouseup', handleMouseUp);
		}
	};
}
