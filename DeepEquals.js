function deepEquals(obj1, obj2) {
    return obj1 === obj2
}

o1 = '10'
o2 = 10
console.log(deepEquals(o1, o2))

o1 = '10'
o2 = '10'
console.log(deepEquals(o1, o2))