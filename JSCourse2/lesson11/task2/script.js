const copyObj = (obj) => ({ ...obj });

const users = {
	'John Doe': 19,
	'Tom': 17,
	'Bob': 18,
};

const users2 = copyObj(users);
users2['John Doe'] = 20;

console.log(users['John Doe']);
console.log(users2['John Doe']);
