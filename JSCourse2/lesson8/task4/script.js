function swap(arr) {
	const newArr = arr.slice();
	newArr.push(newArr.shift());
	return newArr;
	// const [first, ...rest] = arr;
	// return [...rest, first];
}

console.log(swap([11, 22, 33, 44, 55]));
