function deepEquals(obj1, obj2){
	for (var propriedade in obj1) {
	    if (!(obj1[propriedade]===obj2[propriedade])){
	    	return false;
	    }
	}
	return true;
}

// Comandos de teste da função
	
	var p1 ={
		nome:"Raul",
		idade:17
	};
	var p2 ={
		nome:"Raul",
		idade:17
	};
	console.log(deepEquals(p1,p2));
	p1.idade=18;
	console.log(deepEquals(p1,p2));