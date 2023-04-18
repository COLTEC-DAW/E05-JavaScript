function modOf(num: number, mod: number): boolean
{
    
    let current: number = Math.abs(num);
    current -= Math.abs(mod);
    
    if(current == 0)
        return true;
    else if(current < 0)
        return false;
    else return modOf(current, mod);
}

console.log(modOf(103, 7));