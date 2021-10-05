//Удаление наименьшего и наибольшего значения из массива
const arr = [12, 4, 3, 10, 1, 20];

function arrMinMax(array) {
	let arr = array.slice();
	let minIndex, maxIndex;
	let min = arr[0],
		max = arr[0];
	//Поиск индексов наименьшего и наибольшего значения
	for (let i = 1; i < arr.length; i++) {
		if (min > arr[i]) {
			min = arr[i];
			minIndex = i;
		}
		if (max < arr[i]) {
			max = arr[i];
			maxIndex = i;
		}
	}

	//Удаление наименьшего и наибольшего значения
	delete(arr[minIndex]);
	delete(arr[maxIndex]);

	//Уборка мест, занимаемые наименьшим и наибольшим значениями
	for (let i = 1; i < arr.length; i++) {
		if (!arr[i]) {
			arr.splice(i, 1);
			i--;
		}
	}
	return arr;
}

console.log(arrMinMax(arr));
//[ 12, 4, 3, 10 ]