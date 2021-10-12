'use strict';


// Создание переменных, спрашивающих бюджет и время
const money = +prompt("Ваш бюджет на месяц?", ""),
	time = +prompt("Введите дату в формате YYYY-MM-DD", "");

// Объект c необходимыми данным
const appData = {
	budget: money,
	timeData: time,
	expenes: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

// Вопросы пользовтелю по 2 раза и запись ответов в объект
for (let i = 0; i < 2; i++) {
	let firstQs = prompt("Введите обязательную статью расходов в этом месяце", ""),
		secondtQs = +prompt("Во сколько обойдется?", "");
	if (firstQs != "" && typeof (firstQs) == 'string' && firstQs != null &&
		firstQs.length < 50 && secondtQs != null && !isNaN(secondtQs)) {
		appData.expenes[firstQs] = secondtQs;
	} else {
		i--;
	}
}

// 1) Цикл for еще двумя способами

/*
while
let i = 0;
while (i < 2) {
	let firstQs = prompt("Введите обязательную статью расходов в этом месяце", ""),
	secondtQs = +prompt("Во сколько обойдется?", "");
	if (firstQs != "" && typeof (firstQs) == 'string' && firstQs != null &&
		firstQs.length < 50 && secondtQs != null && !isNaN(secondtQs)) {
		appData.expenes[firstQs] = secondtQs;
	} else {
		i--;
	}
	i++;
}
*/

/*
do while
let i = 0;
do {
	let firstQs = prompt("Введите обязательную статью расходов в этом месяце", ""),
	secondtQs = +prompt("Во сколько обойдется?", "");
	if (firstQs != "" && typeof (firstQs) == 'string' && firstQs != null &&
		firstQs.length < 50 && secondtQs != null && !isNaN(secondtQs)) {
		appData.expenes[firstQs] = secondtQs;
	} else {
		i--;
	}
	i++;
} while (i < 2);
*/

// Вывод бюджета на день
appData.moneyPerDay = appData.budget / 30;
alert(`Бюджет на месяц - ${appData.moneyPerDay}`);

// Вывод полученного объекта в консоль для проверки
console.log(appData);