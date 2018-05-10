function aux(list, i, arr){
    if(arr.length != i){
        list['value'] = arr[i];
        list['rest']= {};
        i++;
        list['rest'] = aux(list['rest'], i, arr);
    }
    return list;
}

function toList(arr){
    var list = {};
    list = aux(list, 0, arr);
    console.log(list);
    return list;
}

toList([1,2,3,4]);
