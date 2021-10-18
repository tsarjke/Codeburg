// Получение кнопки "Начать расчет" через id
let btnStart = document.querySelector("#start"),

	// Получение всеъ эелементов в правой части страницы с классом *-value
	values = document.querySelectorAll('.result-table [class$="-value"]'),

	// Получение полей(input) c обязательными расходами через класс
	expItem = document.getElementsByClassName("expenses-item"),

	// Получение кнопок “Утвердить” и “Рассчитать” через Tag, каждая в своей переменной
	btnExp = document.getElementsByTagName("button")[0],
	btnOptExp = document.getElementsByTagName("button")[1],
	btnCalc = document.getElementsByTagName("button")[2],

	// Получение полей для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
	optExpItem = document.querySelectorAll(".optionalexpenses-item"),

	// Получение оставшихся полей через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
	income = document.querySelector(".choose-income"),
	savingsCheckBox = document.querySelector("#savings"),
	sum = document.querySelector("#sum"),
	percent = document.querySelector("#percent"),
	year = document.querySelector(".year-value"),
	month = document.querySelector(".month-value"),
	day = document.querySelector(".day-value");