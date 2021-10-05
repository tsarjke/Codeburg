//Перераспределение значений. Меньшее в X, большее в Y
function xlsy(x, y) {
	if (x > y) {
		let tmp = x;
		x = y;
		y = tmp;
	}
	return [x, y];
}

console.log(xlsy(1, 2));
//[1, 2]
console.log(xlsy(2, 1));
//[1, 2]