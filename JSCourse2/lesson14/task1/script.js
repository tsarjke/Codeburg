const calc = (expression) => {
	let [a, operator, b] = expression.split(' ');
	let result;
	a = +a;
	b = +b;
	switch (operator) {
	case '+':
		result = a + b;
		break;
	case '-':
		result = a - b;
		break;
	case '/':
		result = a / b;
		break;
	case '*':
		result = a * b;
		break;
	default:
		return null;
	}
	return `${expression} = ${result}`;
};

console.log(calc('1 + 2'));
console.log(calc('1 - 2'));
console.log(calc('1 / 2'));
console.log(calc('1 * 2'));
console.log(calc('z + 2'));
