function reverseArray(array){
	var newArray = [];
	for(var i = array.length -1; i >= 0; i--) {
		newArray.push(array[i]);
	}
	return newArray;
}