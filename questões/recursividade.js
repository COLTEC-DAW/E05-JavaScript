function mod2(num, mod) {
    if (num === true) {
      return true
    } else if (num === false) {
      return false
    } else {
      if (num % mod === 0) {
        return mod2(true, mod)
      } else {
        return mod2(false, mod)
      }
    }
  }
  
  console.log("6 é divisivel por 2: " + mod2(6, 2));
  console.log("7 é divisivel por 2: " + mod2(7, 2));