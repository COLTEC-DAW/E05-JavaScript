var linhas
var str = "# # # #"
var str2 = " # # # #"
function triangulo(linhas){
    for (var x = 0; linhas > x; x++) {
        if (x % 2 == 0){
            console.log(str2)
        } else{
            console.log(str)
        }
    }

}
linhas = prompt("Quantas linhas voce deseja?")
triangulo(linhas)