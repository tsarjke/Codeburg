//Мытье тарелок и моющее средство
function washDishes(str) {
	//Ввод строки. Ищем числа. Первое - кол-во тарелок, второе - кол-во моющего
	let result = str.match(/\d+/g);
	let dishesNum = result[0];
	let detergent = result[1];
	if (!dishesNum || !detergent)
		return "Неккоректное значени!"
	if (dishesNum < 1)
		return "Нужны тарелки для мытья";
	if (detergent < 0.5) {
		return "Так ничего не намыть";
	}
	while (dishesNum >= 0) {
		if (dishesNum == 0 && detergent == 0)
			return "Все тарелки вымыты, моющее средство закончилось";
		if (dishesNum == 0 && detergent > 0)
			return "Все тарелки вымыты. Осталось " + detergent + " ед. моющего средства";
		if (dishesNum > 0 && detergent == 0)
			return "Моющее средство закончилось. Осталось " + dishesNum + " тарелок";
		dishesNum--;
		detergent -= 0.5;
	}
}

//Для ввода пользователем строки
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Введите количество тарелок и моющего средства (через пробел): ", (answer) => {
	console.log(washDishes(answer));
	rl.close();
});