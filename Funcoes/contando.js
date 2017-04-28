function countChars(frase, c) {
	var param = new RegExp(c, 'gi');
	var match = frase.match(param);
	return match != null ? match.length : 0;
}

console.log(countChars("ovo", "o"));
console.log(countChars("mirror", "r"));
console.log(countChars("panela", "t"));