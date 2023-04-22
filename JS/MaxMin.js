var numA = Number.parseFloat(prompt('Digite um numero: '))
var numB = Number.parseFloat(prompt('Digite um numero: '))

function min(a, b) {

    if (a < b) {
        return a
    } 
    else if (b < a){
        return b
    }
    else{
        return a
    }
    
}

function max(a, b) {
    if (a > b) {
        return a
    } 
    else if (b > a){
        return b
    }
    else{
        return a 
    }            
}

console.log(min(numA, numB))
console.log(max(numA, numB))