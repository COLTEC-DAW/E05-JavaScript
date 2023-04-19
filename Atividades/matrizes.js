const matricial = (matriz = [[1,2,3],[4,5,6],[7,8,9]], action = (i, j) => i + j) => {
    for(i = 0; i < matriz.length; i++){
        for(j = 0; j < matriz[i].length; j++){
            matriz[i][j] = action(i,j)
        }
    }
    return matriz
}