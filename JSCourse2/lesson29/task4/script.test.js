import { compose } from './script';

it('should get one common function', () => {
	const add2 = (value) => value + 2;
	const square = (value) => value * value;
	const half = (value) => value / 2;

	const superFunc = compose(add2, square, half);

	const result = superFunc(2);

	expect(result).toEqual(8);
});
