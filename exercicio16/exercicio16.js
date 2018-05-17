function populaMatriz(matriz, criterio){
    for(let i =0;i<matriz.length; i++){
        for(let j =0;j<matriz[i].length;j++){
            matriz[i][j] = criterio(i, j);
        }
    }
}

let matriz = []

for(let i =0;i<4;i++){
    matriz.push([])
}
for(let i =0;i<4;i++){
    for(let j =0;j<4;j++){
        matriz[i].push([])
    }
}
populaMatriz(matriz, function(i, j){
    return i + j
})

console.log(matriz)