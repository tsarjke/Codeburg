function sortDesc(arr) {
	return arr.slice().sort((prev, next) => next - prev);
}

console.log(sortDesc([12, 11, 46, 23, 31, 32, 41, 21]));
