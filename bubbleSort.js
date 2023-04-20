function bubbleSort(arr, compareFn) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (compareFn(arr[j], arr[j + 1]) > 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

function ascendingOrder(a, b) {
    return a - b;
}

function descendingOrder(a, b) {
    return b - a;
}

function oddNumbersFirst(a, b) {
    if (a % 2 === 1 && b % 2 === 0) {
        return -1;
    } else if (a % 2 === 0 && b % 2 === 1) {
        return 1;
    } else {
        return a - b;
    }
}

function evenNumbersFirst(a, b) {
    if (a % 2 === 0 && b % 2 === 1) {
        return -1;
    } else if (a % 2 === 1 && b % 2 === 0) {
        return 1;
    } else {
        return b - a;
    }
}

const arr = [3, 5, 1, 6, 2, 7, 1, 4];

console.log(bubbleSort(arr, ascendingOrder));
console.log(bubbleSort(arr, descendingOrder));
console.log(bubbleSort(arr, oddNumbersFirst));
console.log(bubbleSort(arr, evenNumbersFirst));
