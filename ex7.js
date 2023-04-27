let text = prompt("Digite uma palavra/frase")
let abc = prompt("Digite um caracter")

function countChars(str, ch){
	let count = 0
	for(let i = 0; i < str.length; i++){
		if(str[i] == ch){
			count ++
		}
	}
	return count
}

console.log(countChars(text, abc))
