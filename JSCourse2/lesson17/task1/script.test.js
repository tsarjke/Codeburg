import { makeCounter } from './script';

it('should get an independent counter from 0', () => {
	const result1 = makeCounter();
	const result2 = makeCounter();
	expect(result1()).toEqual(0);
	expect(result2()).toEqual(0);
	expect(result2()).toEqual(1);
});
