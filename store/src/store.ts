import { writable, readable, derived } from 'svelte/store';
import type { Writable, Readable } from 'svelte/store';

// Writable Store ------------------------------------------------------------//
export const count: Writable<number> = writable(0, () => {
	console.log('W: There are subscribers');
	return () => console.log('W: There is no subscriber');
});

export const name: Writable<string> = writable('HoYa');

// Readable Store ------------------------------------------------------------//
interface UserData {
	name: string;
	age: number;
	male: boolean;
}

const userData: UserData = {
	name: 'HoYa',
	age: 18,
	male: true
};

export const user: Readable<UserData> = readable(userData, (set) => {
	console.log('R: There are subscribers');
	delete userData.age;
	set(userData);
	return () => console.log('R: There is no subscriber');
});

// Derived Store -------------------------------------------------------------//
export const double = derived(count, ($count) => $count * 2);

export const total = derived([count, double], ([$count, $double], set) => {
	console.log('D: There are subscribers');
	set($count + $double);
	return () => console.log('D: There is no subscriber');
});

export const delayedIncrease = derived(
	count,
	($count, set) => {
		setTimeout(() => set(($count + 1).toString()), 1000);
	},
	'Calculating...'
);

// Custom Store --------------------------------------------------------------//
const { subscribe, set, update } = writable(0);

export const customData = {
	subscribe,
	set,
	update,
	increase: (): void => update((n) => n + 1),
	decrease: (): void => update((n) => n - 1),
	reset: (): void => set(0)
};
