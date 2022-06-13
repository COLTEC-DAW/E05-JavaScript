function range(min, max){
    let arrayRange = [0];
    let contador = 0;
    for(let i = min+1; i < max; i++){
        arrayRange[contador] = i;
        contador++;
    }
    return arrayRange;
}