function range(min, max) {
    arr = []
    for (var i = Math.ceil(min); i <= Math.floor(max); i++) {
        arr.push(i)
    }
    return arr
}

function rangeJump(min, max, k) {
    arr = []
    for (var i = Math.ceil(min); i <= Math.floor(max); i += k) {
        arr.push(i)
    }
    return arr
}

array = range(2.7, 9)
console.log(array)

array = rangeJump(2.7, 12.8, 2)
console.log(array)