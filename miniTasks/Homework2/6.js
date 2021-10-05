//Проверка года на то, является ли он високосным
function isYearLeap(year) {
	year = +year;
	if (!year)
		return "Некорректное значение!";
	if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
		return true;
	return false;
}

//Для ввода пользователем строки
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Введите год: ", (year) => {
	console.log(isYearLeap(year));
	rl.close();
});