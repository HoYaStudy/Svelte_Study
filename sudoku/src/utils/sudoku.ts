import type { DIFFICULTY } from './type';

import { multiply } from 'mathjs';
import _ from 'lodash';

type DIRECTION = 'row' | 'col';
type ANGLE = 0 | 90 | 180 | 270;

export function getSolution(): number[][] {
	const s = _.chunk(_.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]), 3);
	const x1 = [
		[0, 0, 1],
		[1, 0, 0],
		[0, 1, 0]
	];
	const x2 = [
		[0, 1, 0],
		[0, 0, 1],
		[1, 0, 0]
	];
	const x1s = multiply(x1, s);
	const x2s = multiply(x2, s);
	const sx1 = multiply(s, x1);
	const sx2 = multiply(s, x2);
	const x1sx1 = multiply(x1s, x1);
	const x1sx2 = multiply(x1s, x2);
	const x2sx1 = multiply(x2s, x1);
	const x2sx2 = multiply(x2s, x2);
	let solution = [
		[...s[0], ...x1s[0], ...x2s[0]],
		[...s[1], ...x1s[1], ...x2s[1]],
		[...s[2], ...x1s[2], ...x2s[2]],
		[...sx1[0], ...x1sx1[0], ...x2sx1[0]],
		[...sx1[1], ...x1sx1[1], ...x2sx1[1]],
		[...sx1[2], ...x1sx1[2], ...x2sx1[2]],
		[...sx2[0], ...x1sx2[0], ...x2sx2[0]],
		[...sx2[1], ...x1sx2[1], ...x2sx2[1]],
		[...sx2[2], ...x1sx2[2], ...x2sx2[2]]
	];
	solution = swapCell(solution, 'row', ...(_.take(_.shuffle([0, 1, 2]), 2) as [number, number]));
	solution = swapCell(solution, 'row', ...(_.take(_.shuffle([3, 4, 5]), 2) as [number, number]));
	solution = swapCell(solution, 'row', ...(_.take(_.shuffle([6, 7, 8]), 2) as [number, number]));
	solution = swapCell(solution, 'col', ...(_.take(_.shuffle([0, 1, 2]), 2) as [number, number]));
	solution = swapCell(solution, 'col', ...(_.take(_.shuffle([3, 4, 5]), 2) as [number, number]));
	solution = swapCell(solution, 'col', ...(_.take(_.shuffle([6, 7, 8]), 2) as [number, number]));
	solution = swapBox(solution, 'row', ...(_.take(_.shuffle([0, 1, 2]), 2) as [number, number]));
	solution = swapBox(solution, 'col', ...(_.take(_.shuffle([0, 1, 2]), 2) as [number, number]));
	solution = rotation(solution, _.shuffle([0, 90, 180, 270] as const)[0]);
	return solution;
}

export function swapCell(
	board: number[][],
	direct: DIRECTION,
	lineNum1: number,
	lineNum2: number
): number[][] {
	const ref = [
		[1, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 1, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 1, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 1, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 1]
	];
	const temp = ref[lineNum1];
	ref[lineNum1] = ref[lineNum2];
	ref[lineNum2] = temp;
	return direct === 'row' ? multiply(ref, board) : multiply(board, ref);
}

export function swapBox(
	board: number[][],
	direct: DIRECTION,
	lineNum1: number,
	lineNum2: number
): number[][] {
	const ref = [
		[1, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 1, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 1, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 1, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 1]
	];
	for (let i = 0; i < 3; i++) {
		const temp = ref[lineNum1 * 3 + i];
		ref[lineNum1 * 3 + i] = ref[lineNum2 * 3 + i];
		ref[lineNum2 * 3 + i] = temp;
	}
	return direct === 'row' ? multiply(ref, board) : multiply(board, ref);
}

export function getCellLine(board: number[][], direct: DIRECTION, index: number): number[] {
	if (direct === 'row') {
		return [...board[index]];
	} else {
		const list = [];
		for (let i = 0; i < 9; i++) {
			list.push(board[i][index]);
		}
		return list;
	}
}

export function rotation(board: number[][], angle: ANGLE): number[][] {
	const newBoard = [];
	if (angle === 90) {
		for (let i = 0; i < 9; i++) {
			const line = getCellLine(board, 'col', i);
			newBoard.push(line.reverse());
		}
	} else if (angle === 180) {
		for (let i = 0; i < 9; i++) {
			const line = getCellLine(board, 'row', i);
			newBoard.push(line.reverse());
		}
	} else if (angle === 270) {
		for (let i = 8; i >= 0; i--) {
			const line = getCellLine(board, 'col', i);
			newBoard.push(line);
		}
	} else {
		return board;
	}
	return newBoard;
}

export function getEmptyPointList(board: number[][]): { x: number; y: number }[] {
	const emptyPointList: { x: number; y: number }[] = [];
	for (let y = 0; y < board.length; y++) {
		for (let x = 0; x < board[y].length; x++) {
			if (!board[y][x]) emptyPointList.push({ x, y });
		}
	}
	return emptyPointList;
}

