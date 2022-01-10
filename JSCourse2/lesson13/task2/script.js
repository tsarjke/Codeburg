const sortContacts = (contactsList, dir = true) => {
	if (!Array.isArray(contactsList)) {
		return null;
	}
	return (dir) ? contactsList.sort((a, b) => a.name.localeCompare(b.name)) : contactsList.sort((a, b) => b.name.localeCompare(a.name));
};

const contacts = [
	{
		name: 'Tom',
		phoneNumber: '777-77-77',
	},
	{
		name: 'John',
		phoneNumber: '555-55-55',
	},
	{
		name: 'Ann',
		phoneNumber: '888-88-88',
	},
	{
		name: 'Pit',
		phoneNumber: '222-22-22',
	},
];

console.log(sortContacts(contacts));
console.log(sortContacts(contacts, false));
