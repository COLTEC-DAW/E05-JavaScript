function range(min, max) {
    let array = [];
    for (i = min; i <= max; i++) {
        array.push(i);
    }
    return array
}
console.log(range(1, 20));