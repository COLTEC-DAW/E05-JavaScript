/*
function range(min, max){
    var mid = [];
    for(var i = min + 1; i < max; i++){
        mid.push(i);
    }
    return mid;
}
*/

// Nova range():

function range(min, max, i){
    var mid = [], interval = 1;
    for(var j = min + 1; j < max; j++){
    	if(interval == i){
    		mid.push(j);
    		interval = 1;
    	}
    	else interval++;
    }
    return mid;
}