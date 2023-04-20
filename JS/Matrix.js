function createMatrix(cols, rows, creator) {
    let output = [];
    for (let i = 0; i < rows; i++) {
        output[i] = new Array(cols);
        for (let j = 0; j < cols; j++)
            output[i][j] = (creator(i, j));
    }
    return output;
}
let size = 5;
console.log(createMatrix(line, line, (i, j) => {
    return i + j;
}));
console.log(createMatrix(line, line, (i, j) => {
    return i * j;
}));
console.log(createMatrix(line, line, (i, j) => {
    return i == j ? 1 : 0;
}));
console.log(createMatrix(line, line, (i, j) => {
    return i * i / (j + 1);
}));
console.log(createMatrix(line, line, (i, j) => {
    return i > j ? 1 : (i < j ? 5 : 0);
}));
//# sourceMappingURL=Matrix.js.map