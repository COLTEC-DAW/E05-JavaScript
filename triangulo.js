var l
function triangulo(x){
    var s = "##"
    for (var n = 0; x > n; n++) {
        console.log(s)
        s +="#"
    }

}
l = prompt("Número de linhas: ")
triangulo(l)