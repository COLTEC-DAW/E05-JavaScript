function mod (num,mod)
{
    if (num/mod == parseInt(num/mod)) return true;
    else return false;
}
console.log(mod(8,2));