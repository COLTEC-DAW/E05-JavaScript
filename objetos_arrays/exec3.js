var list;
var array = [1,2,3];

function toList(array){

    list = {};
    var temp = list;

    for(var i=0; i<array.length; i++){
        temp.value = array[i];
        temp.rest = {};
        temp=temp.rest;
    }

}

toList(array);

document.write(list.value);
document.write(list.rest.value);
document.write(list.rest.rest.value);