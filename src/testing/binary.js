import rize from "./randomizer.js";
let ls = []; let len = 50; for (let i = 0; i < len; i++) {ls.push(i)}; ls = rize(ls);

function partition(arr, low, high) { 
	let pivot = arr[high]; 
	let i = low - 1; 
	for (let j = low; j <= high - 1; j++) { 
		if (arr[j] < pivot) { 
			i++; 
			[arr[i], arr[j]] = [arr[j], arr[i]]; 
		} 
	}
	[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; 
	return i + 1;
}

const quickSort = (arr, low, high) => { 
	if (low >= high) {
        return;
    };
	let pi = partition(arr, low, high);

	quickSort(arr, low, pi - 1);
	quickSort(arr, pi + 1, high);
    return arr;
}
console.log(quickSort(ls, 0, ls.length - 1));

export default quickSort;