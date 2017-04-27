var entrada = prompt("Insira uma string para verificarmos se é um palindromo");
var entradaPurificada = [];
for (var i = 0; i<entrada.length; i++) if (entrada[i] !=  " ") entradaPurificada.push(entrada[i].toLowerCase());
var and;
var AND = true;
    for (var i=0; i<entradaPurificada.length; i++) {
        if (entradaPurificada[i] == entradaPurificada[entradaPurificada.length-i-1]) and = true;
        else and = false;
        AND = (and&&AND);
}
if (AND) console.log("É palíndromo");
else console.log("Não é palíndromo");