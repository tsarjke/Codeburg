//Нечеткий поиск
function fuzzySearch(str) {
	const arr = str.split(" ");
	let s1 = arr[0].search(/Привет/i);
	if (s1)
		return "Привет";
	let s2 = arr[1].search(/мир/i);
	if (s2)
		return "мир";
	return true;
}

console.log(fuzzySearch("Привет мер"));
//мир
console.log(fuzzySearch("Привт мир"));
//Привет
console.log(fuzzySearch("Привет мир"));
//true