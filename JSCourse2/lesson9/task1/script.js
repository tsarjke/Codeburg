function getSpecialNumbers(arr) {
	return arr.filter((elem) => !(elem % 3));
}

console.log(getSpecialNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));