//Новый объединенный массив из двух массивов (безметода concat)
const A = [12, 4, 3, 10, 1, 20];
const B = [-3, -7, -100, -33];

function concat(arr1, arr2) {
	//копия первого массива
	const newArr = arr1.slice(0);

	//Добавление элементов второго массива ко второму
	for (let i = 0; i < arr2.length; i++)
		newArr.push(arr2[i]);
	return newArr;
}

console.log(concat(A, B));
//[12, 4, 3, 10, 1, 20, -3, -7, -100, -33]
console.log(concat(B, A));
//[-3, -7, -100, -33, 12, 4, 3, 10, 1, 20]