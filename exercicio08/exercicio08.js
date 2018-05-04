const min = 10;
const max = 25;
const variacao = 2;

console.log(range(min, max, variacao))

function range(min, max, variacao){
    let arr = [];
    for(let i = min+1;i<max;i=i+variacao){
        arr.push(i);
    }
    return arr;
}