import { event } from './script';

it('should get an array with objects which include a message with a user\'s snname and mail ', () => {
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
