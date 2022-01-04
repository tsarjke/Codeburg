function getSum(arr) {
	if (!Array.isArray(arr)) {
		return null;
	}
	return arr.reduce((acc, elem) => acc + elem);
}

console.log(getSum([1, 2, 3, 4, 5]));
