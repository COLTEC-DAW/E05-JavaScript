function max(a, b){
    if(a == b){
        return null
    }else if(a > b){
        return a
    }else {
        return b
    }
}

function min(a, b){
    if(a == b){
        return null
    }else if(a < b){
        return a
    }else {
        return b
    }
}

function testa(x, y){
    if(max(x, y) != null){
        console.log("O maior numero é " + max(x, y) + " Menor numero é ", min(x, y))
    }else {
        console.log("Os numeros são iguais")
    }
}

testa(3, 8)
testa(340, 276)
testa(20, 20)




