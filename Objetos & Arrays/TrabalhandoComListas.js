function toList(array) {
    if (array.length === 0) {
        return null;
    }

    var value = array.shift();

    return {
        value: value,
        rest: toList(array)
    };
}

console.log(toList([17,27,37,47]));
