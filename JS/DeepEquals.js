function endereco(cidade, bairro, rua) {
    this.cidade = cidade,
    this.bairro = bairro,
    this.rua = rua
}

const end1 = new endereco('beaga', 'prates', 'daniel')
const end2 = new endereco('beaga', 'prates', 'daniel')

function deepEquals(obj1, obj2) {
for (data in obj1 ) {
    if( obj1[data] != obj2[data]){ 
        return false
    }
}
return true
}

console.log(deepEquals(end1,end2))