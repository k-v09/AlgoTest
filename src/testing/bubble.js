import rize from'./randomizer.js';
let ls = []; let len = 50; for (let i = 0; i < len; i++) {ls.push(i)}; ls = rize(ls);

const bubbleSort = (array) => {
    const arrayLength = array.length;
    let isSwapped;
    for (let i = 0; i < arrayLength; i++) {
        isSwapped = false;
        for (let j = 0; j < arrayLength - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    return array;
}

export default bubbleSort;