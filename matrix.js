//As matrizes começam no índice [1,1], como na matemática
function createMatrix(rows, cols, matrixFunc) {
    let matrix = [];

    for (let i = 1; i <= rows; i++) {
        let row = [];

        for (let j = 1; j <= cols; j++) {
            row.push(matrixFunc(i, j));
        }

        matrix.push(row);
    }

    return matrix;
}

function matrixFunc1(i, j) {
    return i + j;
}

function matrixFunc2(i, j) {
    return i * j;
}

function matrixFunc3(i, j) {
    return i == j ? 1 : 0;
}

function matrixFunc4(i, j) {
    return (i ** 2) / (j + 1);
}

function matrixFunc5(i, j) {
    return i > j ? 1 : (i < j ? 5 : 0);
}

console.log(createMatrix(3, 3, matrixFunc1));
console.log(createMatrix(3, 3, matrixFunc2));
console.log(createMatrix(3, 3, matrixFunc3));
console.log(createMatrix(3, 3, matrixFunc4));
console.log(createMatrix(3, 3, matrixFunc5));
