<script lang="ts">
	import User from '../components/User.svelte';
	import ToDo from '../components/ToDo.svelte';
	import Props from '../components/Props.svelte';
	import StyleProps from '../components/StyleProps.svelte';

	let users = [{ name: 'HoYa', age: 18 }, { name: 'Park', age: 17 }, { name: 'Lee' }];
	let todos = [
		{ id: 1, content: '1st thing', done: false },
		{ id: 2, content: '2nd thing', done: true }
	];
</script>

<div>
	{#each users as user}
		<User name={user.name} age={user.age} />
	{/each}
</div>

<hr />

<div>
	{#each users as { name, age }}
		<User {name} {age} />
	{/each}
</div>

<hr />

<div>
	{#each users as user}
		<User {...user} />
	{/each}
</div>

<hr />

{#each todos as todo, index (todo.id)}
	<ToDo bind:todos {index} {todo} />
{/each}

<hr />

<Props type="email" placeholder="Please input your email" color="tomato" required />
<Props type="password" maxlength="14" color="teal" required />

<hr />

<StyleProps />
<StyleProps --width="100px" --height="100px" --primary-color="teal" --secondary-color="tomato" />
