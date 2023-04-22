function range(min, max, i){

    let mArray = [];

    for(let y = min+1; y < max; y+=i){
        mArray.push(y);   
    }

    return mArray;
}