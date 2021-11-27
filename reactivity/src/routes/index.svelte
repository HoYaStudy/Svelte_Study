<script lang="ts">
	let name = 'HoYa';
	let fruits = ['Apple', 'Banana', 'Cherry'];
	let user = {
		name: 'HoYa',
		appearance: {
			height: 178
		},
		hobby: ['reading', 'programming']
	};
	let count = 0;
	let tripled = 0;
	let quadrapled = 0;

	$: doubled = count * 2;
	$: (tripled = count * 3), log();
	$: (quadrapled = count * 4),
		(() => {
			console.log(`IIFE: ${count} => ${quadrapled}`);
		})();
	$: if (count > 3) {
		console.log('Count is greater than 3');
	}
	$: for (let i = 0; i < 3; i += 1) {
		count;
		console.log(`For: ${i}`);
	}
	$: switch (count) {
		case 7:
			console.log('Got Lucky');
			break;
		default:
			console.log('Waiting...');
	}

	function changeName() {
		name = 'Kim';
	}

	function changeFruits() {
		// fruits.push('Dates');
		// fruits = fruits;
		fruits = [...fruits, 'Dates'];
	}

	function changeUser() {
		user.name = 'Kim';
		user.appearance.height = 187;
		user.hobby.push('gaming');
	}

	function increaseCount() {
		count++;
	}

	function log() {
		console.log(`Log: ${count} => ${tripled}`);
	}
</script>

<h1>Name: {name}</h1>
<button on:click={changeName}>Change Name</button>
<h1>Fruits: {fruits}</h1>
<button on:click={changeFruits}>Change Fruits</button>
<h1>User: {user.name}, {user.appearance.height}, {user.hobby}</h1>
<button on:click={changeUser}>Change User</button>
<h1>Count: {count}, Doubled: {doubled}, Tripled: {tripled}, Quadrapled: {quadrapled}</h1>
<button on:click={increaseCount}>Increase Count</button>
