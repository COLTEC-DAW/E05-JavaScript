function DeepEquals(objeto1, objeto2){
    return(objeto1 == objeto2);
}

var objeto1 = {
    num : 10,
};

var objeto2 = objeto1;

var objeto3 = {
    num : objeto1.num,
};

console.log(DeepEquals(objeto1, objeto2));
console.log(DeepEquals(objeto1, objeto3));
console.log(DeepEquals(objeto2, objeto3));