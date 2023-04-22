function toList(array) {
    if (array.length === 0) {
        return null
    }
    else 
    {
        return {
            value: array[0],
            rest: toList(array.slice(1))
        }
    }
}

console.log(toList([1, 2, 3]))