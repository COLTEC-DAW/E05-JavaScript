const arrayToList = (array) =>{
    let list = {}
    let positionActual = list
    for(i = 0; i < array.length; i++){
        positionActual.value = array[i]
        positionActual.rest = {}
        positionActual = positionActual.rest
    }
    return list
}