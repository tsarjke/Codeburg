'use strict';

let money, time;

function start() {
	// 2) Создание переменных, спрашивающих бюджет и время
	money = +prompt("Ваш бюджет на месяц?", "");
	time = +prompt("Введите дату в формате YYYY-MM-DD", "");
	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", "");
	}
}
start();

// Объект c необходимыми данным
const appData = {
	budget: money,
	timeData: time,
	expenes: {},
	optionalExpenses: {},
	income: [],
	savings: true
};

// Вопросы пользовтелю по 2 раза и запись ответов в объект
function chooseExpenses() {
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
}
chooseExpenses();

// 2) Вывод бюджета на день
function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed();
	alert(`Бюджет на месяц - ${appData.moneyPerDay}`);
}
detectDayBudget();

// 3) Расчет уровня достатка
function detectLevel() {
	if (appData.moneyPerDay < 100) {
		console.log("Это минимальный уровень достатка!");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("Это средний уровень достатка!");
	} else if (appData.moneyPerDay > 2000) {
		console.log("Это высокий уровень достатка!");
	} else {
		console.log("Произошла ошибка");
	}
}
detectLevel();

// Вывод полученного объекта в консоль для проверки
console.log(appData);

function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?", ""),
			percent = +prompt("Под какой процент?", "");

		appData.mouthIncome = save / 12 / 100 * percent;
		alert("Доход в месяц с Вашего депозита: " + (appData.mouthIncome).toFixed());
	}
}
checkSavings();

// 3) Определение необязательных расходов
function chooseOptExpenses() {
	for (let i = 0; i < 2; i++) {
		let optExpense = prompt("Статья необязательных расходов?", "");
		appData.optionalExpenses[i] = optExpense;
	}
}
chooseOptExpenses();