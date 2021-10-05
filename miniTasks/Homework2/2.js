//Проверка по вершинам треугольника того, является ли он прямоугольным
function isTriangleRight(a, b, c) {
	let ab = Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2) + Math.pow(b[2] - a[2], 2));
	let ac = Math.sqrt(Math.pow(c[0] - a[0], 2) + Math.pow(c[1] - a[1], 2) + Math.pow(c[2] - a[2], 2));
	let bc = Math.sqrt(Math.pow(c[0] - b[0], 2) + Math.pow(c[1] - b[1], 2) + Math.pow(c[2] - b[2], 2));
	let abPow = (Math.pow(ab, 2));
	let acPow = (Math.pow(ac, 2));
	let bcPow = (Math.pow(bc, 2));
	if (abPow + acPow == bcPow || abPow + bcPow == acPow || bcPow + acPow == abPow)
		return true;
	return false;
}

console.log(isTriangleRight([3, -1, 6], [-1, 7, -2], [1, -3, 2]));
//true
console.log(isTriangleRight([3, -1, 6], [-1, 6, -2], [1, -3, 4]));
//false