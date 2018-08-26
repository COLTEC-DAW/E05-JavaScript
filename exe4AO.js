function m(i, j, criteria, tam){
    var x = new Array(tam);
   for (var i = 0; i < tam; i++) {
       x[i] = new Array(tam);
   }      
    for (i = 0; i < tam; i++) {
       for (j = 0; j < tam; j++) {
           x[i][j]=criteria(i, j);
       }
   }
   return x;
}
function soma(i, j) {
   return i+j;
}
function multi(i, j) {
   return i*j;
}
function op3(i, j) {
   return i == j ? 1 : 0;
}
function op4(i, j) {
   return i^2/(j+1);
}
function op5(i, j) {
   return i > j ? 1 : (i < j ? 5 : 0);
}
console.log(m(12,13, multi, 4)); 