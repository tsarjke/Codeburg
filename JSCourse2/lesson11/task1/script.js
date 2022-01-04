const getAdults = (obj) => Object.entries(obj)
	.filter((el) => el[1] >= 18)
	.map((el) => el[0]);

const users = {
	'John Doe': 19,
	'Tom': 17,
	'Bob': 18,
};
console.log(getAdults(users));
