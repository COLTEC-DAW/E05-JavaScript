const arr = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9];

console.log(reverseArray(arr))

function reverseArray(arr){
    let sortArr = [];
    for(let i = arr.length-1;i>=0;i--){
        sortArr.push(arr[i]);
    }
    return sortArr;
}