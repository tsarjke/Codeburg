import { wallet } from './script';

it('should get the max and min value from the array', () => {
	const resultMax = wallet.getMax();
	expect(resultMax).toEqual(64);

	const resultMin = wallet.getMin();
	expect(resultMin).toEqual(2);
});
