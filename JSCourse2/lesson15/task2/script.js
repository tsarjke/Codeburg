const getSquaredArray = (arr) => arr.map((el) => el * el);

const getOddNumbers = (arr) => arr.filter((el) => el % 2 === 1);

export default (a, b) => a + b;

export { getSquaredArray, getOddNumbers };
