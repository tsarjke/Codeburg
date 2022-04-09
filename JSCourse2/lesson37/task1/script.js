const onUnhandledError = (err) => {
	console.error('error', err.message);
};

window.addEventListener('error', onUnhandledError);

let userParsingResult;

try {
	const user = JSON.parse('{"name": "Tom", "age": 21}');
	console.log('User data: ', user);
	userParsingResult = 'success';
} catch (e) {
	userParsingResult = 'error';
} finally {
	console.log(`User parsing finished with ${userParsingResult}`);
}

let productParsingResult;

try {
	const product = JSON.parse('{name: "Tom", age: 21}');
	console.log('Product data: ', product);
	productParsingResult = 'success';
} catch (e) {
	productParsingResult = 'error';
} finally {
	console.log(`Product parsing finished with ${productParsingResult}`);
}
