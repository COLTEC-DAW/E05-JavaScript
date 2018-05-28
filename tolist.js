
 function add(list, i, arr){
    if(arr.length != i){
            list['value'] = arr[i];
            list['rest']= {};
            i++;
            list['rest'] = add(list['rest'], i, arr);
        }
        return list;
    }
    
    function toList(arrayt){
        var listat = {};
        listat = add(listat, 0, arrayt);
        console.log(listat);
    }