var meu_array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function makeRest(array, i){
    if(i < array.length){
        var tmp = {
            value: array[i],
            rest: makeRest(array, ++i)
        };
        return tmp;
    }else{
        return null;
    }
}

function toList(array){
    var list =  makeRest(array, 0);
    return list;
}

console.log(toList(meu_array));