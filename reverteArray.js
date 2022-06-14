function reverteArray(array){
    let arrayReverso = [0];
    let comprimento = array.length - 1;
    for(let i = 0; i <= comprimento; i++){
        arrayReverso[i] = array[comprimento - i];
    }
    return arrayReverso;
}