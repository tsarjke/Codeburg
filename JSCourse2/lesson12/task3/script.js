const getMaxAbsoluteNumber = (numbersList) => {
	if (!Array.isArray(numbersList) || !numbersList.length) {
		return null;
	}
	const absNumbersList = numbersList.map(Math.abs);
	return Math.max(...absNumbersList);
};

console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20]));
console.log(getMaxAbsoluteNumber([]));
console.log(getMaxAbsoluteNumber(123));
