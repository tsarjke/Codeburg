const flatArray = (arr) => arr.slice().reduce((acc, elem) => acc.concat(elem), []);

console.log(flatArray([1, [3, 5, 2], [8]]));
