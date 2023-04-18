const divisivel = (num, mod) => {
    if(num === true){
        return true
    }else if(num === false){
        return false
    }else{
        if(num % mod === 0){
            return divisivel(true, mod)
        }else{
            return divisivel(false, mod)
        }
    }
}