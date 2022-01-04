function getArrayBounds(arr) {
	if (!Array.isArray(arr)) {
		return null;
	}
	return [arr.length, arr[0], arr[arr.length - 1]];
}

console.log(getArrayBounds([11, 22, 33, 44, 55, 66, 77, 88, 99]));
console.log(getArrayBounds(55));
