//Trabalhando com intervalos

function range(min, max, j){

    var lista = [];

    for ( var i = min+1; i < max; i = i + j){
        
        lista.push(i);
    }
    return lista;
}

console.log(range(3,14,2));

