function range(min, max){
    var array = [];
    if(min<max){
        for(i=min;i<max;i++){
            array.push(i);
        }
    }    
}

function range(min, max, j){
    var array = [];
    if(min<max){
        for(i=min;i<max;i+=j){
            array.push(i);
        }
    }    
}

range(1,100);
range(1,100,2)