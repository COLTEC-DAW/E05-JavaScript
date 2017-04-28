function range(min, max) {
	var array = [];

	for(var i = min; i <= max; i++) {
		array.push(i);
	}

	return array;
}

console.log(range(10, 20));
console.log(range(20, 10));