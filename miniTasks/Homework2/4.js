//
function meter(unit, length) {
	switch (unit) {
		case 1:
			return length / 10 + " метров";
		case 2:
			return length * 1000 + " метров";
		case 3:
			return length + " метров";
		case 4:
			return length / 1000 + " метров";
		case 5:
			return length / 100 + " метров";
		default:
			return "Ошибка";
	}
}

console.log(meter(1, 5.4));
//0.54 метров
console.log(meter(2, 5.4));
//5400 метров
console.log(meter(6, 5.4));
//Ошибка!