//Удвоение символа в строке
function doubling(str, char) {
	const regexp = new RegExp(`${char}`, 'g')
	let repl = char + char;
	str = str.replace(regexp, repl);
	return str;
}

console.log(doubling("Удвоение символа в строке", 'о'));
//Удвооение симвоола в строоке