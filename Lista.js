class List {
    constructor(value, rest){
        this.value = value;
        this.rest = rest;
    }

    imprime(){
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
    for(let i = (array.length - 1); i >= 0 ; i--){
       var list = new List(array[i], rest);
       rest = list;
    }
    return list;
}