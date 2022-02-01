import { compose } from './script';

it('should get an array with objects which include a message with a user\'s snname and mail ', () => {

	const add2 = (value) => value + 2;
	const square = (value) => value * value;
	const half = (value) => value / 2;

	const superFunc = compose(add2, square, half);

	const result = superFunc(2);

	expect(result).toEqual(8);
});
