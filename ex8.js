function range(min, max){
	var nums = [];
	for(var i = min+1; i<max; i++){
		nums.push(i);
	}
	return nums;
}

function range2(min, max, i){
	var nums = [];
	var x = 0;
	for(var j = min+1; j <max; j++){
		if(x==0||x%i==0){
			nums.push(j);
		}
		x++;
	}
	return nums;
}
