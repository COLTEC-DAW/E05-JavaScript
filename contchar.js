function contChars(a,c){
    a = a.split('');
    var cont = 0;

    for(var i = 0; i < a.length; i++){
        if(a[i] === c){
            cont++;
        }
    }

    console.log(cont);
}