<script lang="ts">
	import type { DIFFICULTY } from '../utils/type';

	import { onMount } from 'svelte';
	import _ from 'lodash';

	import { remainHint, message, memoFlag } from '../store/sudoku';
	import { getSudoku } from '../utils/sudoku';
	import Difficulty from '../components/Difficulty.svelte';
	import Sudoku from '../components/Sudoku.svelte';
	import Navigation from '../components/Navigation.svelte';
	import NumberPad from '../components/NumberPad.svelte';

	let ls = null;
	let difficulty: DIFFICULTY =
		(!!ls && (localStorage.getItem('sudoku.difficulty') as DIFFICULTY)) || 'easy';
	let selectedPoint = { x: 0, y: 0 };
	let board = JSON.parse(!!ls && localStorage.getItem('sudoku.board')) || [];
	let answer = JSON.parse(!!ls && localStorage.getItem('sudoku.answer')) || [];
	let memo = JSON.parse(!!ls && localStorage.getItem('sudoku.memo'));
	let solution = JSON.parse(!!ls && localStorage.getItem('sudoku.solution')) || [];

	$remainHint = Number(!!ls && localStorage.getItem('sudoku.remainHint')) || 0;
	$: isEditable = !board?.[selectedPoint.y]?.[selectedPoint.x];
	$: if (answer.length !== 0 && _.isEqual(answer, solution)) {
		$message = 'Great';
	}
	$: !!ls && localStorage.setItem('sudoku.difficulty', difficulty);
	$: !!ls && localStorage.setItem('sudoku.answer', JSON.stringify(answer));
	$: !!ls && localStorage.setItem('sudoku.remainHint', $remainHint.toString());
	$: !!ls && localStorage.setItem('sudoku.memo', JSON.stringify(memo));
	$: !!ls && localStorage.setItem('sudoku.solution', JSON.stringify(solution));
	$: !!ls && localStorage.setItem('sudoku.board', JSON.stringify(board));

	onMount(() => {
		typeof localStorage !== `undefined` && (ls = localStorage);
		if (solution.length) return;
		handleNewGame();
	});

	function handleNewGame() {
		$message = 'Creating New Game...';
		setTimeout(() => {
			const result = getSudoku(difficulty);
			solution = result.solution;
			board = result.board;
			answer = _.cloneDeep(result.board);
			const tmpMemo = [];
			for (let i = 0; i < 9; i++) {
				for (let j = 0; j < 9; j++) {
					if (!tmpMemo[i]) tmpMemo[i] = [];
					if (!tmpMemo[i][j]) tmpMemo[i][j] = [];
				}
			}
			memo = tmpMemo;
			$message = '';
			$remainHint = 3;
		});
	}

	function handleRemove() {
		if (!isEditable) return;
		memo[selectedPoint.y][selectedPoint.x] = [];
		answer[selectedPoint.y][selectedPoint.x] = 0;
	}

	function handleHint() {
		if (!isEditable || $remainHint <= 0) return;
		$remainHint--;
		answer[selectedPoint.y][selectedPoint.x] = solution[selectedPoint.y][selectedPoint.x];
	}

	function handleClickNumber({ detail }) {
		if (!isEditable) return;
		if ($memoFlag) {
			const memoList = memo[selectedPoint.y][selectedPoint.x];
			const index = memoList.indexOf(detail);
			if (index >= 0) {
				memoList.splice(index, 1);
			} else {
				memoList.push(detail);
			}
			memo[selectedPoint.y][selectedPoint.x] = memoList;
		} else {
			answer[selectedPoint.y][selectedPoint.x] = detail;
		}
	}
</script>

<div class="contents">
	<Difficulty bind:difficulty on:change={handleNewGame} />
	<Sudoku bind:selectedPoint {answer} {memo} {board} />
	<Navigation on:remove={handleRemove} on:hint={handleHint} on:newGame={handleNewGame} />
	<NumberPad on:click={handleClickNumber} />
</div>

<style>
	.contents {
		width: 600px;
		margin: auto;
	}
</style>
