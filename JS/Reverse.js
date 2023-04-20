let array = [3, -4, 77, 12, 0, -2, -5, 12, 15, 1, 2, -3, 4];
function reverse(input) {
    let output = [];
    for (let i = 0; i < input.length; i++) {
        output[i] = input[input.length - 1 - i];
    }
    return output;
}
console.log(reverse(array));
console.log(array);
//# sourceMappingURL=Reverse.js.map