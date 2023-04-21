function arrayToList(array){
    let list = {};
    let novo = list;
    for(i = 0; i < array.length; i++){
        novo.value = array[i];
        novo.rest = {};
        novo = novo.rest;
    }
    return list
}

let array = [6, 9 , 9 ,6 ,4];
let list = arrayToList(array);
console.log(list);