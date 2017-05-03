var array = [0,1,2,3,4,5];

function reverseArray(array){
    
    var reverse = [];

    for(var i=0, j=array.length-1; i<array.length-1;i++, j--){
        reverse[i] = array[j];
    }

    return reverse;
}


document.write(reverseArray(array));