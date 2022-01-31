const getLocalStorageData = () => Object.entries(localStorage).reduce((acc, [key, value]) => {
	let verifiedValue;
	try {
		verifiedValue = JSON.parse(value);
	} catch (e) {
		verifiedValue = value;
	}
	return {
		...acc, [key]: verifiedValue,
	};
}, {});

localStorage.clear();

localStorage.setItem('name', JSON.stringify('Tom'));
localStorage.setItem('age', JSON.stringify(17));
localStorage.setItem('hobbies', JSON.stringify(['volleyball', 'coding', 'reading', 'hiking']));

console.log(getLocalStorageData());
