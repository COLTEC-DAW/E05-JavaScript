function toList(array){
    var list = {
        value: null,
        rest: null,
    };    

    var list2 = list;
    var i;

    for (i = 0; i < array.length; i++){
        list2.value = array[i];
        list2.rest = {
            value: null,
            rest: null,
        }

        list2 = list2.rest;
    }

    return list;
}