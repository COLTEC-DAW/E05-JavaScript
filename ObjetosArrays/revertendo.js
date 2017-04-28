function reverseArray(array) {
	var reversed = [];

	for(var i = array.length - 1; i >= 0; i--) {
		reversed.push(array[i]);
	}

	return reversed;
}

console.log(reverseArray([5,4,3,2,1]));
console.log(reverseArray(['h','e','l','l','o','w','o','r','l','d','!']));