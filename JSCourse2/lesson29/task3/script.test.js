import {mult, triple, twice} from './script';

it('should get the sum of the squares of the numbers', () => {
	const result1 = twice(7);
	expect(result1).toEqual(14);

	const result2 = triple(9);
	expect(result2).toEqual(27);
});
