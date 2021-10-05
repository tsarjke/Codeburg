//Время года по номеру месяца
function season(monthNum) {
	switch (monthNum) {
		case 12:
		case 1:
		case 2:
			return "Зима";
		case 3:
		case 4:
		case 5:
			return "Весна"
		case 6:
		case 7:
		case 8:
			return "Лето";
		case 9:
		case 10:
		case 11:
			return "Осень";
		default:
			return "Ошибка!";
	}
}
console.log(season(1));
//Зима
console.log(season(7));
//Лето
console.log(season(13));
//Ошибка!