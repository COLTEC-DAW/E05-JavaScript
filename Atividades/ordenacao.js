let ordenacao = function(array = [1, 4, 3, 6, 7, 5], criterio = function(a,b){return a < b}){
    for(i = 0; i < array.length; i++){
        for(j = 0; j < array.length; j++){
            if(criterio(array[i], array[j])){
                let swap = array[i]
                array[i] = array[j]
                array[j] = swap
            }
        }        
    }
}