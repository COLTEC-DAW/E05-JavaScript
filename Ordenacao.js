function bubbleSort(arr, compareFn) {
    const n = arr.length;
    let swapped = false;
    
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (compareFn(arr[i], arr[i + 1])) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    
    return arr;
  }
  function compCresc(a, b) {
    return a > b;
  }
  function compDesc(a, b) {
    return a < b;
  }
  function compCrescAbs(a, b) {
    return Math.abs(a) > Math.abs(b);
  }
  const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

console.log(bubbleSort(arr.slice(), compCresc));
console.log(bubbleSort(arr.slice(), compDesc));
console.log(bubbleSort(arr.slice(), compCrescAbs));
