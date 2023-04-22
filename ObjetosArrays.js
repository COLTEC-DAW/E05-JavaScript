//Trabalhando com intervalos
function range(min, max, i){
    let dif = Math.abs(max - min) - 1; //diferença - 1 = intervalo entre maximo e minimo
    let array = new Array(dif); //vetor temporario
    let f = 0;
    
    for(let j = min + 1; j < max; j++ ){
        array[f] = j; //intervalo no vetor temporario
        f++;
    }
    
    let tam_inter=1; //tamanho do intervalo com variacao
    f = 0;
    for(let k =i; k < dif; k+= i ){
        tam_inter++; //calcula tamanho
    }
    let intervalo = new Array(tam_inter);// array do intervalo com variacao
    if(intervalo.length > 1){
        //tamanho do array de intervalo maior que 1 = possui elementos no intervalo com o critério de variação
        for(let k = 0; k < dif; k+= i ){
            intervalo[f] = array[k]; // coloca no intervalo os valores
            f++;
        }
    }else{
        //não possui elementos no intervalo
        intervalo[f] = undefined;
    }
    
    return intervalo;
}


//Revertendo um array
function reverseArray(array) {
    
    // indices array em ordem crescente
	for (var i = 0; i < array.length; i++) {
		// indices array em ordem decrescente
		for (var j = 0; j < (array.length - i - 1); j++) {
				// array ao reverso.
				var temp = array[j]
				array[j] = array[j + 1]
				array[j + 1] = temp
			}
	}
    return array;
}


//Trabalhando com listas
function toList(array) {
    
    var list = null;
    for (let i = array.length-1; i>=0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
  }


//DeepEquals
  function deepEquals(obj1, obj2) {
    //propriedades dos objetos
    var prop1 = Object.getOwnPropertyNames(obj1);
    var prop2 = Object.getOwnPropertyNames(obj2);
    
  /*verifica se propriedades são iguais, 
  se possuem o mesmo tamanho e valores literais*/
  if(prop1 === prop2 && prop1.length === prop2.length && obj1 === obj2){
      return true;
  }else{
      return false;
  }
}

//Implementando funções
let array_1 = ["c" ,"o" ,"c" , "a", "-", "c", "o", "l", "a"]
let array_2 = [1, 2, 3, 4, 5];
let obj1 = new Object();
let obj2 = new Object();

console.log(range(3, 13, 3));
console.log(reverseArray(array_1))
console.log(toList(array_2))
console.log(deepEquals(obj1, obj2))

