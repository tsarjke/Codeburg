import { user } from './script';

it('should check getter and setter for the object, () => {
	const result1 = user.fullName;
	expect(result1).toEqual('John Doe');

	user.fullName = 'Bob Builder';

	const result2 = user.fullName;
	expect(result2).toEqual('Bob Builder');
});
