function ordenacao(array, condicao){
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (condicao(array,i,j)) {
                let aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
    }

    return array
}

//funções teste
function decrescente(array, i, j){
    return array[i] < array[j];
}
function crescente(array, i, j){
    return array[i] > array[j];
}
function crescenteImpar(array, i, j){
    return array[i] > array[j] && array[i]%2!==0&&array[j]%2!==0;
}
function decrescentePar(array, i, j){
    return array[i] < array[j] && array[i]%2===0&&array[j]%2===0;
}

function criptografia(str, criterio){
    var novaStr="";
    str=str.toLowerCase(str);
    for(let i=0;i<str.length;i++){
        if(str[i]!==" "){
            novaStr=novaStr+criterio(str[i]);
        }else{
            novaStr+=" ";
        }
    }
    return novaStr;
}

//função para teste
function cifraDeCesar(letra){
    letra=letra.charCodeAt(0)+7;
    a="a";
    a=a.charCodeAt(0);
    z="z";
    z=z.charCodeAt(0);
    if(letra>122){
        letra=a+(letra-z-1);
    }
    return String.fromCharCode(letra);
}

function verificaNumero(num, verificacao){
    if(verificacao(num)){
        console.log(true)
        return true;
    }else{
        console.log(false)
        return false
    }
}

//funções para teste
function ehImpar(num){
    return num%2!==0;
}
function ehPrimo(num){
    var numDivisoes=0;
    for(let i=1;i<=num;i++){
        if(num%i===0){
            numDivisoes++;
        }
    }
    if(numDivisoes===2){
        return true;
    }else{
        return false;
    }
}

//testes
ordenacao([1,3,4,5,2,6], decrescentePar);
criptografia("Ola tudo Bem",cifraDeCesar);
verificaNumero(7,ehPrimo);