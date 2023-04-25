let min = parseInt(prompt("Digite o menor numero"))
let max = parseInt(prompt("Digite o maior"))
let num = parseInt(prompt("Digite o intervalo"))

function range(min, max, i){
	let array = []
	for(let j = min; j <= max; j+=i){
		array.push(j)
	}
	return array
}

if(min > max){
	let tmp = min
	min = max
	max = tmp
}

console.log(range(min, max, num))
