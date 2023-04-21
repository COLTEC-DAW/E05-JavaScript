function range(min,max)
{
    let inter= max - min;
    const vet = [];
    for (i = 1; i < inter; i++)
    {
        vet.push(min+i);
    }
    return vet;
}
console.log(range(2,8));