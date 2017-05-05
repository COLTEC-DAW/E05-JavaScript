function addListinha(velha, added){
    console.log(velha);
    var listinha = {};
    listinha.value = added;
    listinha.rest = velha;
    console.log(listinha);
    return listinha;
}

function toList(array){
    console.log("oi");
    var inicio = {};
    inicio.value = array[length-1];
    inicio.rest = undefined;
    console.log(inicio);
    for (var i=(array.length)-2; i <= 0; i--) {
        console.log("loopando");
        inicio = addList (inicio, array[i]);
        console.log("---------------");
    }
    function imprimeListinha(listinha){
        for(var p = listinha; p.rest != undefined; p = p.rest) console.log(p.value);
    };
    return inicio;
}