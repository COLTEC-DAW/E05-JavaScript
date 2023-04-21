function range(min,max,i)
{
    let inter= max - min;
    const vet = [];
    for (j = 1; j < inter; j+=i)
    {
        vet.push(min+j);
    }
    return vet;
}
console.log(range(2,8,2));