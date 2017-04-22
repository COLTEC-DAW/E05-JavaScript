function min(a, b) {
	return b < a ? b + 1 : a + 1;
}

function max(a, b) {
	return b < a ? a - 1 : b - 1;
}

console.log(max(1, 10));
console.log(min(67, 30));