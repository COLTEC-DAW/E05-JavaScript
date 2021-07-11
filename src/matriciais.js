var matriz = function(ind1, ind2, criterio){
    var mtz = [ind1];
    for(var i=0; i<ind1; i++){
        mtz[i] = [ind2];
        for(var j=0; j<ind2; j++){
            mtz[i][j] = criterio(i,j);
        }
    }
    return mtz;
}
var ind1 = 3;
var ind2 = 3;
console.log(matriz(ind1,ind2, function(x,y){ return x+y; }));
console.log(matriz(ind1,ind2, function(x,y){ return x*y; }));
console.log(matriz(ind1,ind2, function(x,y){ return x == y ? 1 : 0; }));
console.log(matriz(ind1,ind2, function(x,y){ return x^2/(y+1); }));
console.log(matriz(ind1,ind2, function(x,y){ return x > y ? 1 : (x < y ? 5 : 0); }));