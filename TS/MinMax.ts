function min(a: number, b: number): number
{
    if(a < b)
        return a;
    else return b;
}
function max(a: number, b: number): number
{
    if(a > b)
        return a;
    else return b;
}

console.log(min(13, 10));
console.log(max(7, 24));