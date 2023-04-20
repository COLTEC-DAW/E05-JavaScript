let swap = (j, input) => {
    let buffer = input[j + 1];
    input[j + 1] = input[j];
    input[j] = buffer;
};
function SortArray(input, order) {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length - 1; j++)
            order(input, j);
    }
    return input;
}
let toSort = [3, 45, 2, -16, 14, 13, 2, 4, 7, 10, -22];
console.log(toSort);
console.log(SortArray(toSort, (input, index) => {
    if (input[index] > input[index + 1])
        swap(index, input);
}));
console.log(SortArray(toSort, (input, index) => {
    if (input[index] % 2 == 0)
        input.splice(index, 1);
    else if (input[index] > input[index + 1])
        swap(index, input);
}));
toSort = [3, 45, 2, -16, 14, 13, 2, 4, 7, 10, -22];
console.log(SortArray(toSort, (input, index) => {
    if (input[index] < input[index + 1])
        swap(index, input);
}));
console.log(SortArray(toSort, (input, index) => {
    if (input[index] % 2 != 0)
        input.splice(index, 1);
    else if (input[index] < input[index + 1])
        swap(index, input);
}));
//# sourceMappingURL=Sorting.js.map