function min (a, b)
{
    let max;
    let min;
    let inter = 0;
    if ( a > b )
    {
        inter = a - b;
        max = a;
        min = b;
    } 
    else 
    {
        inter = b - a;
        max = b;
        min = a;
    }

    if (inter == 0) return NaN;
    return min + 1;
}
function max (a, b)
{
    let max;
    let min;
    let inter = 0;
    if ( a > b )
    {
        inter = a - b;
        max = a;
        min = b;
    } 
    else 
    {
        inter = b - a;
        max = b;
        min = a;
    }

    if (inter == 0) return NaN;
    return max - 1;
}
let x = min(2,6);
let y = max(2,6);
console.log("min:", x +"\nmax:", y);