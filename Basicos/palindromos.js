var string = "";
var inversa = "";
var j, i = 0;

function isChar(string, num) {
	return (string.charCodeAt(num) >= 65 && string.charCodeAt(num) <= 90) ? true : false;
}

function isPalindromo(string) {	
	for(var i = 0, j = (string.length - 1); i < string.length / 2; i++, j--) {
		if(isChar(string, i)) {
			if(isChar(string, j)) {
				if(string.charAt(i) != string.charAt(j)) {
					console.log("NAO E PALINDROMO!");
					return;
				}
			}
			else {
				i--;
			}
		}
		else {
			j++;
		}
	}

	console.log("EH PALINDROMO!");	
}

string = prompt("Insira uma frase sem acentos (me ajuda tbm, ne):");
string = string.toUpperCase();

isPalindromo(string);
