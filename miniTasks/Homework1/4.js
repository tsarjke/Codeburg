//Словесное описание числа (от -999 до 999)
function numDescription(num) {
	let res = "";

	//Определение знака
	if (num > 0)
		res += "положительное ";
	else if (num < 0) {
		res += "отрицательное ";
		num = -num;
	} else return "нулевое число"

	//Значение k - количество цифр в числе
	let k = 0;
	for (; num > 0; num = Math.floor(num / 10), k++);
	switch (k) {
		case 1:
			res += "однозначное ";
			break;
		case 2:
			res += "двузначное ";
			break;
		case 3:
			res += "трехзначное ";
			break;
		default:
			return "Ошибка!";
	}
	res += "число";
	return res;
}

console.log(numDescription(-999));
//отрицательное трехзначное число
console.log(numDescription(0));
//нулевое число
console.log(numDescription(10));
//положительное двузначное число
console.log(numDescription(1000));
//Ошибка!