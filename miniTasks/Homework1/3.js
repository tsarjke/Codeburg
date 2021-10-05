//Цифра в строку на русском языке
function numToStr(num) {
	switch (num) {
		case 0:
			return "ноль";
		case 1:
			return "один";
		case 2:
			return "два";
		case 3:
			return "три";
		case 4:
			return "четыре";
		case 5:
			return "пять";
		case 6:
			return "шесть";
		case 7:
			return "семь";
		case 8:
			return "восемь";
		case 9:
			return "девять";
		default:
			return "Ошибка!";
	}
}

console.log(numToStr(0));
//хорошо
console.log(numToStr(10));
//Ошибка!