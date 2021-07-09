function range(start, end) {
    if(start > end){
        var aux = start;
        start = end;
        end = aux;
    }

    var array = [];

    for (var i = start + 1; i < end; i++) {
        array.push(i);
    }
    return array;
}

function rangeWithI(start, end, i){
    if(start > end){
        var aux = start;
        start = end;
        end = aux;
    }

    var array = [];

    for(var j = start + 1; j < end; j += i){
        array.push(j)
    }

    return array;
}

var array = range(10, 2);
var arrayWithI = rangeWithI(2, 10, 2);

console.log(array);
console.log(arrayWithI);

