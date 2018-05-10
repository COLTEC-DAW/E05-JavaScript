function deepEquals(obj1, obj2) {

    var array1 = Object.getOwnPropertyNames(obj1)
    var array2 = Object.getOwnPropertyNames(obj2)
    console.log(array1)
    for (var i = 0; i < array1.length; i++) {
        if(array1[i] !== array2[i]){
            return false
        }       
    }
    return true
}
    var casa1 = {
        cor: "amarela",
        quartos: 3,
        janelas: 5
    }

    var casa2 = {
        cor: "amarela",
        quartos: 3,
        janelas: 5
    }

console.log(deepEquals(casa1, casa2))


  