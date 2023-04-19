class LinkedList {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }


    print(){
        for(let p = this; p != null; p = p.next){
            console.log(p.value);
        }
    }
}

function toList(a){
    next = null;

    for(let i = 0; i < a.length; i++){
        var list = new LinkedList(a[i], next);
        next = list;
    }

    return list;
}


let a = [3, 'g', 5, 7, 2, 'g'];
let l = toList(a);
l.print();
