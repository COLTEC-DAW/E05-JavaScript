//Trabalhando com Intervalos
function range(min, max, i) {

    var array = [0];
    var loop;
    for (loop = min + 1; loop < max; loop += i) {
        array[loop - min - 1] = loop;
    }
    return array;
}

var resultado1 = range(20, 30, 2);

for (var loop = 0; loop < resultado1.length; loop += 2) {

    console.log(`${resultado1[loop]}`);
}

//array um Revertendo

function reverseArray(array) {

    return array.reverse();
}

var times = ['Flamengo', 'Galo', 'Corinthias', 'Vasco'];
var array = reverseArray(times);

console.log(`${array}`);

//Trabalhando com listas

function toList(array) {
    for (var i = 0; i < array.length; i++) {
        var list = {
            value: array[i],
            rest: list,
        }
    }
    return list;
}

function deepEquals(obj1, obj2) {

    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
        return true;
    }
    return false;
}