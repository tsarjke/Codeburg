import { user } from './script';

it('should get full name from the object', () => {
	const result = user.getFullName();
	expect(result).toEqual(`${user.firstName} ${user.lastName}`);
});
