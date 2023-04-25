function mod2(num){
	if(num > 1){
		return mod2(num -2)
	}
	else if(num == 1){
		return false
	}else{
		return true
	}
}

function mod(num, mod){
	if(num > 1){
		return mod2(num - mod)
	}
	else if(num == 1){
		return false
	}else{
		return true
	}
}
let num = parseInt(prompt("Digite um numero para ver se é divisivel por dois"))

if(mod2(num) == true){
	console.log("É divisivel por dois")
}else{
	console.log("Não é divisivel por dois")
}

num = parseInt(prompt("Digite o numero para ver se é divisivel"))
let m = parseInt(prompt("Digite o modulo"))

if(mod(num, m) == true){
	console.log("É divisivel")
}else{
	console.log("Não é divisivel")
}





