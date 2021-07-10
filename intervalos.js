function range(min, max){
    var i;
    var array = [];

    for (i = min + 1; i < max; i++) {
        array.push(i);
    }

    return array;
}

function range2(min, max, i){
    var j;
    var array = [];

    for (j = min + 1; j < max; j += i) {
        array.push(i);
    }

    return array;
}