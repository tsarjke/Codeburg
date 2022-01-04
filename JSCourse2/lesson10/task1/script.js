const transformToObject = (arr) => {
	const obj = {};
	arr.forEach((el) => {
		obj[el] = el;
	});
	return obj;
};

console.log(transformToObject([1, 'Tom', true]));
console.log(transformToObject([]));
