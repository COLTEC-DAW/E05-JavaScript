function toList(array, i) {
	var list = {}
	
	if(i == array.length) {
		return null;
	}
	else {
		list.value = array[i];
		list.rest = toList(array, i + 1);
		return list;
	}
}

console.log(toList([1,2,3,4,5], 0));