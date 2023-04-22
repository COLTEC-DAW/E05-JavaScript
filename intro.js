// Atividade 1 - Triangulo
for (let hash = 2; hash <= 6; hash++){
    hash_txt = "#"
    console.log(hash_txt.repeat(hash))
}

console.log("\n".repeat(3))

// Atividade 2 - Xadrez
for (let row = 0; row < 8; row++){
    if ((row % 2) == 0) {
        hash_txt = "# "
        console.log(hash_txt.repeat(4))
    } else {
        hash_txt = " #"
        console.log(hash_txt.repeat(4))
    }
    
}

console.log("\n".repeat(3))

// Atividade 3 - Palindromo
var palavra = "Ana"
palavra = palavra.toLowerCase()
if (palavra.split("").reverse().join("") === palavra) {
    console.log("Eh um palindromo")
}
else {
    console.log("Não eh u palindromo")
}

console.log("\n".repeat(3))

// Atividade 4 - Imprimir de 1 a 100
for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log("FizzBuzz")
    }
    else if (i % 3 == 0) {
        console.log("Fizz")
    }
    else if (i % 5 == 0) {
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}