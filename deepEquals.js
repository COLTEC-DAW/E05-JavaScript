function deepEquals(obj1, obj2){
	var props1 = Object.keys(obj1);
	var props2 = Object.keys(obj2);

	if (obj1 === obj2){
		return true;
	}

	for(var i = 0; i < props1.length && i < props2.length; i++){
		if(obj1[props1[i]] !== obj2[props2[i]]){
			return false;
		}
	}
	return true;
}

/*
	Objetos de teste

var fusca = {
  usado: false
};

var ferrari = {
	usado: true
};

*/