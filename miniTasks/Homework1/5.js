//Совпадение хотя бы пары чисел из трех 
function pairFrom3(a, b, c) {
	if (a == b)
		return true;
	if (a == c)
		return true;
	if (b == c)
		return true;
	return false;
}

console.log(pairFrom3(1,1,3));
//true
console.log(pairFrom3(1,2,3));
//false
console.log(pairFrom3(1,1,1));
//true