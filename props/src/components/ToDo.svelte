<script lang="ts">
	export let todos;
	export let index;
	export let todo;

	function deleteToDo() {
		todos.splice(index, 1);
		todos = todos;
	}
</script>

<div>
	<input type="checkbox" bind:checked={todo.done} />
	{todo.content}
	<button on:click={deleteToDo}>X</button>
</div>
