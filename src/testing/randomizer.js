let ls = []; let size = 50; for (let i = 0; i < size; i++) {ls.push(i)};
const rize = (arr) => {
    let currentIndex = arr.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    return arr;
}; console.log(rize(ls));