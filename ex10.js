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
    let list = {value: 0, rest: null}
    for(let i =0; i < array.length - 1; i++){
        tmp = list
        while(tmp.rest != null){
            tmp = tmp.rest
        }
        tmp.value = array[i]
        tmp.rest = {value: 0, rest: null}
    }
    return list
}

function printElem(list){
    while(list != null){
        console.log(list.value)
        list = list.rest
    }
}

array = [2, 6, 3, 9, 0, 11, 20, 7]

x = toList(array)

console.log(x)
printElem(x)