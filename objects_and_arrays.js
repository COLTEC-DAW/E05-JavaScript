var range = function(min, max, intervalo){
    var res = [];
    let valor = min+intervalo;
    
    while(valor < max){
        res.push(valor);
        valor += intervalo;
    }

    return res;
}

var reverseArray = function(array){
    reverse = [];
    for (let i=array.length-1; i>=0; i--){
        reverse.push(array[i]);
    }
    return reverse;
}

var toList = function(array){
    var list = {
        value: null,
        rest: null
    };    
    
    var mList = list;
    for (var i=0; i<array.length; i++){
        mList.value = array[i];
        mList.rest = {
            value: null,
            rest: null
        }

        mList = mList.rest;
    }

    return list;
}

// Deep Equals //
var deepEquals = function(obj1, obj2){
    var ok = true;

    for (var prop in obj1){
        if (prop in obj2){ // Verifica se a propriedade está também no objeto 2 //
            if (obj1[prop] !== obj2[prop]){ // Verifica se o valor da propriedade é o mesmo //
               ok = false;
            }
        }else{
            ok = false;
        }

        if (!ok){
            return false;
        }
    }
    return true;
}

// Testando range //
console.log(range(30, 40, 1));

// Testando reverse //
console.log(reverseArray([30, 20, 10]));

//Testando toList //
console.log(toList([1, 2, 3, 4, 5]));

// Testando deepEquals //
objeto1 = {
    carro: "Fiat1",
    modelo: "Palio"
}

objeto2 = {
    marca: "Fiat",
    modelo: "Palio"
}
console.log(deepEquals(objeto1, objeto1));
console.log(deepEquals(objeto1, objeto2));