let char = "# "; //Caracter que se repete
let chars = char; //Soma de Caracteres

var linhas = prompt("Numero de linhas: "); // Numero de Linhas

for(let i = 0; i < linhas; i++){
    //Numeros de linhas + 1 = número de caracteres
    chars = chars + char; // Soma recursiva
    console.log(chars);
}