const asyncNum = (num, delay) => new Promise((resolve) => {
	setTimeout(() => {
		console.log(num);
		resolve(num);
	}, delay);
});

const getSumElOfArr = (arr) => arr
	.filter((el) => !isNaN(el))
	.reduce((acc, el) => acc + +el);

const asyncNum1 = asyncNum(2, 2000);
const asyncNum2 = asyncNum('11', 4000);
// const asyncNum2 = Promise.reject(new Error('Error'));
const asyncNum3 = asyncNum('zxc', 5000);

const asyncSum = (...asyncNums) => Promise.all(asyncNums)
	.then(getSumElOfArr)
	.catch(() => Promise.reject(new Error('Can\'t calculate')));

asyncSum(asyncNum1, asyncNum2, asyncNum3)
	.then((value) => console.log(value));
