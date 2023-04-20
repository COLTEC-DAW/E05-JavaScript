function createMatrix(cols: number, rows: number, creator: Function) : number[][]
{
    let output: number[][] = [];
    for(let i = 0; i < rows; i++)
    {
        output[i] = new Array(cols);
        for(let j = 0; j < cols; j++)
            output[i][j] = (creator(i, j));
    }
    return output;
}
let size: number = 5;

console.log(createMatrix(line, line, (i: number, j: number): number => {
    return i + j;
}))
console.log(createMatrix(line, line, (i: number, j: number): number => {
    return i * j;
}))
console.log(createMatrix(line, line, (i: number, j: number): number => {
    return i == j ? 1 : 0;
}))
console.log(createMatrix(line, line, (i: number, j: number): number => {
    return i*i/(j+1);
}))
console.log(createMatrix(line, line, (i: number, j: number): number => {
    return i > j ? 1 : (i < j ? 5 : 0);
}))