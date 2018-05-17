function verificaNumero(Num, criterio){
    return criterio(Num) ? true : false
}

let resultado

resultado = verificaNumero(79, function(num){
    return num%2==0 ? true: false
})

console.log(resultado)
