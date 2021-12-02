<script lang="ts">
	function zoom(node, parameters = 1.1) {
		node.style.transition = '1s';

		function zoomIn() {
			node.style.transform = `scale(${parameters})`;
		}

		function zoomOut() {
			node.style.transform = 'scale(1)';
		}

		node.addEventListener('mouseenter', zoomIn);
		node.addEventListener('mouseleave', zoomOut);

		return {
			destroy() {
				node.removeEventListener('mouseenter', zoomIn);
				node.removeEventListener('mouseleave', zoomOut);
			}
		};
	}
</script>

<div use:zoom />
<br />
<div use:zoom={0.7} />

<style>
	div {
		width: 100px;
		height: 100px;
		background-color: tomato;
	}
</style>
