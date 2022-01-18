import sumOfSquares from './script';

it('should get the sum of the squares of the numbers', () => {
	const result1 = sumOfSquares(2, 3);
	expect(result1).toEqual(13);

	const result2 = sumOfSquares(5, 2, 6, 4);
	expect(result2).toEqual(81);
});
