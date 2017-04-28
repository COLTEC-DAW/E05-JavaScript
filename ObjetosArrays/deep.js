function deepEqual(obj1, obj2) {
	for(var key in obj1) {
		if(obj1[key] !== obj2[key]) {
			return false;
		}
	}

	return true;
}

var obj1 = {
	nome: "eduardo",
	cpf: 123456789,
	idade: 17
}

var obj2 = {
	nome: "pedro",
	cpf: 987654321,
	idade: 21,
	extra: true
}

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj1));