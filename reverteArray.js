var array=[];
for(let i=0; i<=10; i++){
    array.push(i)
}

function reverseArray(array){
    var reverseArray = [];
    console.log(array.length);
    var y=array.length;
    for(let i=y; i<0; i--){
        reverseArray.push(array[i]);
    }
    console.log(reverseArray);
}

reverseArray(array);