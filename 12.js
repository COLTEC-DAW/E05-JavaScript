function auxiliar(vetor){
if(vetor.length<1)
        return null;
    else{
        var new = {value: vetor.pop(),rest: auxiliar(vetor)}
        return new;
    }
}

function toList(vetor){ return auxiliar(vetor.reverse()); }

var vetor = [1,2,3,4];

console.log(toList(vetor));