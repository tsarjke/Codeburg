//Сортировка массива без метода sort
const arr = [12, 4, 3, 10, 1, 20];

function sort(array) {
	let arr = array.slice();

	//Если поменяли местами пару элементов, то проходим еще цикл и проверяем. Если перестановок не возникло, то выходим их цикла
	let swapped = true;
	while (swapped) {
		swapped = false;
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				let tmp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = tmp;
				swapped = true;
			}
		}
	}
	return arr;
}

console.log(sort(arr));
//[ 1, 3, 4, 10, 12, 20 ]