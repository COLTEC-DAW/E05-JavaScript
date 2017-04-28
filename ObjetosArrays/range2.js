function range(min, max, i) {
	var array = [];

	for(var j = min; j <= max; j += i) {
		array.push(j);
	}

	return array;
}

console.log(range(10, 20, 2));
console.log(range(10, 30, 3));
console.log(range(20, 10, 3));