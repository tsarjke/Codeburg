import { event } from './script';

it('should get full name from the object', () => {
	const result = event.getInvitations();
	expect(result).toEqual([
		{
			message: 'Dear, John! Welcome to the party!',
			email: 'j@server.com',
		},
		{
			message: 'Dear, Ann! Welcome to the party!',
			email: 'a@server.com',
		},
		{
			message: 'Dear, Bob! Welcome to the party!',
			email: 'b@server.com',
		},
	]);
});
