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
	savings: true,

	// Вопросы пользовтелю по 2 раза и запись ответов в объект
	chooseExpenses: function () {
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
	},

	// Вывод бюджета на день
	detectDayBudget: function () {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert(`Бюджет на месяц - ${appData.moneyPerDay}`);
	},

	// Расчет уровня достатка
	detectLevel: function () {
		if (appData.moneyPerDay < 100) {
			console.log("Это минимальный уровень достатка!");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log("Это средний уровень достатка!");
		} else if (appData.moneyPerDay > 2000) {
			console.log("Это высокий уровень достатка!");
		} else {
			console.log("Произошла ошибка");
		}
	},

	// Расчет дохода в месяц при наличии сбережений
	checkSavings: function () {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?", ""),
				percent = +prompt("Под какой процент?", "");

			appData.mouthIncome = save / 12 / 100 * percent;
			alert("Доход в месяц с Вашего депозита: " + (appData.mouthIncome).toFixed());
		}
	},

	// Определение необязательных расходов
	chooseOptExpenses: function () {
		for (let i = 0; i < 2; i++) {
			let optExpense = prompt("Статья необязательных расходов?", "");
			appData.optionalExpenses[i] = optExpense;
		}
	},

	// Получение данных о том, что может принести дополнительный заработок
	chooseIncome: function () {
		let items = prompt("Что принесет дополнительный доход (через запятую)", "");

		// 1) Проверка, не дающая оставить строку пустой, не дающая отменить вопрос, а также подтверждающая то что была введена именно строка
		if (typeof (items) == 'string' && items != "" && items != null) {
			appData.income = items.split(', ');
			appData.income.push(prompt("Ничего не забыли?", ""));
			appData.income.sort();
		}

		// 2) Перебор массива income с помощью forEach
		appData.income.forEach(function (item, i) {
			alert(++i + "- " + item);
		})
	}
};

// 3) Вывод всех свойств объекта
let appDataKeys = "";
for (let keys in appData) {
	appDataKeys += keys + ", ";
}
console.log("Наша программа включает в себя данные: " + appDataKeys);

// Вывод полученного объекта в консоль для проверки
console.log(appData);