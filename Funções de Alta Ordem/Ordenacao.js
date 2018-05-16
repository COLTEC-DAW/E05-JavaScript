function ordenacao(array, funcaocompara) {
    return array.sort(funcaocompara);  
}

function Crescente(a,b) {
    return (a>b);
}

function Descrescente(a, b) {
    return (a<b);
}

function DescrescentePares(a, b) {
    if (a%2==0 && b%2==0)
        return (a<b);
}

function CrescenteImpares(a, b) {
    if(a%2!=0 && b%2!=0)
        return (a>b);
}

