function criptogrfia(text, posicoes) {
    var alfabeto = "abcdefghijklmnopqrstuvwxyz "
    var final = ""

    for(var i = 0; i < text.length; i++) {
        var index = alfabeto.indexOf(text[i])
        final += alfabeto[(index + posicoes)%alfabeto.length]  
    }
    return final
}

var criptografada = criptogrfia("amanhã tem mais", 10, false)
console.log(criptografada)