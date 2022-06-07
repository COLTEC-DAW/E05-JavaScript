function range(min, max){
    let list = [];
    for(let i = min + 1; i < max; i++){
       list.push(i);
    }
    return list;
}

function range(min, max, step){
    let list = [];
    for(let i = min + 1; i < max; i += step){
        list.push(i);
    }
    return list;
}

function reverseList(list){
    let reversedList = [];
    for(let i = list.length - 1; i <= 0; i--){
        reversedList.push(list[i]);
    }
}

function toLinkedList(list){
   let head = null;
   let previous = null;
   list.forEach((value, index) => {
       let element = {value: value, next: null};
       if(index != 0){
           previous.next = element;
       }
       else{
           head = element;
       }
       previous = element;
   });
   return head;
}

function deepEquals(object1, object2){
    let keysObj1 = Object.keys(object1);
    let keysObj2 = Object.keys(object2);

    if(keysObj1.length !== keysObj2.length){
        return false;
    }

    for(let i = 0; i < keysObj1.length; i++){
        if(keysObj1[i] !== keysObj2[i]){
            return false;
        }
    }

    let objectsAreEquals = true;
    keysObj1.forEach((value) => {
        if(object1[value] !== object2[value]){
            objectsAreEquals = false
        }
    })
    return objectsAreEquals;
}

