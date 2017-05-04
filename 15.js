/* Metodos: */

// 0- Caixa alta nas vogais(cav)
// 1 - Caixa alta nas consoantes(cac)
// 2 - Caixa baixa nas vogais(cbv)
// 3 - Caixa baixa nas consoantes(cbc)

function transforma(frase,metodo){
    //frase = frase.toLowerCase();
    return metodo(frase);
}

function cav(frase){
    frase = frase.toLowerCase();
    var array = frase.split('');
    for(i=0;i<array.length;i++){
        if(array[i] === 'a' || array[i] === 'e' || array[i] === 'i' || array[i] === 'o' || array[i] === 'u'){
            array[i]=array[i].toUpperCase();
        }
    }
    var frasefinal=array.join('');
    return frasefinal;
}

function cac(frase){
    frase = frase.toLowerCase();
    var array = frase.split('');
    for(i=0;i<array.length;i++){
        if(array[i] !== 'a' && array[i] !== 'e' && array[i] !== 'i' && array[i] !== 'o' && array[i] !== 'u'){
            array[i]=array[i].toUpperCase();
        }
    }
    var frasefinal=array.join('');
    return frasefinal;
}

/*
function cbv(frase){
    frase = frase.toLowerCase();
    var array = frase.split('');
    for(i=0;i<array.length;i++){
        if(array[i] !== 'a' && array[i] !== 'e' && array[i] !== 'i' && array[i] !== 'o' && array[i] !== 'u'){
            array[i]=array[i].toUpperCase();
        }
    }
    var frasefinal=array.join('');
    return frasefinal;
}

function cbc(frase){
    frase = frase.toLowerCase();
    var array = frase.split('');
    for(i=0;i<array.length;i++){
        if(array[i] !== 'a' || array[i] !== 'e' || array[i] !== 'i' || array[i] !== 'o' || array[i] !== 'u'){
            array[i]=array[i].toUpperCase();
        }
    }
    var frasefinal=array.join('');
    return frasefinal;
}*/


console.log(transforma("vai pra atmosfera, tipo vavazinho, tipo aunet",cav)); //1
console.log(transforma("vai pra atmosfera, tipo vavazinho, tipo aunet",cac)); //2
console.log(transforma("vai pra atmosfera, tipo vavazinho, tipo aunet",cac)); //3
console.log(transforma("vai pra atmosfera, tipo vavazinho, tipo aunet",cav)); //4