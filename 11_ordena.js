function decrescente(teste, maior){
    return (teste >= maior);
}

function crescente(teste, menor){
    return (teste <= menor);
}

function decrescentePar(teste, maior){
    return (teste >= maior && teste%2==0);
}

function crescenteImpar(teste, menor){
    return (teste <= menor && teste%2!=0);
}

function crescenteImparDecrescentePar(teste, compara){ //Compara pode ser o maior par ou o menor impar
    return ((teste <= compara && teste%2!=0)||(teste >= compara && teste%2==0));    
}

function ordena(array, condicaoOrdenadora){
    for (var i=0; i<array.length; i++){
        var posPadrao = i; //posPadrao é a posição no array da variável usada para comparar as outras. No caso de ordenação crescente, é o índice do maior atual
        for (var j=i; j<array.length; j++){
            if (condicaoOrdenadora(array[j], array[posPadrao])){
                var aux = array[j];
                array[j] = array[i];
                array[i] = aux;
            }
        }
    }
    return array;
}