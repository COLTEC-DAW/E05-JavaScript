class List {
    constructor(value, rest){
        this.value = value;
        this.rest = rest;
    }

    print(){
        let line = this.value ;
        let p = this.rest;
        while(p){
            line += ", " + p.value;
            p = p.rest;
        }
        console.log(line);
    }
}

function toList(array){
    rest = null;
    for(let i = 0; i < array.length; i++){
       var list = new List(array[i], rest);
       rest = list;
    }
    return list;
}

let array = [1, 2, 3, 4, 5];
let list = toList(array);

list.print();