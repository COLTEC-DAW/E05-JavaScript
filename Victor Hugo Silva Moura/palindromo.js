var frase = prompt("Digite a frase sem pontuação e/ou acentos gráficos");
var fraseInvertida = frase.split("").reverse().join(""); //Inverte a frase
/*
	Retira os espacos para facilitar a comparação
*/
frase = frase.split(" ").join("");
fraseInvertida = fraseInvertida.split(" ").join("");

if(frase == fraseInvertida){
	console.log("Sucesso! É um palíndromo\n");
}
else{
	console.log("Não é palíndromo\n");
}