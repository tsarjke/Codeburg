const age = 18;
if (age < 16) {
	console.log('Too young');
} else if (age >= 16 && age < 18) {
	console.log('Almost ready');
} else if (age >= 18 && age < 65) {
	console.log('Ready');
} else {
	console.log('Else');
}

// Тернаный оператор ? : ( const result = условие ? значение1 : значение2; )

const amount = 16;
const result = amount > 17 ? 'full' : 'empty';
console.log(result);
