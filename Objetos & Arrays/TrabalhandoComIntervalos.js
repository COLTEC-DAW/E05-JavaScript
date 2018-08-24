function range(min, max, i) {
    var array = [], count = i-1;
    for(min++; min < max; min++) {
      if(count != i-1){
        count++;
        continue;
      }
      array.push(min);
      count = 0;
    }
    return array;
  }
  
  console.log(range(0,10,3));