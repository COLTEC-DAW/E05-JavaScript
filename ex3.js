let texto = prompt("Digite uma palavra para ver se é palindromo")

function palindromo(text){
    let pali = true;
    let num = text.length
    for(let i = 0; i< num; i ++){
        if(text[i] != text[num - 1 -i]){
            pali = false
        }
    }
    return pali
}

if(palindromo(texto)){
    console.log("É um palindromo")
}
else {
    console.log("Não é um palindromo")
}