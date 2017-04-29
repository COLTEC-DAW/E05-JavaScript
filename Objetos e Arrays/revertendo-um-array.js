function reverseArray(array){
	var reverso = [];
	for(var i=array.length-1;i>=0;i--){
		reverso.push(array[i]);
	}
	return reverso;
}

// Comandos de teste da função

console.log(reverseArray([1,2,3,4,5]));