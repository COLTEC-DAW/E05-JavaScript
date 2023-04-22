// Atividade 1 - Min e Max
function max(a, b) {
    return a>b ? a : 
    a!=b ? b : 
    "Numeros são iguais"
}
function min(a, b) {
    return a<b ? a : 
    a!=b ? b : 
    "Numeros são iguais"
}

// Atividade 2 - Modulo com Recursividade
function mod(num, modulo) {
    if (num === 0) {
        return true
    }
    if (num === 1) {
        return false
    }
    if (num < 0) {
        return mod(-num, modulo)
    }
    return mod(num - modulo, modulo)
}

// Atividade 3 - Contando Caracteres
function countChars(frase, c) {
    let count = 0
    for (let i = 0; i < frase.lenght; i++) {
        if (c === frase[i]) {
            count++
        }
    }
    return count
}

console.log(max(13, 15))
console.log(min(13, 15))
console.log(mod(6, 3))
console.log(countChars("aaaa", "a"))


