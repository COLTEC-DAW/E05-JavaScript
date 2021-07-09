function toList(array){
    for(var i = 0; i < array.length; i++){
        var list = {
            value: array[i],
            rest: list,
        }
    }
    return list;
}

var array = [10, 20, 30, 40, 50];

var list = toList(array);

console.log(list);
