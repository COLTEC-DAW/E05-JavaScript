function mod(number, mod) 
{
	return number % mod == 0 ? true : false;
}

console.log(mod(25, 5));
console.log(mod(25, 4));