function Check(num: number, method: Function) : boolean
{
    return method(num);
}

let isPar: Function = (num: number) =>
{
    if(num % 2 == 0)
        return true;
    else return false;
}
let isPrime: Function = (num: number) =>
{
    for(let i = 2; i <= num / 2; i++)
    {
        if(Math.floor(num / i) == Math.ceil(num / i))
            return false
    }
    return true;
}
let isPow2: Function = (num: number) =>
{
    for(let i = num; i > 1; i /= 2)
    {
        if(i % 2 != 0)
            return false;
    }
    return true;
}

let validate: number = 19;
console.log(validate);
console.log("Par? " + Check(validate, isPar))
console.log("Primo? " + Check(validate, isPrime))
console.log("Potencia de 2? " + Check(validate, isPow2))
