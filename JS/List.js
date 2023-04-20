class list {
    value;
    next;
    constructor(data = 1234567890) {
        this.value = data;
        this.next = null;
    }
}
function toList(source) {
    let index = new list(source[0]);
    let base = index;
    for (let i = 1; i < source.length; i++) {
        let step = new list(source[i]);
        index.next = step;
        index = index.next;
    }
    return base;
}
function printList(input) {
    for (let i = input; i != null; i = i.next)
        console.log(i.value);
}
let arr = [1, 2, 3, -4, 0];
console.log(arr);
printList(toList(arr));
//# sourceMappingURL=List.js.map