function makeM(func, tam){
    var m = [[]];
    var i, j;

    for (i = 0; i < tam; i++) {
        m.push([]);
        for (j = 0; j < tam; j++) {
            m[i].push(func(i, j));
        }
    }
    return m;
}
makeM(function (i, j){
    return i+j;
}, 5);

/*makeM(function (i, j){
    return i * j;
}, 5);*/

/*makeM(function (i, j){
    return i == j ? 1 : 0;
}, 5);*/
