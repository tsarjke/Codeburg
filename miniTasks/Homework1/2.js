//Словесное описание оценки
function gradeToStr(num) {
	switch (num) {
		case 1:
			return "плохо";
		case 2:
			return "неудовлетворительно";
		case 3:
			return "удовлетворительно";
		case 4:
			return "хорошо";
		case 5:
			return "отлично";
		default:
			return "Ошибка!";
	}
}

console.log(gradeToStr(4));
//хорошо
console.log(gradeToStr(6));
//Ошибка!