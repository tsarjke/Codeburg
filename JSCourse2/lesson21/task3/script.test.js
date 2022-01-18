import { User } from './script';

it('should get the argument (age) back, if it\'s greater than zero', () => {
	const testObj = new User('John', 23);

	const result1 = testObj.setAge(-1);
	expect(result1).toEqual(false);

	const result2 = testObj.setAge(20);
	expect(result2).toEqual(20);

	const result3 = testObj.setAge(27);
	expect(result3).toEqual(27);
});
