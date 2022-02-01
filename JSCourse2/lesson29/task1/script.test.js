import { calc } from './script';

it('should test the chainging function', () => {
	const result = calc(3).add(2).mult(4).div(10).subtract(5).result();
	expect(result).toEqual(-3);
});
