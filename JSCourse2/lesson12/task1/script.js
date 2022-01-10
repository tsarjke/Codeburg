const getFiniteNumbers = (numbersList) => numbersList.filter(Number.isFinite);
const getFiniteNumbersV2 = (numbersList) => numbersList.filter(isFinite);
const getNaN = (numbersList) => numbersList.filter(Number.isNaN);
const getNaNV2 = (numbersList) => numbersList.filter(isNaN);
const getIntegers = (numbersList) => numbersList.filter(Number.isInteger);

console.log(`getFiniteNumbers: ${getFiniteNumbers([1, 1.33, 2, 3, Infinity, 4, 5, -Infinity, 6, NaN, undefined, 7, NaN, '17', '22b '])}`);
console.log(`getFiniteNumbersV2: ${getFiniteNumbersV2([1, 1.33, 2, 3, Infinity, 4, 5, -Infinity, 6, NaN, undefined, 7, NaN, '17', '22b '])}`);
console.log(`getNaN: ${getNaN([1, 1.33, 2, 3, Infinity, 4, 5, -Infinity, 6, NaN, undefined, 7, NaN, '17', '22b '])}`);
console.log(`getNaNV2: ${getNaNV2([1, 1.33, 2, 3, Infinity, 4, 5, -Infinity, 6, NaN, undefined, 7, NaN, '17', '22b '])}`);
console.log(`getIntegers: ${getIntegers([1, 1.33, 2, 3, Infinity, 4, 5, -Infinity, 6, NaN, undefined, 7, NaN, '17', '22b '])}`);
