function getSpecialNumbers(start, end) {
	const arr = [];
	for (let i = start; i <= end; i++) {
		if (i % 3 === 0) {
			arr.push(i);
		}
	}
	return arr;
}

console.log(getSpecialNumbers(1, 21));
