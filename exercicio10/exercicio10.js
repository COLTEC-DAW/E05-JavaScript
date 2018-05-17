const arr = [1 ,2 ,3]

console.log(toList(arr))

function toList(arr){
    let list ={}
    let atual = list
    for(let i = 0;i<arr.length;i++){
        atual["values"] = arr[i]
        if(i!==arr.length-1){
            atual["rest"] = {}
            atual = atual["rest"]
        } else{
            atual["rest"] = null
        }
        
    }
    return list;
}