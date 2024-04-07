let originalArray = [1,5,7,7,7,3,21,43,24,65,236,32,53,21523,5, 'b','b'];
let uniqueSet = new Set(originalArray);
let newArray = Array.from(uniqueSet);

console.log(newArray);