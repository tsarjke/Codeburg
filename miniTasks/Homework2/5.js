//Является ли строка палиндромом
function isStrPalindrome(str) {
	if (!str)
		return "Забыли ввести строку";
	if (str.length == 1)
		return "У одного символа начало и конец совпадают без различных проверок";
	str = str.toLowerCase();
	str = str.replace(/\s+/g, '');
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] != str[str.length - 1 - i])
			return false;
	}
	return true;
}

//Для ввода пользователем строки
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Введите строку: ", (str) => {
	console.log(isStrPalindrome(str));
	rl.close();
});