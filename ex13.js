function cripto(str){
    const A = 65;
    str = str.toUpperCase();
    let finalStr = "";
    for(let i =0; i<str.length;i++){
        let x = str.charCodeAt(i);
        if(x > 87){
            x -= 26;
        }
        if(str.charAt(i).toLowerCase() != str.charAt(i).toUpperCase())
            finalStr += String.fromCharCode(x + 3);
        else{
            finalStr += str.charAt(i);
        }
    }
    return finalStr;
}

console.log(cripto("mlzzko zzzm"));