export function getFocusCellsBox(point: { x: number; y: number }): { x: number; y: number }[] {
	const refs = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8]
	];
	const xRef = refs.filter((x) => point.x >= Math.min(...x) && point.x <= Math.max(...x)).pop();
	const yRef = refs.filter((y) => point.y >= Math.min(...y) && point.y <= Math.max(...y)).pop();
	const cells = [];
	for (const x of xRef) {
		for (const y of yRef) {
			cells.push({ x, y });
		}
	}
	return cells;
}

export function getFocusCellsRow(point: { x: number; y: number }): { x: number; y: number }[] {
	return [0, 1, 2, 3, 4, 5, 6, 7, 8].map((x) => ({ x, y: point.y }));
}

export function getFocusCellsCol(point: { x: number; y: number }): { x: number; y: number }[] {
	return [0, 1, 2, 3, 4, 5, 6, 7, 8].map((y) => ({ x: point.x, y }));
}

export function setMemo(board: number[][], memo: number[][][]): boolean {
	const emptyPointList = getEmptyPointList(board);
	let isSolve = true;
	for (const emptyPoint of emptyPointList) {
		const focusCellsRow = getFocusCellsRow(emptyPoint);
		const focusCellsCol = getFocusCellsCol(emptyPoint);
		const focusCellsBox = getFocusCellsBox(emptyPoint);
		const memoGroup = [];
		for (const cells of [focusCellsRow, focusCellsCol, focusCellsBox]) {
			const values = cells.map((p) => board[p.y][p.x]);
			memoGroup.push(_.difference([1, 2, 3, 4, 5, 6, 7, 8, 9], values));
		}
		const memoList: number[] = _.intersection(...memoGroup);
		if (memoList.length === 1) {
			memo[emptyPoint.y][emptyPoint.x] = [];
			board[emptyPoint.y][emptyPoint.x] = memoList[0];
			return setMemo(board, memo);
		} else if (memoList.length > 1) {
			memo[emptyPoint.y][emptyPoint.x] = memoList;
			isSolve = false;
		}
	}
	return isSolve;
}

export function diffMemo(board: number[][], memo: number[][][]): boolean {
	const emptyPointList = getEmptyPointList(board);
	let isSolve = true;
	for (const emptyPoint of emptyPointList) {
		const curMemo = memo[emptyPoint.y][emptyPoint.x];
		const focusCellsRow = getFocusCellsRow(emptyPoint).filter((p) => !_.isEqual(p, emptyPoint));
		const focusCellsCol = getFocusCellsCol(emptyPoint).filter((p) => !_.isEqual(p, emptyPoint));
		const focusCellsBox = getFocusCellsBox(emptyPoint).filter((p) => !_.isEqual(p, emptyPoint));
		for (const cells of [focusCellsRow, focusCellsCol, focusCellsBox]) {
			const memos = cells.map((p) => memo[p.y][p.x]);
			const possibleMemos = _.difference(curMemo, ...memos);
			if (possibleMemos.length === 1) {
				board[emptyPoint.y][emptyPoint.x] = possibleMemos[0];
				return diffMemo(board, memo);
			} else {
				isSolve = false;
			}
		}
	}
	return isSolve;
}

export function getRandomPoint(
	board: number[][],
	except: { x: number; y: number }[] = []
): { x: number; y: number } {
	const possiblePoints = [];
	for (let y = 0; y < board.length; y++) {
		for (let x = 0; x < board[y].length; x++) {
			if (board[y][x] && !except.find((item) => _.isEqual(item, { x, y }))) {
				possiblePoints.push({ x, y });
			}
		}
	}
	return possiblePoints[_.random(0, possiblePoints.length)];
}

export function isValidDifficulty(difficulty: DIFFICULTY, emptyLength: number): boolean {
	const refDifficulty = { easy: 45, medium: 50, hard: 55 };
	if (difficulty === 'easy') {
		return emptyLength >= refDifficulty.easy && emptyLength < refDifficulty.medium;
	} else if (difficulty === 'medium') {
		return emptyLength >= refDifficulty.medium && emptyLength < refDifficulty.hard;
	} else {
		return emptyLength >= refDifficulty.hard;
	}
}

export function solve(board: number[][]): boolean {
	const memo = [];
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (!memo[i]) memo[i] = [];
			if (!memo[i][j]) memo[i][j] = [];
		}
	}
	return setMemo(board, memo) || diffMemo(board, memo);
}

export function getSudoku(difficulty: DIFFICULTY): { solution: number[][]; board: number[][] } {
	const solution = getSolution();
	const board = _.cloneDeep(solution);
	const emptyPoints = [];
	const invalidPoints = [];
	while (!isValidDifficulty(difficulty, emptyPoints.length)) {
		const point = getRandomPoint(board, [...emptyPoints, ...invalidPoints]);
		if (!point) break;
		const oriValue = board[point.y][point.x];
		board[point.y][point.x] = 0;
		const isSolve = solve(_.cloneDeep(board));
		if (!isSolve) {
			board[point.y][point.x] = oriValue;
			invalidPoints.push(point);
		} else {
			emptyPoints.push(point);
		}
	}
	return !isValidDifficulty(difficulty, getEmptyPointList(board).length)
		? getSudoku(difficulty)
		: { solution, board };
}
