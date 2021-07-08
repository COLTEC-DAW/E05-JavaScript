function list(array){
    var lista = {};
    for(i = 0;i < array.length;i++){
        var objeto = {};
        objeto.value = array[i];
        objeto.rest = lista;
        lista = objeto;
    }
    return lista;

}
var array = [1,2,3,4,5,6,7,8,9,10];
console.log(list(array));