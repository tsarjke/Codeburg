import getSum, { getSquaredArray, getOddNumbers } from './script';

it('should get sum of 2 numbers', () => {
	const result = getSum(2, 5);
	expect(result).toEqual(7);
});

it('should get an array with squares of numbers', () => {
	const result = getSquaredArray([1, 2, 3, 4, 5]);
	expect(result).toEqual([1, 4, 9, 16, 25]);
});

it('should get an array with odd numbers only', () => {
	const result = getOddNumbers([1, 2, 3, 4, 5]);
	expect(result).toEqual([1, 3, 5]);
});