function soma(x, y){
	return x + y; 
}

function matrix(x, y, pattern){
	var mat =[][];

	for(var i = 0; i < x; i++){
		for (var j = 0; j < y; j++) {
			mat[x][y] = soma(x,y);
		}
	}
}