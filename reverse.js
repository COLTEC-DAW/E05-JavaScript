function reverseArray(arrayt){
    arrayt = arrayt.split('');
    var narray = [];

    for(var i = arrayt.length - 1; i >= 0; i--){
            narray.push(arrayt[i]);
    }

    narray = narray.join('');

    console.log(narray);
}