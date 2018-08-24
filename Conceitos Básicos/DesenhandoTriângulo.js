function triangulo(num) {
    var str;
    for (let index = 0; index <= num; index++) {
        for(i = index; i > 0; i--) {
            str += "#";    
        }
        console.log(str);
        str="";
    }
}
triangulo (5);