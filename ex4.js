for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FiizBuzz")
    }
    else if(i % 3 == 0){
        console.log("Fiiz")
    }
    else if(i % 5 == 0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}