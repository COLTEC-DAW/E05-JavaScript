function deepEquals(obj1,obj2)
{
    var keys1 = [];
    for(var key1 in obj1) keys1.push(key1);
    console.log(keys1)

    var keys2 = [];
    for(var key2 in obj2) keys2.push(key2);
    console.log(keys2)

    if (JSON.stringify(keys1) === JSON.stringify(keys2)) return true;
    else return false;
}

var a = {"letter":"A","num":42};
var b = {"letter":"B","num":73};
var clone = {"letter":"A","num":42};

console.log(deepEquals(a,b));
console.log(deepEquals(a,clone));