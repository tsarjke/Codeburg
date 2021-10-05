//Сумма цифр числа
function sum(str) {
	if (!+str)
		return "Ошибка!";
	let sum = 0;
	for (let i = 0; i < str.length; i++)
		sum += +str[i];
	return sum;
}

console.log(sum("121"));
//4