var entrada = prompt("Insira uma string para verificarmos se é um palindromo");
var entradaPurificada;
console.log("Recebi: "+entrada);
console.log("Tamanho: " + entrada.length);
/*
for (var i = 0; i<entrada.length; i++){
    if (entrada[i] == ' '){
        entrada[i] = entrada [i+1];
        i--;
        console.log("purificando...")
    }
}
*/
for (i = 0; i<entrada.length; i++){
    entradaPurificada[i] = entrada[i].toLowerCase;
    console.log("lowering...")
}
console.log("resultado: "+entradaPurificada)