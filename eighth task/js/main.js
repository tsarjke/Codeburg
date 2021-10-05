'use strict';

// Получение кнопки "Начать расчет" через id
let btnStart = document.querySelector("#start"),

	// Получение всеъ эелементов в правой части страницы с классом *-value
	values = document.querySelectorAll('.result-table [class$="-value"]'),

	// Получение полей(input) c обязательными расходами через класс
	expItems = document.getElementsByClassName("expenses-item"),

	// Получение кнопок “Утвердить” и “Рассчитать” через Tag, каждая в своей переменной
	btnExp = document.getElementsByTagName("button")[0],
	btnOptExp = document.getElementsByTagName("button")[1],
	btnCalc = document.getElementsByTagName("button")[2],

	// Получение полей для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
	optExpItems = document.querySelectorAll(".optionalexpenses-item"),

	// Получение оставшихся полей (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
	income = document.querySelector(".choose-income"),
	savingsCheckBox = document.querySelector("#savings"),
	sumValue = document.querySelector("#sum"),
	percentValue = document.querySelector("#percent"),
	year = document.querySelector(".year-value"),
	month = document.querySelector(".month-value"),
	day = document.querySelector(".day-value");

// Создание переменных, спрашивающих бюджет и время
let money, time;

if (money == undefined) {
	btnExp.disabled = true;
	btnOptExp.disabled = true;
	btnCalc.disabled = true;
}

btnStart.addEventListener('click', function () {
	time = prompt("Введите дату в формате YYYY-MM-DD", "");
	money = +prompt("Ваш бюджет на месяц?", "");
	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", "");
	}
	appData.budget = money;
	appData.timeData = time;
	values[0].textContent = money.toFixed();
	year.value = new Date(Date.parse(time)).getFullYear();
	month.value = new Date(Date.parse(time)).getMonth() + 1;
	day.value = new Date(Date.parse(time)).getDate();
	btnExp.disabled = false;
	btnOptExp.disabled = false;
	btnCalc.disabled = false;
});

// Запись в объект обязательной статьи расхода и стоимости, а также вывод суммы расходов на экран
btnExp.addEventListener('click', function () {
	let sum = 0;
	for (let i = 0; i < expItems.length; i++) {
		let expName = expItems[i].value,
			price = expItems[++i].value;
		if (expName != "" && typeof (expName) == 'string' && expName != null &&
			expName.length < 50 && price != null && !isNaN(price)) {
			appData.expenes[expName] = price;
			sum += +price;
		} else {
			i--;
		}
	}
	values[3].textContent = sum;
});

// Вывод на экран и запись в объект дополнительных статей расхода
btnOptExp.addEventListener('click', function () {
	for (let i = 0; i < optExpItems.length; i++) {
		let optExpense = optExpItems[i].value;
		appData.optionalExpenses[i] = optExpense;
		values[4].textContent += appData.optionalExpenses[i] + ' ';
	}
});

// Запись бюджета на день в объект, вывод на экран и расчет уровня достатка
btnCalc.addEventListener('click', function () {

	if (appData.budget != undefined) {
		appData.moneyPerDay = ((appData.budget - +values[3].textContent) / 30).toFixed();
		values[1].textContent = appData.moneyPerDay;

		if (appData.moneyPerDay < 100) {
			values[2].textContent = "Это минимальный уровень достатка!";
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			values[2].textContent = "Это средний уровень достатка!";
		} else if (appData.moneyPerDay > 2000) {
			values[2].textContent = "Это высокий уровень достатка!";
		} else {
			values[2].textContent = "Произошла ошибка";
		}
	} else {
		values[1].textContent = "Произошла ошибка";
	}
});

// Получение данных о том, что может принести дополнительный доход
income.addEventListener('input', function () {
	let items = income.value;
	appData.income = items.split(', ');
	values[5].textContent = appData.income;
});

// ChechBox, отвечающий за накопления
savingsCheckBox.addEventListener('click', function () {
	if (appData.savings == false) {
		appData.savings = true;
	} else {
		appData.savings = false;
	}
});

// Расчет суммы дохода по накоплениям при изменении суммы (при включенном savingCheckBox)
sumValue.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.mouthIncome = sum / 12 / 100 * percent;
		appData.yearIncome = sum / 100 * percent;

		values[6].textContent = appData.mouthIncome.toFixed(2);
		values[7].textContent = appData.yearIncome.toFixed(2);
	}
});

// Расчет суммы дохода по накоплениям при изменении процента (при включенном savingCheckBox)
percentValue.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.mouthIncome = sum / 12 / 100 * percent;
		appData.yearIncome = sum / 100 * percent;

		values[6].textContent = appData.mouthIncome.toFixed(2);
		values[7].textContent = appData.yearIncome.toFixed(2);
	}
});

// Объект c необходимыми данным
const appData = {
	budget: money,
	timeData: time,
	expenes: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};