function compare(a, b) {
    if (typeof (a) != typeof (b))
        return false;
    var a_Keys = Object.keys(a);
    var b_Keys = Object.keys(b);
    for (var i = 0; i < a_Keys.length; i++) {
        if (a_Keys[i] != b_Keys[i])
            return false;
    }
    var a_Vals = Object.values(a);
    var b_Vals = Object.values(b);
    for (var i = 0; i < a_Vals.length; i++) {
        if (a_Vals[i] != b_Vals[i])
            return false;
    }
    return true;
}
var obj1 = { name: "Toby", age: 23 };
var obj2 = { name: "Clare", age: 24 };
var obj3 = { name: "Toby", age: 23 };
var obj4 = { bruh: "Toby", age: 23 };
console.log(compare(obj1, obj2));
console.log(compare(obj1, obj3));
console.log(compare(obj1, obj4));
//# sourceMappingURL=DeepEqual.js.map