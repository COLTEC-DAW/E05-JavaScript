function deepEquals(obj1, obj2){
	var a1 = [], a2 = [];
	a1 = obj1.values();
	a2 = obj2.values();

	if(a1.length != a2.length){
		return false;
	}

	for(var i = 0; i < a1.length; i++){
		if(a1[i] != a2[i]){
			return false;
		}
	}

	return true;
}