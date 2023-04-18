const range = (min, max, i=1) => {
    let array = []
    for(j = min; j <= max; j+=i){
        array.push(j);
    }
    return array;
}