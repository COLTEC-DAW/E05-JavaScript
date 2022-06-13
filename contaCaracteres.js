function countChars(frase, c){
    let contador = 0;
    for(let i = 0; i < frase.length; i++){
        if(frase[i] == c)
            contador++;
    }
    return contador;
}