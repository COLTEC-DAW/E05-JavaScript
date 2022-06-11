//trabalhando com intervalos
function range(min,max,i){
    var vetor = [0];
    for(var x = min + 1; x < max; x += i){
        vetor[x-min-1]=x;
    }
    return vetor;
}
var minA = prompt("Digite o menor valor");
var maxA = prompt("Digite o maior valor");
var l = prompt("Digite o valor do vetor");
var Solucao = range(minA,maxA,l);
for (var x = 0; x < Solucao.length; x += l){
    console.log(`${Solucao[x]}`);
}

//revertendo um array
function reverseArray(array){
    return array.reverse();
}

var filmes = ['Bastardos Inglórios', 'The Wolf of Wall Street', 'Django Unchained', 'Marriage Story', 'Pieces of a Woman'];
var array = reverseArray(filmes);

console.log(`${array}`);

//trabalhando com listas

function toList(array){
    for (var j = 0; j < array.length; j++){
    var list = {
        value: array[i],
        rest: list,
      }
    }
      return list;
}

//DeepEquals
function deepEquals(obj1, obj2){
    if(JSON.stringify(obj1)==JSON.stringify(obj2)){
        return true;
    }else{
        return false;
    }
}