var list = /** @class */ (function () {
    function list(data) {
        if (data === void 0) { data = 1234567890; }
        this.value = data;
        this.next = null;
    }
    return list;
}());
function toList(source) {
    var index = new list(source[0]);
    var base = index;
    for (var i = 1; i < source.length; i++) {
        var step = new list(source[i]);
        index.next = step;
        index = index.next;
    }
    return base;
}
function printList(input) {
    for (var i = input; i != null; i = i.next)
        console.log(i.value);
}
var arr = [1, 2, 3, -4, 0];
console.log(arr);
printList(toList(arr));
//# sourceMappingURL=List.js.map