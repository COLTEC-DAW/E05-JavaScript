function range(min, max){
    var n = [];
    for(var x = min+1; x<max; x++){
    	n.push(x);
    }
    return n;
}
    
function range2(min, max, i){
	var n = [];
	var x = 0;
	for(var j = min+1; j <max; j++){
		if(x==0||x%i==0){
 			n.push(j);
		}
		x++;
	}
	return n;
}