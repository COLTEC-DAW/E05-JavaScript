function reverseArray(array){
	newArray = [];
	for(var i = array.length; i > 0; i--){
		newArray.push(array[i-1]);
	}
	return newArray;
}