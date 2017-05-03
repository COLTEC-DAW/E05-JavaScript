function intervalos () {

function range(min, max) {
        var j=0;
        var array = [];
        for(i=min ; i<=max; i++) {
             array[j] = i;
            j++;
        }
        return array;
    }
    var min = prompt("Digite o minimo");
    min = parseInt(min);
    var max = prompt("Digite o maximo");
    max = parseInt(max);

    console.log(range(min,max));

}

function intervalos2 () {
      function range(min,max,i) {
        var j=0;
        var array = [];
        for(x=min ; x<=max; x=x+i) {
             array[j] = x;
             j++;
        }
        return array;
    }
     var min = prompt("Digite o minimo");
    min = parseInt(min);
    var max = prompt("Digite o maximo");
    max = parseInt(max);
    var i = prompt("Digite o intervalo de variacao");
    i = parseInt(i);

    console.log(range(min,max,i));

}

function reverterArray ( ) {
    function reverseArray(array) {
        var arrayreverse = [];
        for(i=0, j=((array.length)-1); i<array.length; i++, j-- ) {
            arrayreverse[i]=array[j];
        }
    return arrayreverse;
    }
    var array = prompt("Digite uma frase");

    console.log(reverseArray(array));

}

function listas () {

    function toLista (array) {
        var lista = {};
        var lista2 = lista;

        for (var i = 0; i < array.length; i++) {
        lista2.value = array[i];
        lista2.rest = {};
        lista2 = lista2.rest;
    }
    
    return lista;
    }
    var array = [2,4,5,6];
    var lista = {};
    lista=toLista(array);
}

function DeepEquals () {
        function deepEquals () {
            //terminar
        }
}