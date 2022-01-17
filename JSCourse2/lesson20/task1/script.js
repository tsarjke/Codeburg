const event = {
	message: 'Welcome to the party!',
	guests: [
		{ name: 'John', age: 18, email: 'j@server.com' },
		{ name: 'Ann', age: 19, email: 'a@server.com' },
		{ name: 'Tom', age: 17, email: 't@server.com' },
		{ name: 'Bob', age: 21, email: 'b@server.com' },
		{ name: 'Rachel', age: 16, email: 'r@server.com' },
	],
	getInvitations() {
		return this.guests
			.filter(({ age }) => age >= 18)
			.map(({ name, email }) => ({ message: `Dear, ${name}! ${this.message}`, email }));
	},
};

export { event };
