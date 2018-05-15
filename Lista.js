var list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

function toList(array){
    if(array.length == 0){
		return null;
    }
    	var list = array.shift();
    	return {
    		value: list,
    		rest: toList(array)
    	};
    }