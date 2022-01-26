import { dayOfWeek } from './script';

it('should get day of the week after n days', () => {
	const result1 = dayOfWeek(new Date(2022, 0), 0);
	expect(result1).toEqual('St');

	const result2 = dayOfWeek(new Date(2022, 0), 50);
	expect(result2).toEqual('Su');
});
