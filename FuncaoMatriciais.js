function createMatrix(rows, cols, matrixFunc) {
    let matrix = new Array(rows);
  
    for (let i = 0; i < rows; i++) {
      matrix[i] = new Array(cols);
  
      for (let j = 0; j < cols; j++) {
        matrix[i][j] = matrixFunc(i, j);
      }
    }

let matrix1 = createMatrix(3, 3, (i, j) => i + j);
    console.log(matrix1);

let matrix2 = createMatrix(3, 3, (i, j) => i * j);
    console.log(matrix2);

let matrix3 = createMatrix(3, 3, (i, j) => i == j ? 1 : 0);
    console.log(matrix3);

let matrix4 = createMatrix(3, 3, (i, j) => i**2 / (j+1));
    console.log(matrix4);

let matrix5 = createMatrix(3, 3, (i, j) => i > j ? 1 : (i < j ? 5 : 0));
    console.log(matrix5);
    return matrix;
  }