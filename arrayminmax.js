function range(min, max, ine){
    var i = max - min;
    var arrayt = [];

    for (var j = 0; j < i/ine; j++){
        min = min + ine;
        arrayt[j] = min;
    }

    for (j = 0; j < i/ine; j++){
        console.log(arrayt[j]);
    }

}