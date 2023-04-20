function compare(a, b) {
    if (typeof (a) != typeof (b))
        return false;
    let a_Keys = Object.keys(a);
    let b_Keys = Object.keys(b);
    for (let i = 0; i < a_Keys.length; i++) {
        if (a_Keys[i] != b_Keys[i])
            return false;
    }
    let a_Vals = Object.values(a);
    let b_Vals = Object.values(b);
    for (let i = 0; i < a_Vals.length; i++) {
        if (a_Vals[i] != b_Vals[i])
            return false;
    }
    return true;
}
let obj1 = { name: "Toby", age: 23 };
let obj2 = { name: "Clare", age: 24 };
let obj3 = { name: "Toby", age: 23 };
let obj4 = { bruh: "Toby", age: 23 };
console.log(compare(obj1, obj2));
console.log(compare(obj1, obj3));
console.log(compare(obj1, obj4));
//# sourceMappingURL=DeepEqual.js.map