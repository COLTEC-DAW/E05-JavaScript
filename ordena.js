var a = [33, 103, 3, 726, 200, 984, 198, 764, 9];

function bubbleSort(a)
{
    var mudado, temp;
    do {
        mudado = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                mudado = true;
            }
        }
    } while (mudado);
}

function ordenaArray(array, func){
    return func(array);
}

ordenaArray(a, bubbleSort);

console.log(a);