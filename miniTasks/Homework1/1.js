//Наименьшее из трех чисел
function minFrom3(a, b, c) {
	let min = a;
	if (b < min)
		min = b;
	if (c < min)
		min = c;
	return min;
}

console.log(minFrom3(4,7,2));
//2
console.log(minFrom3(-4,7,2));
//-4