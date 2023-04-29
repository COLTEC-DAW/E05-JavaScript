function reverseArray(array)
{
    var reverso = [];
    var j = 1;

    for(i = 0; i <= array.length; i++)
    {   reverso[i] = array[array.length - j];  
        j++;
    }

    return reverso;
}
var array = [0,1,2,3,4,5,6,7,8,9];
console.log(reverseArray(array));