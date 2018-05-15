var l
function xadrez(l){
    var s = "# # # #"
    var s2 = " # # # #"
    for (var x = 0; l > x; x++) {
        if (x % 2 == 0){
            console.log(s2)
        } else{
            console.log(s)
        }
    }

}
l = prompt("Número de linhas")
xadrez(l) 