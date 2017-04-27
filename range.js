function range(min, max){
    var mid = [];
    for(var i = min; i < max; i++){
        mid[i-min].push(i);
    }
    return mid;
}