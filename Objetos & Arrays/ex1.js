function range(min, max, i){
    var array = [];
    for (var j = min; j <= max; j=j+i)
        array.push(j);
    return array;
}
