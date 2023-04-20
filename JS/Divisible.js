function modOf(num, mod) {
    var current = Math.abs(num);
    current -= Math.abs(mod);
    if (current == 0)
        return true;
    else if (current < 0)
        return false;
    else
        return modOf(current, mod);
}
console.log(modOf(103, 7));
//# sourceMappingURL=Divisible.js.map