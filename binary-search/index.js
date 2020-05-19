const binarySearch = (array, item) => {
    let start = 0;
    let end = array.length - 1; 

    while (start <= end) {
        let middle = Math.round((start + end) / 2);
        let current = array[middle];

        if (current === item) {
            return current;
        }

        // значение меньше чем выбранная середина, то сдвигаем старт
        if (middle > current) {
           start = middle + 1; 
        }

        // значение больше чем выбранная середина, то сдвигаем end
        if (middle < current) {
            end = middle - 1;
        }
    }

}

binarySearch([1,2,3,4,5], 2);

module.exports = binarySearch;