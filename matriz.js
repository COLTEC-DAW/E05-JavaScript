function criaMatriz(tam, func){
    let matriz = [];
    for(let i = 1; i <= tam; i++){
        let linha = [];
        for(let j = 1; j <= tam; j++){
            linha.push(func(i, j));
        }
        matriz.push(linha);
    }
    return matriz;
}

function func1(i, j){
    return i + j
}

function func2(i, j){
    return i * j;
}

function func3(i, j){
    if (i == j) return 1;
    else return 0;
}

function func4(i, j){
    return (i*i)/(j+1);
}

function func5(i, j){
    if(i > j) return 1;
    else if (i < j) return 5;
    else return 0;
}

console.log(criaMatriz(5, func1));
console.log(criaMatriz(5, func2));
console.log(criaMatriz(5, func3));
console.log(criaMatriz(5, func4));
console.log(criaMatriz(5, func5));
