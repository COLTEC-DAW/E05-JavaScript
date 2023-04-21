function createMatrix(rows, cols, matrixFunction) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = matrixFunction(i, j);
        }
    }
    return matrix;
}

const matriz1 = createMatrix(3, 3, (i, j) => i + j);
console.log(matriz1);

const matriz2 = createMatrix(3, 3, (i, j) => i * j);
console.log(matriz2);

const matriz3 = createMatrix(3, 3, (i, j) => i === j ? 1 : 0);
console.log(matriz3);

const matriz4 = createMatrix(3, 3, (i, j) => i ** 2 / (j + 1));
console.log(matriz4);

const matriz5 = createMatrix(3, 3, (i, j) => i > j ? 1 : (i < j ? 5 : 0));
console.log(matriz5);