'use strict';

// 2) Создание переменных, спрашивающих бюджет и время
const money = +prompt("Ваш бюджет на месяц?", ""),
	time = +prompt("Введите дату в формате YYYY-MM-DD", "");

	// 3) Объект c необходимыми данным
const appData = {
	budget: money,
	timeData: time,
	expenes: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

// 4) Вопросы пользовтелю по 2 раза и запись ответов в объект
const firstQs1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
	secondtQs1 = prompt("Во сколько обойдется?", ""),
	firstQs2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
	secondtQs2 = prompt("Во сколько обойдется?", "");
appData.expenes[firstQs1] = secondtQs1;
appData.expenes[firstQs2] = secondtQs2;

// 5) Вывод бюджета на день
alert(`Бюджет на месяц - ${appData.budget/30}`);

// 6) Вывод полученного объекта в консоль для проверки
console.log(appData);