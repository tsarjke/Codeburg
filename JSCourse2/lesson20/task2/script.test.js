import { wallet } from './script';

it('should get full name from the object', () => {
	const resultMax = wallet.getMax();
	expect(resultMax).toEqual(64);

	const resultMin = wallet.getMin();
	expect(resultMin).toEqual(2);
});
