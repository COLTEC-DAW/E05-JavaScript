function toList(array){
    return auxiliarList(array.reverse());
}

function auxiliarList(array){
    if(array.length<1)
        return null;
    else{
        var novo = {
            value: array.pop(),
            rest: auxiliarList(array)
        }
        return novo;
    }
}

var array = [1,2,3,4,5,6,7,8,9];

console.log(toList(array));