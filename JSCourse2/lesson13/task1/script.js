const splitText = (str, len) => {
	if (typeof (str) !== 'string') {
		return null;
	}
	const result = [];
	let pos = 0;
	for (; ;) {
		const substing = str.substr(pos, len);
		if (!substing.length) {
			break;
		}
		pos += len;
		result.push(substing[0].toUpperCase() + substing.slice(1));
	}
	return result.join('\n');
};

console.log(splitText('abcd efgh', 4));
