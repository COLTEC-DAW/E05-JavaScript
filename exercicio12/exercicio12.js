function ordena(arr, criterio){
    isSorting = true;
    while(isSorting){
        isSorting = false
        for(let i =0;i<arr.length-1;i++){
            if(criterio(arr[i], arr[i+1])){
                isSorting = true;
                temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
            }
        }
    }
}
let arr =[3,2,1,5,8]
ordena(arr, function(a, b){
    return a>b? true : false;
})

console.log(arr)