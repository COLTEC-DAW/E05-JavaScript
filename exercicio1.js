var linhas
var str = "##"
function triangulo(linhas){
    for (var x = 0; linhas > x; x++) {
        console.log(str)
        str +="#"
    }

}
linhas = prompt("Quantas linhas voce deseja?")
triangulo(linhas)