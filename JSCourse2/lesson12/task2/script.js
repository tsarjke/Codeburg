const getParsedIntegers = (numbersList) => numbersList.map(Number.parseInt);
const getParsedIntegersV2 = (numbersList) => numbersList.map(parseInt);
const getParsedFloats = (numbersList) => numbersList.map(Number.parseFloat);
const getParsedFloatsV2 = (numbersList) => numbersList.map(parseFloat);

console.log(`getParsedIntegers: ${getParsedIntegers([1, 1.33, 2, 3, Infinity, 4, 5, -Infinity, 6, NaN, undefined, 7, NaN, '17', '22b '])}`);
console.log(`getParsedIntegersV2: ${getParsedIntegersV2([1, 1.33, 2, 3, Infinity, 4, 5, -Infinity, 6, NaN, undefined, 7, NaN, '17', '22b '])}`);
console.log(`getParsedFloats: ${getParsedFloats([1, 1.33, 2, 3, Infinity, 4, 5, -Infinity, 6, NaN, undefined, 7, NaN, '17', '22b '])}`);
console.log(`getParsedFloatsV2: ${getParsedFloatsV2([1, 1.33, 2, 3, Infinity, 4, 5, -Infinity, 6, NaN, undefined, 7, NaN, '17', '22b '])}`);
